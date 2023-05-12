import { tables_b, tables_c, tables_e } from "./table-style";
import { Text, View } from "@react-pdf/renderer";

export const Pages5 = () => {
  const dataEkstra = [
    {
      no: "9",
      kegiatan: "Sepak Bola",
      keterangan: "-",
    },
    {
      no: "10",
      kegiatan: "Hadroh",
      keterangan: "-",
    },
    {
      no: "11",
      kegiatan: "Tilawah",
      keterangan: "-",
    },
    {
      no: "12",
      kegiatan: "Paduan Suara dan Sejarah Seni",
      keterangan: "-",
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

  return (
    <>
      <View style={tables_c.table} break>
        <View style={tables_c.tableRow}>
          <Text style={tables_c.tableCellNumberHead}>No</Text>
          <Text style={tables_c.tableCellKegiatanHead}>Kegiatan</Text>
          <Text style={tables_c.tableCellKeteranganHead}>Keterangan</Text>
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
                <Text>{data.keterangan}</Text>
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
          <Text>
            Lebih diperbanyak membaca buku non pelajaran untuk memperluas
            wawasan
          </Text>
        </View>
      </View>

      <Text style={tables_b.sub_header}>E. Tinggi dan Berat Badan</Text>
      <View style={tables_e.table}>
        <View style={tables_e.tableRow}>
          <View style={tables_e.tableNoHead}>
            <Text style={tables_e.labelSpan}>No</Text>
            {/* Jangan diganti! */}
            <View style={tables_e.tablePKSubHead}>
              <Text style={tables_e.tablePKSubHeadNone}>a</Text>
            </View>
          </View>
          <View style={tables_e.tableMuatanHead}>
            <Text style={tables_e.labelSpan}>Aspek Yang Dinilai</Text>
            {/* Jangan diganti! */}
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
                <Text>{data.semester2}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
};
