import React from 'react';
import {View, Button} from 'react-native';
import {styles} from './ButtonComponent.style';

const ButtonComponent = ({text}) => {
  return (
    <View>
      <Button title={text} style={styles.button} />
    </View>
  );
};

export default ButtonComponent;
