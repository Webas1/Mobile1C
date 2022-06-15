import React from 'react';
import { View, HStack, Text, Box,Image} from 'native-base';
import { SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default function Header () {
	return (
		
		<SafeAreaView>
            <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginleft:'40%'}}>
	<Image source={ require('../../Image/ter.jpg') }
                    width={50}
                    height={50}
                    alt={'image antiter'}/>
                    </View>
		</SafeAreaView>
	)
}


