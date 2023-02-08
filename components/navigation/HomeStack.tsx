import { createStackNavigator } from "@react-navigation/stack";
import AlbumSongs from "../../screens/AlbumSongScreen";
import HomeScreen from "../../screens/HomeScreen";

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="AlbumSongs" component={AlbumSongs} />
    </HomeStack.Navigator>
  );
}
