import { main, tables_b } from "./table-style";
import { Text, View } from "@react-pdf/renderer";

export const Pages1 = (props) => {
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
            <Text>: Jl. Adisucipto, Blulukan, Colomadu, Karanganyar</Text>
          </View>
        </View>

        <View style={main.flex_col}>
          <View style={main.row}>
            <Text style={main.label}>Kelas</Text>
            <Text>: {props.kelas}</Text>
          </View>
          <View style={main.row}>
            <Text style={main.label}>Semester</Text>
            <Text>: II (Dua)</Text>
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
              John Doe sangat baik dalam ketaatan beribadah sangat baik dalam
              perilaku bersyukur, sangat baik dalam berdoa sebelum beraktivitas,
              sangat baik dan toleransi beribadah
            </Text>
          </View>
        </View>
        <View style={main.tableRow}>
          <View style={main.tableColHeader}>
            <Text style={main.tableCell}>2. Sikap Sosial</Text>
          </View>
          <View style={main.tableCol}>
            <Text style={main.tableCell}>
              John Doe sangat baik dalam Aktivitas Sosial sangat baik dalam
              perilaku bersyukur, sangat baik dalam berdoa sebelum beraktivitas,
              sangat baik dan toleransi beribadah
            </Text>
          </View>
        </View>
      </View>

      <Text style={tables_b.sub_header}>B. Pengetahuan dan Ketrampilan</Text>
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
