import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const Result = ({ route, navigation }) => {
  const { result } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {result.isAmerican ? (
        <View>
          <Text>It's an American Product!</Text>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png' }}
            style={{ width: 100, height: 60 }}
          />
        </View>
      ) : (
        <Text>It's not an American Product!</Text>
      )}
      <Button title="Continue" onPress={() => navigation.pop()} />
    </View>
  );
};

export default Result;
