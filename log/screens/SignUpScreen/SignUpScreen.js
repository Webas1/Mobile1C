import React, {useState,Component } from 'react';
import {View, Text,TextInput, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import PressableButton from '../../components/PressableButton';
//import Connecetbd from '../../../databaselink/connectbd';
import {useForm} from 'react-hook-form';







export default function SignUpScreen ({navigation})  {
  
  const [data, setData] = useState([]);
  const [Name, onChangeName] = React.useState(null);
  const [login, onChangelogin] = React.useState(null);
  const [Email, onChangeEmail] = React.useState(null);
  const [Number, onChangeNumber] = React.useState(null);
  const [Password, onChangePassword] = React.useState(null);

 const reg = async () => {
 
    try {
      //alert(Name)
     const response = await fetch('https://f3e4-188-168-215-162.eu.ngrok.io/autentification.php',{
       method: 'POST',
     headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
       }),
     body: JSON.stringify({
     Nameuser:Name,Login:login,Email:Email,Number:Number,Password:Password})
    });
     const json = await response.text();
     setData(json);
     alert(json);
  // setDat(json.Sell);
   // setDa(json.Oborudovanie);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
  
  };


  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const onSignInPress = () => {
    navigation.navigate('main');
  };
 
    const state = {
      UserName: '',
      UserEmail: '',
      UserPassword: ''
    }
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#38B6FF'}}>
      <View style={styles.root}>
      
        <Text style={styles.title}>Создайте аккаунт</Text>
        
        
        <CustomInput
          name="name"
          onChangeText={onChangeName}
          
          
          control={control}
          placeholder="Имя"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }}
          
        />

        <CustomInput
          name="username"
          onChangeText={onChangelogin}
          control={control}
          
          placeholder="Логин"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}

        />
        <CustomInput
          name="email"
          onChangeText={onChangeEmail}
          
          control={control}
          placeholder="Почта"
          rules={{
            required: 'Email is required',
           // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          name="number"
          onChangeText={onChangeNumber}
          control={control}
          
          placeholder="Телефон"
          rules={{
            required: 'Number is required',
           // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          name="password"
          onChangeText={onChangePassword}
          
          control={control}
          placeholder="Пароль"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Повторить пароль"
          secureTextEntry
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
        />

          
        <CustomButton
          text="Регистрация"
          onPress={reg}
        />
          
       

        

        <PressableButton
          text="Уже есть аккаунт? Войдите"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});



