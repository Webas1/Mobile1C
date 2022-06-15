
import Footer from './components/footermenu/Footer';
import React from 'react';
import Chat from './components/chat';
import Edit from './components/edit';
import History from './components/history';
import Camera from './components/camera';
import Myakk from './components/myakk';
import Login from './log/screens/SignInScreen/SignInScreen.js';
import Forgot from './log/screens/ForgotPasswordScreen/ForgotPasswordScreen.js';
import Registr from './log/screens/SignUpScreen/SignUpScreen.js'; 
import Newpass from './log/screens/NewPasswordScreen/NewPasswordScreen';
import Arenda from './components/arenda';
import App from './components/test';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack= createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            gestureEnabled: true,
            headerStyle: { backgroundColor: '#1E1E1E' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#38B6FF',
            headerMode:'none'
          }}
        >
        <Stack.Screen 
        name="main"
        component = {Login}
        options  ={{title:'Вход'}}
       
        />
        <Stack.Screen 
        name="app"
        component = {App}
        options  ={{title:'Вход'}}
       
        />
        <Stack.Screen 
        name="createacc"
        component = {Registr}
        options  ={{title:'Регистрация'}}
        />
        <Stack.Screen 
        name="forgot"
        component = {Forgot}
        options  ={{title:'Смена пароля'}}
        />
        <Stack.Screen 
        name="newpass"
        component = {Newpass}
        options  ={{title:'Смена пароля'}}
        />
            <Stack.Screen 
        name="edit"
        component = {Edit}
        options  ={{title:'Главная',}}
        //headerShown: false,
        />
        <Stack.Screen 
        name="arenda"
        component = {Arenda}
        options ={{title:'Аренда'}}
        />
        <Stack.Screen 
        name="myzap"
        component = {History}
        options ={{title:'Мои запросы'}}
        />
        <Stack.Screen 
        name="camera"
        component = {Camera}
        options ={{title:'Чат со службой поддержки'}}
        />
        <Stack.Screen 
        name="chat"
        component = {Chat}
        options ={{title:'Мой профиль'}}
        />
        <Stack.Screen 
        name="myakk"
        component = {Myakk}
        options ={{title:'Мой профиль'}}
        />
         <Stack.Screen 
        name="footer"
        component = {Footer}
        options  ={{title:'Запрос'}}
        />
        </Stack.Navigator>
    </NavigationContainer>
    ;
}
