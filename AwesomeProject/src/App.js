import React from 'react';
import {Button, Text, View} from 'react-native';
import database from '@react-native-firebase/database';

const App = () => {
  const checkDB = () => {
    const reference = database().ref('books/');
    reference.once('value').then(snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };
  const listenDB = () => {
    const reference = database().ref('books/');
    reference.on('value', snapshot => {
      console.log('User data: ', snapshot.val());
    });
  };

  return (
    <View>
      <Text style={{fontSize: 70}}>Hello fireBase</Text>
      <Button title="Check DB" onPress={checkDB} />
      <Button title="Listen DB" onPress={listenDB} />
    </View>
  );
};

export default App;
