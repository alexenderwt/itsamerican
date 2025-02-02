import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Scanner from './Scanner';
import Result from './Result';
import About from './About';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Scanner">
        <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('About')}
                title="About"
                color="#000"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('About')}
                title="About"
                color="#000"
              />
            ),
          })}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
