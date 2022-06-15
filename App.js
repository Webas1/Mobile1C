import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/footermenu/Footer';
import Header from './components/header/header';
import Main from './svift';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
	NativeBaseProvider,
	Box,
	Heading,
	Image,
	SimpleGrid,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function App({navigation}) {
  
  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider><Main  /></NativeBaseProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height: '100%',
  },
});
