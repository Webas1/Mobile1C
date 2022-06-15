import React from 'react';
import { View, HStack, Text, Box, Button,Image,ScrollView,Heading } from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../data/products';

export default function Catalog() {
    return (
<ScrollView>
                                             <Box style={{ marginTop: 2 }} p={2}>
                                                      <Heading size={'lg'} color='#111'>
                                                        Успей купить!
                                                      </Heading>
                                                      <View
                                                        mt={0.5}
                                                        flexDirection='row'
                                                        flexWrap='wrap'
                                                        justifyContent='space-between'
                                                        
                                                      >
                                                        {products.map((product, idx) => (
                                                          <View key={`product ${idx}`} mb={2} mx={2} w='40%'style={{
                                                            backgroundColor:'green'}}>
                                                            <Image
                                                              size='lg'
                                                              resizeMode='cover'
                                                              source={{
                                                                uri: product.image,
                                                              }}
                                                              alt={product.name}
                                                            />
                                                            <Text my={2} style={{ fontWeight: 'bold' }}>
                                                              {product.price.toLocaleString('ru-Ru', {
                                                                style: 'currency',
                                                                currency: 'RUB',
                                                              })}
                                                            </Text>
                                                            <Text style={{ fontSize: 14, height: 40 }}>
                                                              {product.name}
                                                            </Text>

                                                            <Box
                                                              style={{
                                                                backgroundColor: '#00A0FF',
                                                                borderRadius: 8,
                                                                marginTop: 5,
                                                                width: 105,
                                                              }}
                                                              px={2}
                                                              py={2}
                                                            >
                                                              <Text
                                                                style={{
                                                                  fontWeight: 'bold',
                                                                  fontSize: 16,
                                                                  color: '#fff',
                                                                }}
                                                              >
                                                                В корзину
                                                              </Text>
                                                            </Box>
                                                          </View>
                                                        ))}
                                                      </View>
                                             </Box>
                      </ScrollView>
    )
}