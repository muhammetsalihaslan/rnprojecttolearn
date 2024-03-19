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

  const setDB = () => {
    const reference = database().ref('car/rentable');
    reference.set({
      brand: 'Audi',
      model: 'A8',
      price: 128,
    });
  };
  const updateDB = () => {
    const reference = database().ref('car/rentable');
    reference.update({
      model: 'A3',
    });
  };
  const pushDB = () => {
    const reference = database().ref('car/rentable');
    reference.push({
      brand: 'Passat',
      model: '81',
      price: 650,
    });
  };

  return (
    <View>
      <Text style={{fontSize: 70}}>Hello fireBase</Text>
      <Button title="Check DB" onPress={checkDB} />
      <Button title="Listen DB" onPress={listenDB} />
      <Button title="Set DB" onPress={setDB} />
      <Button title="Update DB" onPress={updateDB} />
      <Button title="Push DB" onPress={pushDB} />
    </View>
  );
};