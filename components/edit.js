import React, { useState,Component} from 'react';
import { View, HStack, Text, Box, Button,Image,ScrollView,Heading } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Footer from './footermenu/Footer';
import Header from './header/header';
import { SafeAreaView } from 'react-native-safe-area-context';

import Catalog from './catalog/catalog';
import PressableButton from '../log/components/PressableButton';
import Test from './test';
import Search from './search';

export default function Edit({navigation}) {
  //Test; 
  const aren=(d)=> {if (d===1){navigation.navigate('arenda');}}
  const navigat = (idx) =>{
   
    if (idx===0){
      navigation.navigate('edit');
      
    }
    if (idx===1){
      
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
    return (
      
      <SafeAreaView style={{
        flexDirection: 'column',  
        height: '100%',
        width:'100%',
        backgroundColor:'#C8C8C8'
			}}>
                  <Search />
                 <Test  aren={aren}/>
                
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