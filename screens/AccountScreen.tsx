import {View,Text,StyleSheet} from 'react-native';
import { PrimaryColors } from '../theme/colors';

export default function Account({navigation}) {
  return (
    <View style={styles.main}>
        <Text>This is account screen!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:PrimaryColors.primaryBlack
  }
})