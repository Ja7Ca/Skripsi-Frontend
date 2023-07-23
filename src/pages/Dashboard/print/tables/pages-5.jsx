import { tables_b, tables_c, tables_e, tables_f } from "./table-style";
import { Text, View } from "@react-pdf/renderer";

export const Pages5 = (props) => {
    const dataDescEkstra = {
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
            no: "9",
            kegiatan: "Sepak Bola",
            key: "bola",
        },
        {
            no: "10",
            kegiatan: "Hadroh",
            key: "hadroh",
        },
        {
            no: "11",
            kegiatan: "Tilawah",
            key: "tilawah",
        },
        {
            no: "12",
            kegiatan: "Paduan Suara dan Sejarah Seni",
            key: "paduan",
        },
    ];

    const dataTinggiBerat = [
        {
            no: "1",
            aspek: "Tinggi Badan",
            semester1: "145 cm",
            semester2: "145 cm",
        },
        {
            no: "2",
            aspek: "Berat Badan",
            semester1: "50 kg",
            semester2: "49 kg",
        },
    ];

    const dataPrestasi = [
        {
            no: "1",
            jenis: "Kesenian",
            key: "kesenian",
        },
        {
            no: "2",
            jenis: "Olahraga",
            key: "olahRaga",
        },
    ];

    return (
        <>
            <View style={tables_c.table} break>
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
            <Text style={tables_c.notes}>
                * Kosong berati tidak mengikuti Ekstra Kulikuler
            </Text>

            <Text style={tables_b.sub_header}>D. Saran Saran</Text>
            <View style={tables_c.table}>
                <View style={tables_c.tableSaran}>
                    <Text>{props.saran.saran}</Text>
                </View>
            </View>

            {/* <Text style={tables_b.sub_header}>E. Tinggi dan Berat Badan</Text>
            <View style={tables_e.table}>
                <View style={tables_e.tableRow}>
                    <View style={tables_e.tableNoHead}>
                        <Text style={tables_e.labelSpan}>No</Text>
                        Jangan diganti!
                        <View style={tables_e.tablePKSubHead}>
                            <Text style={tables_e.tablePKSubHeadNone}>a</Text>
                        </View>
                    </View>
                    <View style={tables_e.tableMuatanHead}>
                        <Text style={tables_e.labelSpan}>
                            Aspek Yang Dinilai
                        </Text>
                        Jangan diganti!
                        <View style={tables_e.tablePKSubHead}>
                            <Text style={tables_e.tablePKSubHeadNone}>a</Text>
                        </View>
                    </View>
                    <View style={tables_e.tablePKHead}>
                        <Text style={tables_e.label}>Semester</Text>
                        <View style={tables_e.tablePKSubHead}>
                            <Text style={tables_e.tablePKSubHeadNP}>1</Text>
                            <Text style={tables_e.tablePKSubHeadNP2}>2</Text>
                        </View>
                    </View>
                </View>
                {dataTinggiBerat.map((data) => {
                    return (
                        <View key={data.no} style={tables_e.tableDataContainer}>
                            <View style={tables_e.dataNumber}>
                                <Text>{data.no}</Text>
                            </View>
                            <View style={tables_e.dataAspek}>
                                <Text>{data.aspek}</Text>
                            </View>
                            <View style={tables_e.dataValue}>
                                <Text>{data.semester1}</Text>
                            </View>
                            <View style={tables_e.dataValue}>
                                <Text>
                                    {props.semester == 1 ? "-" : data.semester2}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View> */}
            <Text style={tables_b.sub_header}>G. Prestasi</Text>
            <View style={tables_f.table}>
                <View style={tables_f.containerRowPrestasiHead}>
                    <View style={tables_f.dataNoHead}>
                        <Text>No </Text>
                    </View>
                    <View style={tables_f.dataAspekHead}>
                        <Text>Jenis Prestasi</Text>
                    </View>
                    <View style={tables_f.dataKeteranganHead}>
                        <Text>Keterangan </Text>
                    </View>
                </View>
                {dataPrestasi.map((data) => {
                    return (
                        <View
                            key={data.no}
                            style={tables_f.containerRowPrestasi}>
                            <View style={tables_f.dataNo}>
                                <Text>{data.no} </Text>
                            </View>
                            <View style={tables_f.dataAspek}>
                                <Text>{data.jenis} </Text>
                            </View>
                            <View style={tables_f.dataKeterangan}>
                                <Text>
                                    {props.prestasi[data.key]
                                        ? props.prestasi[data.key]
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
