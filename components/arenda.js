import React ,{  useState,useEffect }  from 'react';
import { View, HStack, Text, Box, Button, Column,FlatList ,Image} from 'native-base';
import Footer from './footermenu/Footer';
import { SafeAreaView } from 'react-native-safe-area-context';
import {oborudimg} from '../data/oborudovanie.js';
import NumericInput from 'react-native-numeric-input'
import { useNavigation } from '@react-navigation/native';
  

export default function Arenda({navigation}) {
    const [day, setDay] = useState([]);
    const [kolvo, setKolvo] = useState([]);
   // const [name, NameOb] = useState([]);
    //const [sell, Sell] = useState([]);
const navigat = (idx=0) =>{
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
    
    
    const Arenda = async () => {
      //alert(Sell);
      
        try {
          //alert(Name)
          toString(NameOb);
         const response = await fetch('https://7452-188-168-215-162.eu.ngrok.io/dobavzakaz.php',{
           method: 'POST',
         headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
           }),
         body: JSON.stringify({
         Login:LoginP,Oborudovanie:NameOb,Sell:Sell,Day:day,Kolvo:kolvo})
        });
         const json = await response.text();
         alert(json);
      // setDat(json.Sell);
       // setDa(json.Oborudovanie);
       } finally {
        setLoading(false);
      }
    };
    
    /*
                     <Image
                            style={{width:'100%',height:170,borderRadius:10}} size='lg'
                            resizeMode='cover'
                            source={{uri:oborudimg.Image[id=2]}}
                            alt='инструмент'
                            />*/
return(

    <SafeAreaView style={{
        // flexDirection: 'column',  
        
        backgroundColor:'#38B6FF',
         height: '100%',
         width:'100%'
             }}>
                 
                 <SafeAreaView style={{
                                        flex: 1,height:300,marginBottom:'40%'}}   >
                     <Image
                                style={{width:'100%', height:300}} 
                                //maxWidth='100%'
                                
                                
                                resizeMode='stretch'
                                source={{uri:Src}}
                                alt='инструмент'
                                />
                     </SafeAreaView>
                     <SafeAreaView style={{
                                        flex: 2}}  >
                        <SafeAreaView style={{ flex: 1,flexDirection:'row',justifyContent: 'space-between'}}>
                        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Имя модели:</Text>
                         <Text style={{color:'white',fontSize:20}}>{NameOb}</Text>
                            </SafeAreaView>
                            <SafeAreaView style={{ flex: 2,flexDirection:'row',justifyContent: 'space-between' }}>
                        <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Цена рублей в сутки:</Text>
                         <Text style={{color:'white',fontSize:20}}>{Sell} ₽</Text>
                            </SafeAreaView>
                            <SafeAreaView style={{ flex: 3,flexDirection:'row',justifyContent: 'space-between' }}>
                        <Text style={{color:'black',fontSize:20,fontWeight:'bold',alignItems:'center',marginLeft:'7%'}}>   Количество {"\n"}оборудования</Text>
                         <Text style={{color:'black',fontSize:20,fontWeight:'bold',marginRight:'7%'}}>Количество{"\n"}      дней</Text>
                            </SafeAreaView>
                            <SafeAreaView style={{ flex: 4,flexDirection:'row',justifyContent: 'space-between'}}>
                                                          <View style={{marginLeft:'10%'}}><NumericInput type='plus-minus' onChange={setKolvo}/></View>
                                                          <View style={{marginRight:'10%'}}><NumericInput type='plus-minus' onChange={setDay} /></View>
                            </SafeAreaView>
                            <Button onPress={Arenda}style={{backgroundColor:'#C8C8C8',margin:5}}><Text style={{color:'black',fontSize:20,fontWeight:'bold',margin:5}}>Арендовать {' '+ 'за'+'   '+ Sell*day*kolvo+'  ₽'}</Text></Button>
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
)
}