import { tables_b, tables_c } from "./table-style";
import { Text, View } from "@react-pdf/renderer";

export const Pages4 = (props) => {
    console.log(props);
    const descBjawa = [
        [
            "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
        ],
        [
            "baik dalam membaca dan menulis kalimat berhuruf jawa yang menggunakan pasangan, baik dalam menanggapi nilai-nilai luhur yang terdapat dalam cerita",
            "baik dalam membaca dan menulis kalimat berhuruf jawa yang menggunakan pasangan, baik dalam menanggapi nilai-nilai luhur yang terdapat dalam cerita",
            "baik dalam membaca dan menulis kalimat berhuruf jawa yang menggunakan pasangan, baik dalam menanggapi nilai-nilai luhur yang terdapat dalam cerita",
            "baik dalam membaca dan menulis kalimat berhuruf jawa yang menggunakan pasangan, baik dalam menanggapi nilai-nilai luhur yang terdapat dalam cerita",
            "baik dalam membaca dan menulis kalimat berhuruf jawa yang menggunakan pasangan, baik dalam menanggapi nilai-nilai luhur yang terdapat dalam cerita",
        ],
    ];

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

        return descBjawa[indexType][indexDesc];
    };

    const dataset = [
        {
            no: "a",
            muatan_pelajaran: "Bahasa Jawa",
            nilai_pengetahuan: "100",
            paraf_pengetahuan: "A",
            desc_pengetahuan:
                "Ananda SHOFIRA NUR CAHYATI baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            nilai_keterampilan: "92",
            paraf_keterampilan: "AB",
            desc_keterampilan:
                "Ananda SHOFIRA NUR CAHYATI baik dalam membaca dan menulis kalimat berhuruf jawa yang menggunakan pasangan, baik dalam menanggapi nilai-nilai luhur yang terdapat dalam cerita",
        },
    ];

    const dataDescEkstra = {
        pramuka: {
            A: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            B: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            C: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            D: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            E: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
        },
        komputer: {
            A: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            B: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            C: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            D: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            E: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
        },
        menari: {
            A: "sangat mahir dalam hafalan gerak, sangat mahir dalam keserasian gerak, sangat mahir dalam expresi gerak",
            B: "sangat mahir dalam hafalan gerak, sangat mahir dalam keserasian gerak, sangat mahir dalam expresi gerak",
            C: "sangat mahir dalam hafalan gerak, sangat mahir dalam keserasian gerak, sangat mahir dalam expresi gerak",
            D: "sangat mahir dalam hafalan gerak, sangat mahir dalam keserasian gerak, sangat mahir dalam expresi gerak",
            E: "sangat mahir dalam hafalan gerak, sangat mahir dalam keserasian gerak, sangat mahir dalam expresi gerak",
        },
        melukis: {
            A: "sangat mahir dalam penuangan ide, sangat mahir dalam kreatifitas, sangat mahir dalam pewarnaan",
            B: "sangat mahir dalam penuangan ide, sangat mahir dalam kreatifitas, sangat mahir dalam pewarnaan",
            C: "sangat mahir dalam penuangan ide, sangat mahir dalam kreatifitas, sangat mahir dalam pewarnaan",
            D: "sangat mahir dalam penuangan ide, sangat mahir dalam kreatifitas, sangat mahir dalam pewarnaan",
            E: "sangat mahir dalam penuangan ide, sangat mahir dalam kreatifitas, sangat mahir dalam pewarnaan",
        },
        marchingBand: {
            A: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            B: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            C: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            D: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            E: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
        },
        belaDiri: {
            A: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            B: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            C: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            D: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            E: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
        },
        musik: {
            A: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            B: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            C: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            D: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            E: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
        },
        karawitan: {
            A: "sangat mahir dalam penguasaan gending, sangat mahir dalam penguasaan alat gamelan, sangat mahir dalam pertunjukan gending gamelan",
            B: "sangat mahir dalam penguasaan gending, sangat mahir dalam penguasaan alat gamelan, sangat mahir dalam pertunjukan gending gamelan",
            C: "sangat mahir dalam penguasaan gending, sangat mahir dalam penguasaan alat gamelan, sangat mahir dalam pertunjukan gending gamelan",
            D: "sangat mahir dalam penguasaan gending, sangat mahir dalam penguasaan alat gamelan, sangat mahir dalam pertunjukan gending gamelan",
            E: "sangat mahir dalam penguasaan gending, sangat mahir dalam penguasaan alat gamelan, sangat mahir dalam pertunjukan gending gamelan",
        },
        bola: {
            A: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            B: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            C: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            D: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            E: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
        },
        hadroh: {
            A: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            B: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            C: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            D: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            E: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
        },
        tilawah: {
            A: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            B: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            C: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            D: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            E: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
        },
        paduan: {
            A: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            B: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            C: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            D: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
            E: "baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
        },
    };

    const dataEkstra = [
        {
            no: "1",
            kegiatan: "Praja Muda Karana (Pramuka)",
            key: "pramuka",
        },
        {
            no: "2",
            kegiatan: "Komputer",
            key: "komputer",
        },
        {
            no: "3",
            kegiatan: "Menari",
            key: "menari",
        },
        {
            no: "4",
            kegiatan: "Melukis",
            key: "melukis",
        },
        {
            no: "5",
            kegiatan: "Marching Band",
            key: "marchingBand",
        },
        {
            no: "6",
            kegiatan: "Bela Diri",
            key: "belaDiri",
        },
        {
            no: "7",
            kegiatan: "Musik",
            key: "musik",
        },
        {
            no: "8",
            kegiatan: "Karawitan",
            key: "karawitan",
        },
    ];

    return (
        <>
            <View style={tables_b.table} break>
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
                    <View key={index} style={tables_b.tableTwo}>
                        <View style={tables_b.tableRow}>
                            <View style={tables_b.tableColLokal}>
                                <Text style={tables_b.tableCellLokal}>9</Text>
                            </View>
                            <View style={tables_b.tableColMuatanLokal}>
                                <Text style={tables_b.tableCellMuatanLokal}>
                                    Muatan Lokal
                                </Text>
                            </View>
                        </View>
                        <View style={tables_b.tableRow}>
                            <View style={tables_b.tableCol}>
                                <Text style={tables_b.tableCellEnd}>a</Text>
                            </View>
                            <View style={tables_b.tableColMuatan}>
                                <Text style={tables_b.tableCellMuatan}>
                                    {data.mapel.nama}
                                </Text>
                            </View>
                            <View style={tables_b.tableColNP}>
                                <Text style={tables_b.tableCell}>
                                    {data.nilai_k3_smst1}
                                </Text>
                            </View>
                            <View style={tables_b.tableColNP}>
                                <Text style={tables_b.tableCell}>
                                    {getPredikat(data.nilai_k3_smst1)}
                                </Text>
                            </View>
                            <View style={tables_b.tableColDesc}>
                                <Text style={tables_b.tableCellDesc}>
                                    Ananda {props.nama}{" "}
                                    {getDeskripsi(
                                        data.mapel.alias,
                                        getPredikat(data.nilai_k3_smst1),
                                        "ki3"
                                    )}
                                </Text>
                            </View>
                            <View style={tables_b.tableColNP}>
                                <Text style={tables_b.tableCell}>
                                    {data.nilai_k4_smst1}
                                </Text>
                            </View>
                            <View style={tables_b.tableColNP}>
                                <Text style={tables_b.tableCell}>
                                    {getPredikat(data.nilai_k4_smst1)}
                                </Text>
                            </View>
                            <View style={tables_b.tableColDesc}>
                                <Text style={tables_b.tableCellDesc}>
                                    Ananda {props.nama}{" "}
                                    {getDeskripsi(
                                        data.mapel.alias,
                                        getPredikat(data.nilai_k3_smst1),
                                        "ki4"
                                    )}
                                </Text>
                            </View>
                        </View>
                    </View>
                );
            })}

            <Text style={tables_b.sub_header}>C. Ekstra Kulikuler</Text>
            <View style={tables_c.table}>
                <View style={tables_c.tableRow}>
                    <Text style={tables_c.tableCellNumberHead}>No</Text>
                    <Text style={tables_c.tableCellKegiatanHead}>Kegiatan</Text>
                    <Text style={tables_c.tableCellKeteranganHead}>
                        Keterangan
                    </Text>
                </View>
                {dataEkstra.map((data) => {
                    return (
                        <View key={data.no} style={tables_c.tableRowDatas}>
                            <View style={tables_c.tableColNumber}>
                                <Text>{data.no}</Text>
                            </View>
                            <View style={tables_c.tableColKegiatan}>
                                <Text>{data.kegiatan}</Text>
                            </View>
                            <View style={tables_c.tableColKeterangan}>
                                <Text>
                                    {props.eskul[data.key]
                                        ? `Ananda ${props.nama} ${
                                              dataDescEkstra[data.key][
                                                  props.eskul[data.key]
                                              ]
                                          }`
                                        : "-"}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </>
    );
};
