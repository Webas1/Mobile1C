import React from 'react';
import { View, HStack, Text, Box, Button } from 'native-base';
import Footer from './footermenu/Footer';
import Header from './header/header';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Myakk({navigation}) {
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
    return (
      <SafeAreaView style={{
        flexDirection: 'column',  
        height: '100%',
        width:'100%'
			}}>
                  <Header 
                  style={{
                    flex: 1,
                    backgroundColor: '#fafafa',
                    borderColor: '#B3B3B3',
                    height: '20%',
                  }}
                  />
                                          <SafeAreaView
                                          style={{
                                            flex: 2,
                                            backgroundColor: 'gray',
                                            //position: 'fixed',
                                            //flex: 1,
                                            flexDirection: 'column',  
                                            //height: '50%',
                                            width:'100%',
                                        //alignItems: 'center',
                                        //justifyContent: 'center',
                                          }}
                                          >
                                          <Text>myakk</Text>
                                          </SafeAreaView>
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