import { main, tables_b } from "./table-style";
import { Text, View } from "@react-pdf/renderer";

export const Pages1 = (props) => {
    const descPai = [
        [
            "baik dalammemahami makna al-Asmau al- Husna: as-Samad, Al-Muqtadir, Al-Muqaddim, dan Al-Baqi, baik dalam memahami makna Q.S. Al-Kafrun, Q.S. Al-Ma'idah/5:2-3 dan Q.S. al-hujurat/49:12-13 dengan benar",
            "baik dalammemahami makna al-Asmau al- Husna: as-Samad, Al-Muqtadir, Al-Muqaddim, dan Al-Baqi, baik dalam memahami makna Q.S. Al-Kafrun, Q.S. Al-Ma'idah/5:2-3 dan Q.S. al-hujurat/49:12-13 dengan benar",
            "baik dalammemahami makna al-Asmau al- Husna: as-Samad, Al-Muqtadir, Al-Muqaddim, dan Al-Baqi, baik dalam memahami makna Q.S. Al-Kafrun, Q.S. Al-Ma'idah/5:2-3 dan Q.S. al-hujurat/49:12-13 dengan benar",
            "baik dalammemahami makna al-Asmau al- Husna: as-Samad, Al-Muqtadir, Al-Muqaddim, dan Al-Baqi, baik dalam memahami makna Q.S. Al-Kafrun, Q.S. Al-Ma'idah/5:2-3 dan Q.S. al-hujurat/49:12-13 dengan benar",
            "baik dalammemahami makna al-Asmau al- Husna: as-Samad, Al-Muqtadir, Al-Muqaddim, dan Al-Baqi, baik dalam memahami makna Q.S. Al-Kafrun, Q.S. Al-Ma'idah/5:2-3 dan Q.S. al-hujurat/49:12-13 dengan benar",
        ],
        [
            "baik dalam menunjukkan hikmah zakat, infaq, dan sedekah sebagai implementasi rukun Islam, baik dalam menunjukkan contoh hikmah ber-iman kepada hari akhir yang dapat membentuk perilaku akhlak mulia",
            "baik dalam menunjukkan hikmah zakat, infaq, dan sedekah sebagai implementasi rukun Islam, baik dalam menunjukkan contoh hikmah ber-iman kepada hari akhir yang dapat membentuk perilaku akhlak mulia",
            "baik dalam menunjukkan hikmah zakat, infaq, dan sedekah sebagai implementasi rukun Islam, baik dalam menunjukkan contoh hikmah ber-iman kepada hari akhir yang dapat membentuk perilaku akhlak mulia",
            "baik dalam menunjukkan hikmah zakat, infaq, dan sedekah sebagai implementasi rukun Islam, baik dalam menunjukkan contoh hikmah ber-iman kepada hari akhir yang dapat membentuk perilaku akhlak mulia",
            "baik dalam menunjukkan hikmah zakat, infaq, dan sedekah sebagai implementasi rukun Islam, baik dalam menunjukkan contoh hikmah ber-iman kepada hari akhir yang dapat membentuk perilaku akhlak mulia",
        ],
    ];

    const descPkn = [
        [
            "baik dalam menelaah baik dalam mengampanyekan keberagaman sosial, budaya, manfaat keanekaragaman sosial, dan ekonomi masyarakat, baik budaya, dan ekonomi, baik dalam Pendidikan dalam menganalisis penerapan menyajikan hasil telaah persatuan",
            "baik dalam menelaah baik dalam mengampanyekan keberagaman sosial, budaya, manfaat keanekaragaman sosial, dan ekonomi masyarakat, baik budaya, dan ekonomi, baik dalam Pendidikan dalam menganalisis penerapan menyajikan hasil telaah persatuan",
            "baik dalam menelaah baik dalam mengampanyekan keberagaman sosial, budaya, manfaat keanekaragaman sosial, dan ekonomi masyarakat, baik budaya, dan ekonomi, baik dalam Pendidikan dalam menganalisis penerapan menyajikan hasil telaah persatuan",
            "baik dalam menelaah baik dalam mengampanyekan keberagaman sosial, budaya, manfaat keanekaragaman sosial, dan ekonomi masyarakat, baik budaya, dan ekonomi, baik dalam Pendidikan dalam menganalisis penerapan menyajikan hasil telaah persatuan",
            "baik dalam menelaah baik dalam mengampanyekan keberagaman sosial, budaya, manfaat keanekaragaman sosial, dan ekonomi masyarakat, baik budaya, dan ekonomi, baik dalam Pendidikan dalam menganalisis penerapan menyajikan hasil telaah persatuan",
        ],
        [
            "baik dalam menelaah baik dalam mengampanyekan keberagaman sosial, budaya, manfaat keanekaragaman sosial, dan ekonomi masyarakat, baik budaya, dan ekonomi, baik dalam Pendidikan dalam menganalisis penerapan menyajikan hasil telaah persatuan",
            "baik dalam menelaah baik dalam mengampanyekan keberagaman sosial, budaya, manfaat keanekaragaman sosial, dan ekonomi masyarakat, baik budaya, dan ekonomi, baik dalam Pendidikan dalam menganalisis penerapan menyajikan hasil telaah persatuan",
            "baik dalam menelaah baik dalam mengampanyekan keberagaman sosial, budaya, manfaat keanekaragaman sosial, dan ekonomi masyarakat, baik budaya, dan ekonomi, baik dalam Pendidikan dalam menganalisis penerapan menyajikan hasil telaah persatuan",
            "baik dalam menelaah baik dalam mengampanyekan keberagaman sosial, budaya, manfaat keanekaragaman sosial, dan ekonomi masyarakat, baik budaya, dan ekonomi, baik dalam Pendidikan dalam menganalisis penerapan menyajikan hasil telaah persatuan",
            "baik dalam menelaah baik dalam mengampanyekan keberagaman sosial, budaya, manfaat keanekaragaman sosial, dan ekonomi masyarakat, baik budaya, dan ekonomi, baik dalam Pendidikan dalam menganalisis penerapan menyajikan hasil telaah persatuan",
        ],
    ];

    const descSikap = {
        spiritual: {
            A: "A. sangat baik dalam ketaatan beribadah sangat baik dalam perilaku bersyukur, sangat baik dalam berdoa sebelum beraktivitas, sangat baik dan toleransi beribadah",
            B: "B. sangat baik dalam ketaatan beribadah sangat baik dalam perilaku bersyukur, sangat baik dalam berdoa sebelum beraktivitas, sangat baik dan toleransi beribadah",
            C: "C. sangat baik dalam ketaatan beribadah sangat baik dalam perilaku bersyukur, sangat baik dalam berdoa sebelum beraktivitas, sangat baik dan toleransi beribadah",
            D: "D. sangat baik dalam ketaatan beribadah sangat baik dalam perilaku bersyukur, sangat baik dalam berdoa sebelum beraktivitas, sangat baik dan toleransi beribadah",
            E: "E. sangat baik dalam ketaatan beribadah sangat baik dalam perilaku bersyukur, sangat baik dalam berdoa sebelum beraktivitas, sangat baik dan toleransi beribadah",
        },
        sosial: {
            A: "A. sangat baik dalam Aktivitas Sosial sangat baik dalam perilaku bersyukur, sangat baik dalam berdoa sebelum beraktivitas, sangat baik dan toleransi beribadah",
            B: "B. sangat baik dalam Aktivitas Sosial sangat baik dalam perilaku bersyukur, sangat baik dalam berdoa sebelum beraktivitas, sangat baik dan toleransi beribadah",
            C: "C. sangat baik dalam Aktivitas Sosial sangat baik dalam perilaku bersyukur, sangat baik dalam berdoa sebelum beraktivitas, sangat baik dan toleransi beribadah",
            D: "D. sangat baik dalam Aktivitas Sosial sangat baik dalam perilaku bersyukur, sangat baik dalam berdoa sebelum beraktivitas, sangat baik dan toleransi beribadah",
            E: "E. sangat baik dalam Aktivitas Sosial sangat baik dalam perilaku bersyukur, sangat baik dalam berdoa sebelum beraktivitas, sangat baik dan toleransi beribadah",
        },
    };

    const getPredikat = (nilai) => {
        if (nilai >= 90) return "A";
        if (nilai >= 80 && nilai < 90) return "B";
        if (nilai >= 70 && nilai < 80) return "C";
        if (nilai >= 50 && nilai < 70) return "D";
        if (nilai < 50) return "E";
    };

    const getDeskripsi = (mapel, predikat, type) => {
        let indexDesc;
        let indexType;
        if (predikat == "A") {
            indexDesc = 0;
        } else if (predikat == "B") {
            indexDesc = 1;
        } else if (predikat == "C") {
            indexDesc = 2;
        } else if (predikat == "D") {
            indexDesc = 3;
        } else if (predikat == "E") {
            indexDesc = 4;
        }
        if (type == "ki3") {
            indexType = 0;
        } else if (type == "ki4") {
            indexType = 1;
        }
        if (mapel == "pai") {
            return descPai[indexType][indexDesc];
        } else {
            return descPkn[indexType][indexDesc];
        }
    };
    const dataset = [
        {
            no: 1,
            muatan_pelajaran: "Pendidikan Agama dan Budi Pekerti",
            nilai_pengetahuan: "100",
            paraf_pengetahuan: "A",
            desc_pengetahuan:
                "Ananda SHOFIRA NUR CAHYATI baik dalammemahami makna al-Asmau al- Husna: as-Samad, Al-Muqtadir, Al-Muqaddim, dan Al-Baqi, baik dalam memahami makna Q.S. Al-Kafrun, Q.S. Al-Ma'idah/5:2-3 dan Q.S. al-hujurat/49:12-13 dengan benar",
            nilai_keterampilan: "92",
            paraf_keterampilan: "AB",
            desc_keterampilan:
                "Ananda SHOFIRA NUR CAHYATI baik dalam menunjukkan hikmah zakat, infaq, dan sedekah sebagai implementasi rukun Islam, baik dalam menunjukkan contoh hikmah ber-iman kepada hari akhir yang dapat membentuk perilaku akhlak mulia",
        },
        {
            no: 2,
            muatan_pelajaran: "Pendidikan Pancasila dan Kewarganegaraan",
            nilai_pengetahuan: "100",
            paraf_pengetahuan: "A",
            desc_pengetahuan:
                "Ananda SHOFIRA NUR baik dalam menelaah baik dalam mengampanyekan keberagaman sosial, budaya, manfaat keanekaragaman sosial, dan ekonomi masyarakat, baik budaya, dan ekonomi, baik dalam Pendidikan dalam menganalisis penerapan menyajikan hasil telaah persatuan",
            nilai_keterampilan: "92",
            paraf_keterampilan: "AB",
            desc_keterampilan:
                "Ananda SHOFIRA NUR baik dalam menelaah baik dalam mengampanyekan keberagaman sosial, budaya, manfaat keanekaragaman sosial, dan ekonomi masyarakat, baik budaya, dan ekonomi, baik dalam Pendidikan dalam menganalisis penerapan menyajikan hasil telaah persatuan",
        },
    ];
    return (
        <>
            <Text style={main.header} break>
                RAPOR PESERTA DIDIK DAN PROFIL PESERTA DIDIK
            </Text>
            <View style={main.flex_row}>
                <View style={main.flex_col}>
                    <View style={main.row}>
                        <Text style={main.label}>Nama Peserta Didik</Text>
                        <Text>: {props.nama}</Text>
                    </View>
                    <View style={main.row}>
                        <Text style={main.label}>Nomor Induk</Text>
                        <Text>: {props.nis}</Text>
                    </View>
                    <View style={main.row}>
                        <Text style={main.label}>Nama Sekolah</Text>
                        <Text>: SD Negeri 01 Bulukan</Text>
                    </View>
                    <View style={main.row}>
                        <Text style={main.label}>Alamat Sekolah</Text>
                        <Text>
                            : Jl. Adisucipto, Blulukan, Colomadu, Karanganyar
                        </Text>
                    </View>
                </View>

                <View style={main.flex_col}>
                    <View style={main.row}>
                        <Text style={main.label}>Kelas</Text>
                        <Text>: {props.kelas}</Text>
                    </View>
                    <View style={main.row}>
                        <Text style={main.label}>Semester</Text>
                        <Text>
                            : {props.semester == 1 ? "I (Satu)" : "II (Dua)"}
                        </Text>
                    </View>
                    <View style={main.row}>
                        <Text style={main.label}>Tahun Pelajaran</Text>
                        <Text>: 2023/2024</Text>
                    </View>
                </View>
            </View>

            <Text style={main.sub_header}>A. Sikap</Text>
            <View style={main.table}>
                <View style={main.tableRow}>
                    <Text style={main.tableHead}>Deskripsi</Text>
                </View>
                <View style={main.tableRow}>
                    <View style={main.tableColHeader}>
                        <Text style={main.tableCell}>1. Sikap Spiritual</Text>
                    </View>
                    <View style={main.tableCol}>
                        <Text style={main.tableCell}>
                            {props.sikap.spiritual
                                ? props.nama +
                                  " " +
                                  descSikap["spiritual"][props.sikap.spiritual]
                                : ""}
                        </Text>
                    </View>
                </View>
                <View style={main.tableRow}>
                    <View style={main.tableColHeader}>
                        <Text style={main.tableCell}>2. Sikap Sosial</Text>
                    </View>
                    <View style={main.tableCol}>
                        <Text style={main.tableCell}>
                            {props.sikap.sosial
                                ? props.nama +
                                  " " +
                                  descSikap["sosial"][props.sikap.sosial]
                                : ""}
                        </Text>
                    </View>
                </View>
            </View>

            <Text style={tables_b.sub_header}>
                B. Pengetahuan dan Ketrampilan
            </Text>
            <Text style={tables_b.sub_mini_header}>
                KKM Satuan Pendidikan&nbsp;:&emsp;70{" "}
            </Text>
            <View style={tables_b.table}>
                <View style={tables_b.tableRow}>
                    <View style={tables_b.tableNoHead}>
                        <Text style={tables_b.labelSpan}>No</Text>
                        {/* Jangan diganti! */}
                        <View style={tables_b.tablePKSubHead}>
                            <Text style={tables_b.tablePKSubHeadNone}>a</Text>
                        </View>
                    </View>
                    <View style={tables_b.tableMuatanHead}>
                        <Text style={tables_b.labelSpan}>Muatan Pelajaran</Text>
                        {/* Jangan diganti! */}
                        <View style={tables_b.tablePKSubHead}>
                            <Text style={tables_b.tablePKSubHeadNone}>a</Text>
                        </View>
                    </View>
                    <View style={tables_b.tablePKHead}>
                        <Text style={tables_b.label}>Pengetahuan</Text>
                        <View style={tables_b.tablePKSubHead}>
                            <Text style={tables_b.tablePKSubHeadNP}>N</Text>
                            <Text style={tables_b.tablePKSubHeadNP}>P</Text>
                            <Text style={tables_b.tablePKSubHeadDesc}>
                                Deskripsi
                            </Text>
                        </View>
                    </View>
                    <View style={tables_b.tablePKHead}>
                        <Text style={tables_b.label}>Ketrampilan</Text>
                        <View style={tables_b.tablePKSubHead}>
                            <Text style={tables_b.tablePKSubHeadNP}>N</Text>
                            <Text style={tables_b.tablePKSubHeadNP}>P</Text>
                            <Text style={tables_b.tablePKSubHeadDesc}>
                                Deskripsi
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            {props.nilai.map((data, index) => {
                return (
                    <View key={index + 1} style={tables_b.tableTwo}>
                        <View style={tables_b.tableRow}>
                            <View style={tables_b.tableCol}>
                                <Text style={tables_b.tableCell}>
                                    {index + 1}
                                </Text>
                            </View>
                            <View style={tables_b.tableColMuatan}>
                                <Text style={tables_b.tableCellMuatan}>
                                    {data.mapel.panggilan}
                                </Text>
                            </View>
                            <View style={tables_b.tableColNP}>
                                <Text style={tables_b.tableCell}>
                                    {props.semester == 1
                                        ? data.nilai_k3_smst1
                                        : data.nilai_k3_smst2}
                                </Text>
                            </View>
                            <View style={tables_b.tableColNP}>
                                <Text style={tables_b.tableCell}>
                                    {/* {data.paraf_pengetahuan} */}
                                    {props.semester == 1
                                        ? getPredikat(data.nilai_k3_smst1)
                                        : getPredikat(data.nilai_k3_smst2)}
                                </Text>
                            </View>
                            <View style={tables_b.tableColDesc}>
                                <Text style={tables_b.tableCellDesc}>
                                    {/* {data.desc_pengetahuan} */}
                                    Ananda {props.panggilan}{" "}
                                    {props.semester == 1
                                        ? getDeskripsi(
                                              data.mapel.alias,
                                              getPredikat(data.nilai_k3_smst1),
                                              "ki3"
                                          )
                                        : getDeskripsi(
                                              data.mapel.alias,
                                              getPredikat(data.nilai_k3_smst2),
                                              "ki3"
                                          )}
                                </Text>
                            </View>
                            <View style={tables_b.tableColNP}>
                                <Text style={tables_b.tableCell}>
                                    {props.semester == 1
                                        ? data.nilai_k4_smst1
                                        : data.nilai_k4_smst2}
                                </Text>
                            </View>
                            <View style={tables_b.tableColNP}>
                                <Text style={tables_b.tableCell}>
                                    {/* {data.paraf_keterampilan} */}
                                    {props.semester == 1
                                        ? getPredikat(data.nilai_k4_smst1)
                                        : getPredikat(data.nilai_k4_smst2)}
                                </Text>
                            </View>
                            <View style={tables_b.tableColDesc}>
                                <Text style={tables_b.tableCellDesc}>
                                    {/* {data.desc_keterampilan} */}
                                    Ananda {props.panggilan}{" "}
                                    {props.semester == 1
                                        ? getDeskripsi(
                                              data.mapel.alias,
                                              getPredikat(data.nilai_k4_smst1),
                                              "ki4"
                                          )
                                        : getDeskripsi(
                                              data.mapel.alias,
                                              getPredikat(data.nilai_k4_smst2),
                                              "ki4"
                                          )}
                                </Text>
                            </View>
                        </View>
                    </View>
                );
            })}
        </>
    );
};
