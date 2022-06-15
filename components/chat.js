import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import { View, HStack, Text, Box, Button, ScrollView } from 'native-base';
import Footer from './footermenu/Footer';
import Header from './header/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../log/components/CustomInput';
import {useForm} from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler';
import Logo from '../Image/ter.jpg';
import { MaterialIcons } from '@expo/vector-icons';

export default function Chat({navigation}) {
  
  const navigat = (idx) =>{
    if (idx===0){
      navigation.navigate('edit');
      
    }
    if (idx===1){
      //alert('vhod');
      navigation.navigate('myzap');
    }
    if (idx===2){
      navigation.navigate('camera');
    }
    if (idx===3){
      navigation.navigate('chat');
    }
    if (idx===4){
      navigation.navigate('myakk');
    }}
    const {control, handleSubmit, watch} = useForm();
    return (
      <SafeAreaView style={{
        
        flexDirection: 'column',  
        height: '100%',
        width:'100%'
			}}>
                 
                                          <ScrollView
                                          style={{
                                            
                                            backgroundColor: '#A7A7A7',
                                            //position: 'fixed',
                                            flex: 1,
                                            flexDirection: 'column',  
                                            //height: '50%',
                                            width:'100%',
                                        //alignItems: 'center',
                                        //justifyContent: 'center',
                                          }}
                                          >
                                            
                                            <View style={styles.header}>
                                            
                                                <View style={styles.headerContent}>
                                                    <Image style={styles.avatar}
                                                      source={Logo}/>

                                                    <Text style={styles.name}>Алексеев Илья Сергеевич </Text>
                                                    <Text style={styles.userInfo}>123pochta@gmail.com </Text>
                                                    
                                                </View>
                                              </View>
                                              <SafeAreaView style={{flex: 2,backgroundColor:'#A7A7A7'}}>
                                                              <Text style={{fontWeight: 'bold',color:'#1E1E1E',padding:1,marginLeft:8,fontSize:10}}>Логин </Text>      
                                                              <TextInput
                                                                name="username"
                                                                style={{color:'white',fontSize:18,paddingLeft:7,borderColor: "#DCDCDC",
                                                                borderWidth: 2,}}
                                                                placeholder="IlyaCtroika"
                                                              />
                                                              <Text style={{fontWeight: 'bold',color:'#1E1E1E',padding:1,marginLeft:8,fontSize:10}}>Почта </Text>  
                                                              <TextInput
                                                            style={{color:'white',fontSize:18,paddingLeft:7,borderColor: "#DCDCDC",
                                                            borderWidth: 2,}}
                                                                name="email"
                                                              // onChangeText={onChangeEmail}
                                                                placeholder="123pochta@gmail.com"
                                                              />
                                                              <Text style={{fontWeight: 'bold',color:'#1E1E1E',padding:1,marginLeft:8,fontSize:10}}>Телефон</Text>  
                                                              <TextInput
                                                              style={{color:'white',fontSize:18,paddingLeft:7,borderColor: "#DCDCDC",
                                                              borderWidth: 2,}}
                                                                name="number"
                                                                placeholder="89996663333"
                                                              />
                                                              <Text style={{fontWeight: 'bold',color:'#1E1E1E',padding:1,marginLeft:8,fontSize:10}}>Пароль</Text>  
                                                              <TextInput
                                                              style={{color:'white',fontSize:18,paddingLeft:7,borderColor: "#DCDCDC",
                                                              borderWidth: 2,}}
                                                                name="password"
                                                              // onChangeText={onChangePassword}
                                                                placeholder="Изменить пароль"
                                                              />  
                                                              <Button justifyContent='center'
                                                              style={{backgroundColor:'#38B6FF',marginLeft:'30%',marginRight:'30%',marginTop:'3%',borderRadius:8}}
                                                              ><Text style={{fontWeight: 'bold',fontSize:16}}>Редактировать</Text></Button>  
                                                              <SafeAreaView  justifyContent="flex-end" alignItems='flex-end'><Text style={{marginTop:'18%'}}>
                                                              <MaterialIcons  name="logout" size={22} color="black" /> </Text></SafeAreaView>         
        </SafeAreaView>
                                          </ScrollView>
                    <Footer navigat={navigat}
                    style={{
                      flex: 3,
                      backgroundColor: '#fafafa',
                      //padding: 15,
                      //paddingTop: 5,
                      borderColor: '#B3B3B3',
                      borderTopWidth: 1,
                      //position: 'fixed',
                       width:'100%',
                    }}
                    
                    />
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    header:{
      backgroundColor: "#DCDCDC",
    },
    headerContent:{
      padding:17,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    name:{
      fontSize:22,
      color:"#000000",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:16,
      color:"#778899",
      fontWeight:'600',
    },
    body:{
      backgroundColor: "#778899",
      height:500,
      alignItems:'center',
    },
    item:{
      flexDirection : 'row',
    },
    infoContent:{
      flex:1,
      alignItems:'flex-start',
      paddingLeft:5
    },
    iconContent:{
      flex:1,
      alignItems:'flex-end',
      paddingRight:5,
    },
    icon:{
      width:30,
      height:30,
      marginTop:20,
    },
    info:{
      fontSize:18,
      marginTop:20,
      color: "#FFFFFF",
    }
  });