import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../../components/CustomInput';
import PressableButton from '../../components/PressableButton';
import CustomButton from '../../components/CustomButton';
//import {LoginP} from '../../../data/loginpolzovatela'
//import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import Logo from '../../../Image/ter.jpg';


export default function Signin({navigation}) {
  const [login, onChangelogin] = React.useState(null);
  global.LoginP=login;
  const [Password, onChangePassword] = React.useState(null);
  const {
    control,
   
  } = useForm();
  const createacc=()=>navigation.navigate('createacc')
  const forgotepas=()=>navigation.navigate('forgot')
  const edit=()=>navigation.navigate('edit')

  const reg = async () => {
 
    try {
      //alert(Name)
     const response = await fetch('https://7452-188-168-215-162.eu.ngrok.io/autef.php',{
       method: 'POST',
     headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
       }),
     body: JSON.stringify({
     LoginP,Password})
    });
     const json = await response.text();
     if (json==='1'){
       edit();
     }
     else{
       alert('Неверный логин или пароль!');
     }
  // setDat(json.Sell);
   // setDa(json.Oborudovanie);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
  
  };
  return (
    <SafeAreaView showsVerticalScrollIndicator={false} style={{backgroundColor:'#38B6FF'}}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Логин"
          control={control}
          rules={{required: 'Username is required'}}
          onChangeText={onChangelogin}
        />

        <CustomInput
          name="password"
          placeholder="Пароль"
          onChangeText={onChangePassword}
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />
        
        <CustomButton
          text={ 'Войти'}
          onPress={reg}
        />

        <PressableButton
          text="Забыли пароль?"
          onPress={forgotepas}
          type="TERTIARY"
        />

        

        <PressableButton
          text="Нет аккаунта? Создайте"
          onPress={createacc} 
          type="TERTIARY"
        />
        
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});


