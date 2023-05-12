import { cover } from "./table-style";
import { Text, View, Image } from "@react-pdf/renderer";
import tutwuri from "../../../../assets/img/tutwuri-min.png";

export const Cover = () => {
  return (
    <>
      <View style={cover.container}>
        <Image src={tutwuri} style={cover.image} />
        <Text>RAPOR PESERTA DIDIK</Text>
        <Text>SEKOLAH DASAR</Text>
        <Text>(SD)</Text>

        <View style={cover.middleContainer}>
          <View style={cover.name}>
            <Text>NAMA PESERTA DIDIK :</Text>
            <Text>SHOFIRA NUR CAHYATI</Text>
          </View>
          <View style={cover.nisn}>
            <Text>NISN/NIS</Text>
            <Text>33229831032009</Text>
          </View>
        </View>

        <View style={cover.footer}>
          <Text>KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN</Text>
          <Text>REPUBLIK INDONESIA</Text>
        </View>
      </View>
    </>
  );
};
