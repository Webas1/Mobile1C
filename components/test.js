import React, { useEffect, useState } from 'react';
import {oborudimg} from '../data/oborudovanie.js';
import { View, HStack, Text, Box, Button,Image,ScrollView,Heading,FlatList } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import PressableButton from '../log/components/PressableButton';
import { useNavigation } from '@react-navigation/native';
import * as RootNavigation from './footermenu/rootnavigat.js';
export default function App({navigation,aren}) {
  global.NameOb='';
      global.Sell='';
      global.Src='';
      global.Opis='';
  const d=0;
  const arenda=(nameO,sell,src,d,id)=>{
      global.NameOb=nameO.toString();
      global.Sell=parseInt(sell);
      global.Src=src;
      Opis=data[id];
      aren(d);
    }
    // const aren=()=> RootNavigation.navigate('arenda');
  
    ;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data2, setDat] = useState([]);
  const [data3, setDa] = useState([]);
  //const [imgg, setIm] = useState([]);
  const getOborud = async () => {
     try {
      const response = await fetch('https://7452-188-168-215-162.eu.ngrok.io/load%20oborudovanie.php');
      const json = await response.json();
      setData(json.Opisanie);
    setDat(json.Sell);
     setDa(json.Oborudovanie);
     //setIm(oborudimg.Image);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOborud();
  }, []);
  function opisan(index){
    <View style={{position: 'absolute',
    top: '30%',
    right: '30%',height:300}}>{data[index]}</View>
    return(<View style={{position: 'absolute',
    top: '30%',
    right: '30%',height:300}}>{data[index]}</View>)
  }
  return (
    
    <SafeAreaView style={{flex:2,backgroundColor:'#C8C8C8'}} >
                                             
                                                        <FlatList
                                                        columnWrapperStyle={{justifyContent: 'space-between'}}
                                                                  data={oborudimg}
                                                                  numColumns={2}
                                                                  keyExtractor={item => item.id}
                                                                  renderItem={({ item , index}) => (
                                                                    
                                                                                <View mx={1} w='47%'  flexDirection='column' justifyContent='center' style={{borderWidth:2,borderColor:'white', flex:1,margin:7,borderRadius:20,backgroundColor:'#C8C8C8'}}>
                                                                                  <Image style={{width:'100%',height:170,borderRadius:22}} size='lg'
                                                                                          resizeMode='stretch'
                                                                                          source={{uri:item.Image}}
                                                                                          alt='инструмент'></Image>
                                                                                  
                                                                                   
                                                                                    <SafeAreaView 
                                                                                    //style={{height:83}}
                                                                                    >
                                                                                    <PressableButton onPress={()=>{opisan(index)}}  text={data3[index]} style={{  textAlign: 'center'}} type="TERT"/></SafeAreaView>
                                                                                    <Text style={{ fontSize:10,fontWeight: 'bold' ,textAlign: 'center',color:'gray'}}>
                                                                                 {data2[index]} р/сутки
                                                                                </Text>
                                                                                
                                                                                                <Button 
                                                                                                style={{backgroundColor:'#38B6FF',borderRadius: 20}}
                                                                                                onPress={()=>arenda(data3[index],data2[index],item.Image,1,index)}
                                                                                                >
                                                                                                      <Box
                                                                                                        style={{
                                                                                                          //backgroundColor: '#00A0FF',
                                                                                                          borderRadius: 30,
                                                                                                          //marginTop: 2,
                                                                                                          width: 110,
                                                                                                        }}
                                                                                                        //px={2}
                                                                                                        //py={1}
                                                                                                      >
                                                                                                        <Text
                                                                                                          style={{
                                                                                                            fontWeight: 'bold',
                                                                                                            fontSize: 16,
                                                                                                            color: '#fff',
                                                                                                            textAlign:'center',
                                                                                                          }}
                                                                                                        >
                                                                                                          Арендовать
                                                                                                        </Text>
                                                                                                      </Box></Button>
                                                                                                </View>
                                                        )}/>
                                                  
                                             
                      </SafeAreaView>
  );
};






























/*//import { json } from 'body-parser';
import { View,Text,ActivityIndicator, FlatList  } from 'native-base';
import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';

//const url='http://php.test:81/tovars.json';
//const data=[];
export default  Test=()=> {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
};
/*  const [data, setData] = useState([]);
    const getD = async () => {
        //console.log('ntcn')
        const response=await fetch('https://07cd-185-160-37-121.eu.ngrok.io/')
          const json= response.text();
         // .then((json) => {
         //  const [data, setData] = useState([]);
           setData(json.name);
           
    }
        // return data;}
        useEffect(() => {
          getD();}, []);
      
        return(<Text style={{ fontSize: 14, height: 40 }}>"fhhffh"{data}</Text>)  
          } */
    //data=[];
    
  /* componentDidMount(){
      fetch(url)
    .then(res=> res.json())
    .then(res=> {
        this.setState({data: res});
      });
  //data='dddd'
     //bd=data
     //this.setState({data})
  }
    
render(){
 return(<View>{data}{data.map(item=>(<Text>{item.name}</Text>))}</View>)
     }*/
 
