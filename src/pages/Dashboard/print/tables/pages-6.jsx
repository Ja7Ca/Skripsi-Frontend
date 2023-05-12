import { tables_b, tables_f, tables_ttd } from "./table-style";
import { Text, View } from "@react-pdf/renderer";

export const Pages6 = () => {
  const dataKesehatan = [
    {
      no: "1",
      aspek: "Pendengaran",
      keterangan: "Pendengaran Baik",
    },
    {
      no: "2",
      aspek: "Penglihatan",
      keterangan: "Tidak Berkacamata",
    },
    {
      no: "3",
      aspek: "Gigi",
      keterangan: "Kesehatan Gigi Terjaga",
    },
    {
      no: "4",
      aspek: "Lainya",
      keterangan: "-",
    },
  ];

  const dataPrestasi = [
    {
      no: "1",
      jenis: "Kesenian",
      keterangan: "Mewakili dalam lomba pildacil",
    },
    {
      no: "2",
      jenis: "Olahraga",
      keterangan: "-",
    },
  ];

  const dataKehadiran = [
    {
      symbol: "S",
      keterangan: "Sakit",
      jumlah: "0",
    },
    {
      symbol: "I",
      keterangan: "Ijin",
      jumlah: "0",
    },
    {
      symbol: "A",
      keterangan: "Tanpa Keterangan",
      jumlah: "0",
    },
  ];

  return (
    <>
      <Text style={tables_b.sub_header} break>
        F. Kondisi Kesehatan
      </Text>
      <View style={tables_f.table}>
        <View style={tables_f.containerRowHead}>
          <View style={tables_f.dataNoHead}>
            <Text>No </Text>
          </View>
          <View style={tables_f.dataAspekHead}>
            <Text>Aspek Fisik </Text>
          </View>
          <View style={tables_f.dataKeteranganHead}>
            <Text>Keterangan </Text>
          </View>
        </View>
        {dataKesehatan.map((data) => {
          return (
            <View key={data.no} style={tables_f.containerRow}>
              <View style={tables_f.dataNo}>
                <Text>{data.no} </Text>
              </View>
              <View style={tables_f.dataAspek}>
                <Text>{data.aspek} </Text>
              </View>
              <View style={tables_f.dataKeterangan}>
                <Text>{data.keterangan} </Text>
              </View>
            </View>
          );
        })}
      </View>

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
            <View key={data.no} style={tables_f.containerRowPrestasi}>
              <View style={tables_f.dataNo}>
                <Text>{data.no} </Text>
              </View>
              <View style={tables_f.dataAspek}>
                <Text>{data.jenis} </Text>
              </View>
              <View style={tables_f.dataKeterangan}>
                <Text>{data.keterangan} </Text>
              </View>
            </View>
          );
        })}
      </View>

      <Text style={tables_b.sub_header}>H. Kehadiran</Text>
      <View style={tables_f.table}>
        <View style={tables_f.containerRowHead}>
          <View style={tables_f.dataKehadiran}>
            <Text>Ketidakhadiran</Text>
          </View>
        </View>
        {dataKehadiran.map((data, index) => {
          return (
            <View key={index} style={tables_f.containerRow}>
              <View style={tables_f.dataNo}>
                <Text>{data.symbol}</Text>
              </View>
              <View style={tables_f.dataAspek}>
                <Text>{data.keterangan} </Text>
              </View>
              <View style={tables_f.dataKeterangan}>
                <Text>{data.jumlah}&nbsp;Hari</Text>
              </View>
            </View>
          );
        })}
      </View>

      <View style={tables_ttd.table}>
        <View style={tables_ttd.containerRow}>
          <Text>Mengetahui</Text>
          <Text>Orang Tua / Wali</Text>
          <Text style={tables_ttd.param}>
            (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
          </Text>
        </View>
        <View style={tables_ttd.containerRow}>
          <Text>Blulukan, 12 Mei 2023</Text>
          <Text>Guru Kelas</Text>
          <View style={tables_ttd.param}>
            <Text style={tables_ttd.guru}>Sutinem, S.Pd.SD</Text>
            <Text style={tables_ttd.nip}>NIP : 11991331014801022003</Text>
          </View>
        </View>
      </View>
      <View style={tables_ttd.table}>
        <View style={tables_ttd.containerRowFull}>
          <Text>Mengetahui</Text>
          <Text>Kepala Sekolah</Text>
          <View style={tables_ttd.param}>
            <Text style={tables_ttd.guru}>Heri Susanto, S.Pd</Text>
            <Text style={tables_ttd.nip}>NIP : 11991331014801022003</Text>
          </View>
        </View>
      </View>
    </>
  );
};
