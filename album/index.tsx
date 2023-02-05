import { Image, StyleSheet, Text, View } from "react-native";
import { PrimaryColors } from "../theme/colors";
import { useFonts } from "expo-font";

interface AlbumProps {
  album: {
    id: string;
    imageUri: string;
    artistName: string;
  };
}

export default function Album({ album }: AlbumProps) {
  const [loaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{ uri: album.imageUri }} />
      <Text style={styles.text}>{album.artistName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "transparent",
    width: 170,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 20,
  },
  text: {
    color: PrimaryColors.primaryWhite,
    paddingTop: 8,
    fontSize: 16,
    fontFamily:'Roboto'
    // shadowColor: PrimaryColors.primaryWhite,
    // shadowOffset: { height: 1, width: -2 },
    // shadowOpacity: 1,
    // shadowRadius: 10,
    // elevation: 2,
  },
});
