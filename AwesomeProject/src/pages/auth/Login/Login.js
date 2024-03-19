import React from 'react';
import {Text, View} from 'react-native';
import styles from './Login.style';
import Input from '../../../components/Input';
import ButtonComponent from '../../../components/Button/ButtonComponent';

const Login = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="e-posta" />
      <Input placeholder="password" />
      <ButtonComponent text="Giriş Yap" />
    </View>
  );
};

export default Login;
