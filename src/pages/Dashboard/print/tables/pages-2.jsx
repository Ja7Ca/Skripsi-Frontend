import { tables_b } from "./table-style";
import { Text, View } from "@react-pdf/renderer";

export const Pages2 = () => {
  const dataset = [
    {
      no: 3,
      muatan_pelajaran: "Bahasa Indonesia",
      nilai_pengetahuan: "100",
      paraf_pengetahuan: "A",
      desc_pengetahuan:
        "Ananda SHOFIRA NUR CAHYATI baik dalam mencermati petunjuk dan isi teks formulir (pendaftaran, kartu anggota, pengiriman uang melalui bank/kantor pos, daftar riwayat hidup, dsb.), baik dalam menyimpulkan informasi berdasarkan teks laporan hasil pengamatan yang didengar dan dibaca",
      nilai_keterampilan: "92",
      paraf_keterampilan: "AB",
      desc_keterampilan:
        "Ananda SHOFIRA NUR CAHYATI sangat baik dalam mengisi teks formulir (pendaftaran, kartu anggota, pengiriman uang melalui bank/kantor pos, daftar riwayat hidup, dll.) sesuai petunjuk pengisiannya., baik dalam memaparkan informasi penting dari buku sejarah secara lisan, tulis, dan visual dengan menggunakan aspek: apa, di mana, kapan, siapa, mengapa, dan bagaimana serta memperhatikan penggunaan kosakata baku dan kalimat efektif.",
    },
    {
      no: 4,
      muatan_pelajaran: "Matematika",
      nilai_pengetahuan: "80",
      paraf_pengetahuan: "B",
      desc_pengetahuan:
        "Ananda SHOFIRA NUR CAHYATI baik dalam membandingkan prisma, tabung, limas, kerucut, dan bola, baik dalam menjelaskan dan melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian yang melibatkan bilangan bulat negatif",
      nilai_keterampilan: "60",
      paraf_keterampilan: "C",
      desc_keterampilan:
        "Ananda SHOFIRA NUR CAHYATI sangat baik dalam mengidentifikasi titik pusat, jari- jari, diameter, busur, tali busur, tembereng, dan juring, baik dalam menyelesaikan masalah yang berkaitan operasi hitung campuran yang melibatkan bilangan cacah, pecahan dan/atau desimal dalam berbagai bentuk sesuai urutan operasi",
    },
    {
      no: 5,
      muatan_pelajaran: "Ilmu Pengetahuan Alam",
      nilai_pengetahuan: "80",
      paraf_pengetahuan: "B",
      desc_pengetahuan:
        "Ananda SHOFIRA NUR CAHYATI baik dalam menjelaskan cara menghasilkan, menyalurkan, dan menghemat energi listrik, baik dalam membandingkan cara perkembangbiakan tumbuhan dan hewan",
      nilai_keterampilan: "60",
      paraf_keterampilan: "C",
      desc_keterampilan:
        "Ananda SHOFIRA NUR CAHYATI baik dalam menyajikan karya tentang berbagai cara melakukan penghematan energi dan usulan sumber alternatif energi listrik, baik dalam menyajikan karya tentang cara makhluk hidup menyesuaikan diri dengan lingkungannya, sebagai hasil penelusuran berbagai sumber",
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
