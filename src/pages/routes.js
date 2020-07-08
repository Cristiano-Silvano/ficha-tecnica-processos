import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import FichaTecnica4 from './FichaTecnica4';
import FichaTecnica1 from './FichaTecnica1';
import FichaTecnica2 from './FichaTecnica2';
import FichaTecnica3 from './FichaTecnica3';
import Home from './Home';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="FichaTecnica4" component={FichaTecnica4} />
        <Stack.Screen name="FichaTecnica1" component={FichaTecnica1} />
        <Stack.Screen name="FichaTecnica2" component={FichaTecnica2} />
        <Stack.Screen name="FichaTecnica3" component={FichaTecnica3} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
