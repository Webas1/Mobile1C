import React from 'react'
import { Input, Icon, Box } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

const Search = () => {
	return (
		<Box w='99%' style={{margin:2, backgroundColor: '#fff', borderRadius: 20 }}>
			<Input
				InputLeftElement={
					<Icon
						as={<MaterialIcons name='search' />}
						size='md'
						m={2}
						//mr={-1}
						color='#525D6F'
					/>
				}
				
				placeholder='Искать инструмент' // mx={4}
				placeholderTextColor='#525D6F'
				variant='rounded'
			/>
		</Box>
	)
}

export default Search