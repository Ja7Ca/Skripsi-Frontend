import { tables_b, tables_c } from "./table-style";
import { Text, View } from "@react-pdf/renderer";

export const Pages4 = () => {
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

  const dataEkstra = [
    {
      no: "1",
      kegiatan: "Praja Muda Karana (Pramuka)",
      keterangan:
        "Ananda SHOFIRA NUR CAHYATI baik dalam memahami tambang kinanthi, baik dalam memahami teks cerita pengelaman yang mengesankan",
    },
    {
      no: "2",
      kegiatan: "Komputer",
      keterangan: "-",
    },
    {
      no: "3",
      kegiatan: "Menari",
      keterangan:
        "Ananda SHOFIRA NUR CAHYATI sangat mahir dalam hafalan gerak, sangat mahir dalam keserasian gerak, sangat mahir dalam expresi gerak",
    },
    {
      no: "4",
      kegiatan: "Melukis",
      keterangan:
        "Ananda SHOFIRA NUR CAHYATI sangat mahir dalam penuangan ide, sangat mahir dalam kreatifitas, sangat mahir dalam pewarnaan",
    },
    {
      no: "5",
      kegiatan: "Marching Band",
      keterangan: "-",
    },
    {
      no: "6",
      kegiatan: "Bela Diri",
      keterangan: "-",
    },
    {
      no: "7",
      kegiatan: "Musik",
      keterangan: "-",
    },
    {
      no: "8",
      kegiatan: "Karawitan",
      keterangan:
        "Ananda SHOFIRA NUR CAHYATI sangat mahir dalam penguasaan gending, sangat mahir dalam penguasaan alat gamelan, sangat mahir dalam pertunjukan gending gamelan",
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
              <Text style={tables_b.tablePKSubHeadDesc}>Deskripsi</Text>
            </View>
          </View>
          <View style={tables_b.tablePKHead}>
            <Text style={tables_b.label}>Ketrampilan</Text>
            <View style={tables_b.tablePKSubHead}>
              <Text style={tables_b.tablePKSubHeadNP}>N</Text>
              <Text style={tables_b.tablePKSubHeadNP}>P</Text>
              <Text style={tables_b.tablePKSubHeadDesc}>Deskripsi</Text>
            </View>
          </View>
        </View>
      </View>
      {dataset.map((data, index) => {
        return (
          <View key={index} style={tables_b.tableTwo}>
            <View style={tables_b.tableRow}>
              <View style={tables_b.tableColLokal}>
                <Text style={tables_b.tableCellLokal}>9</Text>
              </View>
              <View style={tables_b.tableColMuatanLokal}>
                <Text style={tables_b.tableCellMuatanLokal}>Muatan Lokal</Text>
              </View>
            </View>
            <View style={tables_b.tableRow}>
              <View style={tables_b.tableCol}>
                <Text style={tables_b.tableCellEnd}>{data.no}</Text>
              </View>
              <View style={tables_b.tableColMuatan}>
                <Text style={tables_b.tableCellMuatan}>
                  {data.muatan_pelajaran}
                </Text>
              </View>
              <View style={tables_b.tableColNP}>
                <Text style={tables_b.tableCell}>{data.nilai_pengetahuan}</Text>
              </View>
              <View style={tables_b.tableColNP}>
                <Text style={tables_b.tableCell}>{data.paraf_pengetahuan}</Text>
              </View>
              <View style={tables_b.tableColDesc}>
                <Text style={tables_b.tableCellDesc}>
                  {data.desc_pengetahuan}
                </Text>
              </View>
              <View style={tables_b.tableColNP}>
                <Text style={tables_b.tableCell}>
                  {data.nilai_keterampilan}
                </Text>
              </View>
              <View style={tables_b.tableColNP}>
                <Text style={tables_b.tableCell}>
                  {data.paraf_keterampilan}
                </Text>
              </View>
              <View style={tables_b.tableColDesc}>
                <Text style={tables_b.tableCellDesc}>
                  {data.desc_keterampilan}
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
    </>
  );
};
