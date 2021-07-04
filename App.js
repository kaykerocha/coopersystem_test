import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Investiment from './src/screens/Investiment';
import InvestimentDetail from './src/screens/InvestimentDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Investiment" component={Investiment} />
        <Stack.Screen name="InvestimentDetail" component={InvestimentDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
