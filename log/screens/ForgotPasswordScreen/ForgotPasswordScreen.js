import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useForm} from 'react-hook-form';
import PressableButton from '../../components/PressableButton';

export default function ForgotPasswordScreen ({navigation}) {
  const {control} = useForm();
  
  const onSignInPress = () => {
    navigation.navigate('main');
  };
  const newpass = () => {
    navigation.navigate('newpass');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#38B6FF'}}>
      <View style={styles.root}>
        <Text style={styles.title}>Сменить пароль</Text>

        <CustomInput
          name="username"
          control={control}
          placeholder="Логин"
          rules={{
            required: 'Username is required',
          }}
        />

        <CustomButton 
        text="Сменить" 
        onPress={newpass}
        />

        <PressableButton
          text="Перейти для входа"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

