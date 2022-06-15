import React, { useEffect, useState } from 'react';

import { View, HStack, Text, Box, Button,Image,ScrollView,Heading,FlatList } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import PressableButton from '../log/components/PressableButton';
export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //const [data2, setDat] = useState([]);
 // const [data3, setDa] = useState([]);
 // const ob = [
/*
  fetch('https://b512-185-160-37-121.eu.ngrok.io/autentification.php',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({name: 'yourValue',
    test: 'yourOtherValue'})
  })
  */
 const getMovies = async () => {
     try {
      const response = await fetch('https://b512-185-160-37-121.eu.ngrok.io/autentification.php',{
        method: 'POST',
      headers: new Headers({
                 'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
      body:  });
      const json = await response.text();
      setData(json);
   // setDat(json.Sell);
    // setDa(json.Oborudovanie);
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
    <SafeAreaView  >
                                             
                                                        <FlatList
                                                        columnWrapperStyle={{justifyContent: 'space-between'}}
                                                                  data={data}
                                                                  numColumns={2}
                                                                  keyExtractor={item => item.id}
                                                                  renderItem={({ item , index}) => (
                                                                                
                                                                                <Text my={2} style={{ fontWeight: 'bold' ,textAlign: 'center'}}>
                                                                                 {data}</Text>
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
 
