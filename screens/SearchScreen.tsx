import {View,Text,StyleSheet} from 'react-native';
import { PrimaryColors } from '../theme/colors';

export default function Search({navigation}) {
  return (
    <View style={styles.main}>
        <Text>This is search screen!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:PrimaryColors.primaryBlack
  }
})