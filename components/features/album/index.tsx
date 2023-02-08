import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { PrimaryColors } from "../../../theme/colors";
import { useFonts } from "expo-font";
import { AlbumType } from "../../../lib/types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface AlbumProps {
  album: AlbumType;
}

export default function Album({ album }: AlbumProps) {
  const navigation = useNavigation();

  const [isHovered, setIsHovered] = useState(false);
  const [loaded] = useFonts({
    Roboto: require("../../../assets/fonts/Roboto-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("AlbumSongs" as never, { id: album.id } as never)
      }
    >
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={{ uri: album.imageUri }} />
        <Text style={styles.text}>{album.artistName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "transparent",
    width: 170,
    alignItems: "center",
    margin: 8,
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
    fontFamily: "Roboto",
    textAlign: "center",
  },
  textHovered: {
    shadowColor: PrimaryColors.primaryWhite,
    shadowOffset: { height: 1, width: -2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
  },
});
