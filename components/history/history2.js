import React from 'react';
import { View, HStack, Text, Box, Button,Image,ScrollView,Heading } from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function Hist() {
    return (
<ScrollView>
    <Box >
    <View 
    flexDirection='row'
    //justifyContent='space-between'
    mt={'5%'}
    >
        
    <View  >
        <Image
        size='xl'
        source={require('../../Image/image.jpg')}
        alt={'image '}/>
    </View>
    <View><Text
                style={{
               fontWeight: 'bold',
              fontSize: 16,
               color: 'gray',
                 }}
                 >
                 В корзину
                 </Text>
        </View>
        </View> 
    </Box>              
          
                      </ScrollView>
    )
}