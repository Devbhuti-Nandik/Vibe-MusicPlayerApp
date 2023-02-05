import { SafeAreaView,StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar style="light" />
      <Navigation/>
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#000'
  }
})