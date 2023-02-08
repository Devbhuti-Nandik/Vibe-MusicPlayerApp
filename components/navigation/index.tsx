import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { Screen_Names } from "./data/const";
import { PrimaryColors } from "../../theme/colors";

//Screens
import Search from "../../screens/SearchScreen";
import MusicList from "../../screens/MusiclistScreen";
import Account from "../../screens/AccountScreen";
import HomeStackScreen from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Screen_Names.homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: PrimaryColors.primaryWhite,
          tabBarIconStyle: {
            shadowColor: PrimaryColors.primaryWhite,
            shadowOffset: { height: 1, width: -1 },
            shadowOpacity: 1,
            shadowRadius: 15,
            elevation: 2,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            let rn = route.name;
            if (rn === Screen_Names.homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === Screen_Names.searchName) {
              iconName = focused ? "md-search-sharp" : "search-outline";
            } else if (rn === Screen_Names.musicListName) {
              iconName = focused ? "musical-notes" : "musical-notes-outline";
            } else if (rn === Screen_Names.accountName) {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={focused ? 32 : 24}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen name={Screen_Names.homeName} component={HomeStackScreen} />
        <Tab.Screen name={Screen_Names.searchName} component={Search} />
        <Tab.Screen name={Screen_Names.musicListName} component={MusicList} />
        <Tab.Screen name={Screen_Names.accountName} component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: PrimaryColors.primaryBlack,
    borderTopWidth: 0,
    height: 55,
  },
});
