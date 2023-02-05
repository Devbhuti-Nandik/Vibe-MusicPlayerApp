import { View, Text, StyleSheet } from "react-native";
import Album from "../album";
import { PrimaryColors } from "../theme/colors";

const album = {
  id: "1",
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  artistName: "Taylor Swift, Kygo Objective C, Avicii",
};

export default function Home({ navigation }) {
  return (
    <View style={styles.main}>
      <Album album={album}/>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: PrimaryColors.primaryBlack,
    alignItems:'center'
  },
});
