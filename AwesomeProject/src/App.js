import React from 'react';
import {Button, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

const App = () => {
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const signOut = () => {
    auth()
      .signOut()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const checkUser = () => {
    const user = auth().currentUser;
    console.log(user);
  };

  return (
    <View>
      <Text>Hello fireBase</Text>
      <Button title="Sign up" onPress={signUp} />
      <Button title="Sign in" onPress={signIn} />
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Check user" onPress={checkUser} />
    </View>
  );
};

export default App;
