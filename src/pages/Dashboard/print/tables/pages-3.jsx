import { tables_b } from "./table-style";
import { Text, View } from "@react-pdf/renderer";

export const Pages3 = () => {
  const dataset = [
    {
      no: 6,
      muatan_pelajaran: "Ilmu Pengetahuan Sosial",
      nilai_pengetahuan: "100",
      paraf_pengetahuan: "A",
      desc_pengetahuan:
        "Ananda SHOFIRA NUR CAHYATI baik dalam menganalisis posisi dan peran Indonesia dalam kerja sama di bidang ekonomi, politik, sosial, budaya, teknologi, dan pendidikan dalam lingkup ASEAN., cukup dalam mengidentifikasi karakteristik geografis dan kehidupan sosial budaya, ekonomi, politik di wilayah ASEAN.",
      nilai_keterampilan: "92",
      paraf_keterampilan: "AB",
      desc_keterampilan:
        "Ananda SHOFIRA NUR CAHYATI baik dalam menyajikan hasil analisis tentang posisi dan peran Indonesia dalam kerja sama di bidang ekonomi, politik, sosial, budaya, teknologi, dan pendidikan dalam lingkup ASEAN, baik dalam menyajikan laporan tentang makna proklamasi kemerdekaan, upaya mempertahankan kemerdekaan, dan upaya mengembangkan kehidupan kebangsaan yang sejahtera",
    },
    {
      no: 7,
      muatan_pelajaran: "Seni Budaya dan Prakarya",
      nilai_pengetahuan: "80",
      paraf_pengetahuan: "B",
      desc_pengetahuan:
        "Ananda SHOFIRA NUR CAHYATI sangat baik dalam memahami reklame., cukup dalam memahami patung.",
      nilai_keterampilan: "60",
      paraf_keterampilan: "C",
      desc_keterampilan:
        "Ananda SHOFIRA NUR CAHYATI baik dalam membuat reklame, baik dalam menampilkan tari kreasi daerah",
    },
    {
      no: 8,
      muatan_pelajaran: "Pendidikan Jasmani, Olahraga dan Kesehatan",
      nilai_pengetahuan: "80",
      paraf_pengetahuan: "B",
      desc_pengetahuan:
        "Ananda SHOFIRA NUR CAHYATI cukup dalam memahami latihan kebugaran jasmani dan pengukuran tingkat kebugaran jasmani pribadi secara sederhana (contoh: menghitung denyut nadi, menghitung kemampuan melakukan push up, menghitung kelenturan tungkai), cukup dalam memahami variasi dan kombinasi gerak dasar jalan, lari, lompat, dan lempar dengan kontrol yang baik melalui permainan dan atau olahraga tradisional",
      nilai_keterampilan: "60",
      paraf_keterampilan: "C",
      desc_keterampilan:
        "Ananda SHOFIRA NUR CAHYATI baik dalam menyajikan karya tentang berbagai cara melakukan penghematan energi dan usulan sumber alternatif energi listrik, (contoh: menghitung denyut nadi, menghitung kemampuan melakukan push up, menghitung kelenturan tungkai),",
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
      {dataset.map((data) => {
        return (
          <View key={data.no} style={tables_b.tableTwo}>
            <View style={tables_b.tableRow}>
              <View style={tables_b.tableCol}>
                <Text style={tables_b.tableCell}>{data.no}</Text>
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
    </>
  );
};
