import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import PressableButton from '../../components/PressableButton';
import {useForm} from 'react-hook-form';


export default function NewPasswordScreen({navigation}) {
  const {control, handleSubmit} = useForm();

 
  const onSignInPress = () => {
    navigation.navigate('main');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Смена пароля</Text>

        <CustomInput
          placeholder="Логин"
          name="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomInput
          placeholder="Код из сообщения на почте"
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
        />

        <CustomInput
          placeholder="Введите новый пароль"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomButton text="Сменить" onPress={onSignInPress} />

        <PressableButton
          text="Вернуться на вход"
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


