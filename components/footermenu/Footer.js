import React from 'react';
import { View, HStack, Text, Box, Button,TouchableHighlight } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { menu } from './menu';
import Edit from '../edit';
import { SafeAreaView } from 'react-native-safe-area-context';
//import {TouchableHighlight} from 'react-native';
var col=0;
export default function Footer({ navigat})  {
	const smena = (idx) =>{
		
		 col=idx
		
	}
	return (
		<SafeAreaView
		>
			<SafeAreaView  alignItems='center' justifyContent='space-between' flexDirection= 'row'  style={{backgroundColor:'#1E1E1E'}}>
				{menu.map((item, idx) => (
					<View
						key={`footer ${idx}`}
						style={{
						}}
					>
						
						
						<Button
						colorScheme="gray"
						 onPress={()=>{navigat(idx),smena(idx)}}
						 
						 variant="ghost"
						 
						 >
						<MaterialIcons
							name={item.icon}
							size={35}
							style={{ textAlign: 'center' }}
							color={idx === col ? '#38B6FF' : '#C8C8C8'}
						/>
						<Text
							color={idx === col ? '#38B6FF' : '#C8C8C8'}
							style={{ fontSize: 10,fontWeight: 'bold' }}
						>
							{item.title}
						</Text>
						</Button>
					</View>
					
				))}
			</SafeAreaView>
		</SafeAreaView>
	)
}


