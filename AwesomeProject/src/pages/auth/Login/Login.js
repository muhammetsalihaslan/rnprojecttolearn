import React from 'react';
import {Text, View} from 'react-native';
import styles from './Login.style';
import Input from '../../../components/Input';

const Login = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="e-posta" />
      <Input placeholder="password" />
    </View>
  );
};

export default Login;
