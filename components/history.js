import React ,{  useState,useEffect }  from 'react';
import { View, HStack, Text, Box, Button, Column,FlatList, SectionList,Image } from 'native-base';
import Footer from './footermenu/Footer';
import Header from './header/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hist from './history/history2';
import {oborudimg} from '../data/oborudovanie.js';
import { Alert } from 'react-native';
//import { LoginP } from '../data/loginpolzovatela';
export default function History({navigation}) {
  const [day, setData] = useState([]);
  const [sell, setDat] = useState([]);
  const [oborud, setDa] = useState([]);
  const [date, setD] = useState([]);
  
  const load = async () => {
 
    try {
      //alert(Name)
     const response = await fetch('https://7452-188-168-215-162.eu.ngrok.io/loadzakazi.php',{
       method: 'POST',
     headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
       }),
     body: JSON.stringify({
     LoginP})
    });
    const json = await response.json();
     
     setData(json.Day);
    setDat(json.Sell);
     setDa(json.Oborudovanie);
     setD(json.Date);
     
     //setDa('test');
  // setDat(json.Sell);
   //alert(json.Oborudovanie);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
  
  };
  useEffect(() => {
    load();
  }, []);


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
       // flexDirection: 'column',  
        height: '100%',
        width:'100%'
			}}>
                                    <FlatList
                                                                  numRows={1}
                                                                 //columnWrapperStyle={{justifyContent: 'flex-start'}}
                                                                  //flex={2}
                                                                  data={oborud}
                                                                  keyExtractor={item => item.id}
                                                                  renderItem={({ item , index}) => (
                                                                    <View      style={{flexDirection: 'row',justifyContent: 'flex-start',marginTop:2}}>
                                                                      <View >
                                                                        <Image
                                                                        //uri:oborudimg.id=index.Image
                                                                        size='xl'
                                                                        resizeMode='stretch'
                                                                        source={{uri:oborudimg[id=index].Image}}
                                                                        alt='инструмент'
                                                                        ></Image>
                                                                        </View>
                                                                        <View style={{flexDirection: 'column',justifyContent:'center',marginTop:2}}>
                                                                              <View style={{flexDirection: 'row',justifyContent: 'flex-start'}} >
                                                                                
                                                                                <Text>{oborud[index]}</Text>
                                                                              </View>
                                                                              <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
                                                                                <Text>Цена в сутки:</Text>
                                                                                <Text>{sell[index]+' ₽'}</Text>
                                                                              </View>
                                                                              <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
                                                                                <Text>Количество дней:</Text>
                                                                                <Text>{day[index]}</Text>
                                                                              </View>
                                                                              <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
                                                                                <Text>День заказа:</Text>
                                                                                <Text>{date[index]}</Text>
                                                                              </View>
                                                                              <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
                                                                                <Text>Итого:</Text>
                                                                                <Text>{(sell[index])*(day[index]) +' ₽'}</Text>
                                                                              </View>
                                                                      </View>
                                                                    </View>
                                                                  )}/>
                     
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