import { View, Text, StyleSheet, ImageBackground } from "react-native";
import AlbumCategory from "../components/features/album-category";
import { PrimaryColors } from "../theme/colors";
import { albumCategories } from "../data/albumCategories";
import { FlatList } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

export default function Home({ navigation }) {
  const [loaded] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    Roboto:require("../assets/fonts/Roboto-Regular.ttf")
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.main}>
      <ImageBackground
        source={{
          uri: "https://www.transparenttextures.com/patterns/inspiration-geometry.png",
        }}
        resizeMode="repeat"
        imageStyle={styles.imgBackground}
      >
        <View style={styles.header}>
          <Text style={styles.mainHeading}>Welcome Nandik!</Text>
          <Text style={styles.subHeading}>Have a good time &nbsp;:)</Text>
        </View>
        <FlatList
          style={{marginLeft:5}}
          contentContainerStyle={{ paddingBottom: 200 }}
          data={albumCategories}
          renderItem={(albumCategoryData) => (
            <AlbumCategory
              title={albumCategoryData.item.title}
              albums={albumCategoryData.item.albums}
            />
          )}
          keyExtractor={(albumData) => albumData.id}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: PrimaryColors.primaryBlack,
  },
  header:{
    marginTop:'15%',
    marginLeft:'5%',
    paddingBottom:10
  },
  mainHeading: {
    color: PrimaryColors.primaryWhite,
    fontSize: 32,
    fontFamily: "PoppinsBold",
    fontWeight: "bold",
    shadowColor: PrimaryColors.primaryWhite,
    shadowOffset: { height: 1, width: -1 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    letterSpacing:1.5
  },
  subHeading: {
    color: PrimaryColors.secondaryWhite,
    fontSize: 18,
    fontFamily:"Roboto",
    opacity:0.5,
  },
  imgBackground: {
    opacity: 0.5,
  },
});
