import React from 'react';
import LogIn from './screens/LogIn';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './screens/Register';
import Home from './screens/Home';
import AddCar from './screens/AddCar';
import ManageCar from './screens/ManageCar';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddCar" component={AddCar} />
        <Stack.Screen name="ManageCar" component={ManageCar} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
