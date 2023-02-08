import { StyleSheet, Text, View } from "react-native";
import Album from "../album";
import { AlbumType } from "../../../lib/types";
import { PrimaryColors } from "../../../theme/colors";
import { useFonts } from "expo-font";
import { FlatList } from "react-native-gesture-handler";

interface AlbumCategoryProps {
  title: string;
  albums: AlbumType[];
}

export default function AlbumCategory({ title, albums }: AlbumCategoryProps) {
  const [loaded] = useFonts({
    Roboto: require("../../../assets/fonts/Roboto-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
        <FlatList
          data={albums}
          renderItem={(albumData) => <Album album={albumData.item} />}
          keyExtractor={(album) => album.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          
        />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop:'10%',
  },
  title: {
    color: PrimaryColors.primaryWhite,
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 12,
    marginBottom: 15,
  },
});
