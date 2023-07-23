import React, { useEffect, useState } from "react";
import { PDFViewer, Document, Page, Font } from "@react-pdf/renderer";
import { main } from "./tables/table-style";

import interThin from "../../../assets/font/Inter/Inter-Thin.ttf";
import interExtraLight from "../../../assets/font/Inter/Inter-ExtraLight.ttf";
import interLight from "../../../assets/font/Inter/Inter-Light.ttf";
import interRegular from "../../../assets/font/Inter/Inter-Regular.ttf";
import interMedium from "../../../assets/font/Inter/Inter-Medium.ttf";
import interSemiBold from "../../../assets/font/Inter/Inter-SemiBold.ttf";
import interBold from "../../../assets/font/Inter/Inter-Bold.ttf";
import interExtraBold from "../../../assets/font/Inter/Inter-ExtraBold.ttf";
import interBlack from "../../../assets/font/Inter/Inter-Black.ttf";

import { Pages1 } from "./tables/pages-1";
import { Pages2 } from "./tables/pages-2";
import { Pages3 } from "./tables/pages-3";
import { Pages4 } from "./tables/pages-4";
import { Pages5 } from "./tables/pages-5";
import { Pages6 } from "./tables/pages-6";
import { Cover } from "./tables/cover";

import { useGetOneSiswaQuery } from "../../../store/features/siswa/siswaSlice";
import { useGetNilaiQuery } from "../../../store/features/nilai/nilaiSlice";
import {
    useGetSikapQuery,
    useGetSaranQuery,
    useGetPrestasiQuery,
    useGetKehadiranQuery,
} from "../../../store/features/sikap/sikapSlice";
import { useGetEskulQuery } from "../../../store/features/eskul/eskulSlice";
import { useWhoamiQuery } from "../../../store/features/user/userSlice";
import { useNavigate, useParams } from "react-router";

export const Preview = (props) => {
    const navigate = useNavigate();

    const { nisn, semester } = useParams();
    const { data: guru } = useWhoamiQuery();
    const { data: siswa } = useGetOneSiswaQuery(nisn);
    const { data: sikap } = useGetSikapQuery(nisn);
    const { data: saran } = useGetSaranQuery(nisn);
    const { data: prestasi } = useGetPrestasiQuery(nisn);
    const { data: kehadiran } = useGetKehadiranQuery(nisn);
    const { data: eskul } = useGetEskulQuery(nisn);
    const { data: nilai } = useGetNilaiQuery(nisn);
    const [formNilai, setFormNilai] = useState({
        ipa: {
            ki3_1: "",
            ki4_1: "",
            ki3_2: "",
            ki4_2: "",
            mapel: "",
            alias: "",
        },
    });
    let panggilan;
    let semNilai;
    let raportSiswa;
    if (siswa) {
        raportSiswa = {
            nama: siswa.nama,
            nisn: siswa.nisn,
            nis: siswa.nis,
            kelas: "1",
        };
    }
    if (nilai) {
        nilai.map((el, index) => {
            semNilai = {
                ...semNilai,
                [el.mapel.alias]: {
                    ki3_1: el.nilai_k3_smst1,
                    ki4_1: el.nilai_k4_smst1,
                    ki3_2: el.nilai_k3_smst2,
                    ki4_2: el.nilai_k4_smst2,
                    mapel: el.mapel.nama,
                    alias: el.mapel.alias,
                },
            };
        });
        if (Object.keys(formNilai).length == 1) {
            setFormNilai(semNilai);
        }
    }

    Font.register({
        family: "Inter",
        fonts: [
            { src: interThin, fontWeight: 100 },
            { src: interExtraLight, fontWeight: 200 },
            { src: interLight, fontWeight: 300 },
            { src: interRegular },
            { src: interMedium, fontWeight: 500 },
            { src: interSemiBold, fontWeight: 600 },
            { src: interBold, fontWeight: 700 },
            { src: interExtraBold, fontWeight: 800 },
            { src: interBlack, fontWeight: 900 },
        ],
    });

    Font.registerHyphenationCallback((word) => {
        return [word];
    });

    useEffect(() => {
        if (semester > 2 || semester < 1) {
            navigate("/dashboard");
        }
        if (raportSiswa) {
            panggilan = raportSiswa.nama.split(" ")[0];
        }
    }, [
        semNilai,
        siswa,
        nilai,
        guru,
        sikap,
        eskul,
        saran,
        prestasi,
        kehadiran,
    ]);
    if (
        semNilai &&
        siswa &&
        nilai &&
        guru &&
        sikap &&
        eskul &&
        saran &&
        prestasi &&
        kehadiran
    ) {
        return (
            <div
                style={{
                    height: "72vh",
                }}>
                <PDFViewer width="100%" height="100%">
                    <Document>
                        <Page size="A4" style={main.body}>
                            <Cover
                                nama={raportSiswa.nama}
                                nisn={raportSiswa.nisn}
                                nis={raportSiswa.nis}
                            />
                            <Pages1
                                nama={raportSiswa.nama}
                                panggilan={raportSiswa.nama.split(" ")[0]}
                                nis={raportSiswa.nis}
                                kelas={siswa.kelaId}
                                nilai={[nilai[0], nilai[1]]}
                                semester={semester}
                                sikap={sikap.data}
                            />
                            <Pages2
                                nama={raportSiswa.nama.split(" ")[0]}
                                nilai={[nilai[2], nilai[3], nilai[4]]}
                                semester={semester}
                            />
                            <Pages3
                                nama={raportSiswa.nama.split(" ")[0]}
                                nilai={[nilai[5], nilai[6], nilai[7]]}
                                semester={semester}
                            />
                            <Pages4
                                nama={raportSiswa.nama.split(" ")[0]}
                                nilai={[nilai[8]]}
                                semester={semester}
                                eskul={eskul.data}
                            />
                            <Pages5
                                nama={raportSiswa.nama.split(" ")[0]}
                                semester={semester}
                                eskul={eskul.data}
                                saran={saran.data}
                                prestasi={prestasi.data}
                            />
                        </Page>
                        <Page size="A4" style={main.body}>
                            <Pages6
                                wali={guru}
                                eskul={eskul.data}
                                semester={semester}
                                kehadiran={kehadiran.data}
                            />
                        </Page>
                    </Document>
                </PDFViewer>
            </div>
        );
    }
};

export const Download = (props) => {
    const data = props;

    Font.register({
        family: "Inter",
        fonts: [
            { src: interThin, fontWeight: 100 },
            { src: interExtraLight, fontWeight: 200 },
            { src: interLight, fontWeight: 300 },
            { src: interRegular },
            { src: interMedium, fontWeight: 500 },
            { src: interSemiBold, fontWeight: 600 },
            { src: interBold, fontWeight: 700 },
            { src: interExtraBold, fontWeight: 800 },
            { src: interBlack, fontWeight: 900 },
        ],
    });

    Font.registerHyphenationCallback((word) => {
        return [word];
    });
    return (
        <Document>
            <Page size="A4" style={main.body}>
                <Cover nama={data.nama} nisn={data.nisn} nis={data.nis} />
                <Pages1 nama={data.nama} nis={data.nis} kelas={data.kelas} />
                <Pages2 />
                <Pages3 />
                <Pages4 />
                <Pages5 />
                <Pages6 />
            </Page>
        </Document>
    );
};
