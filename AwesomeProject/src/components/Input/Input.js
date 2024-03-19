import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Input.style';

const Input = ({placeholder}) => {
  return (
    <View>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default Input;
