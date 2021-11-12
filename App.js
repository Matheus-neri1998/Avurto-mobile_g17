import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Cursos from './src/screens/Cursos';

const AuthStack = createStackNavigator();

export default function Stack(){
  return (

    <NavigationContainer>
    <AuthStack.Navigator
      header = 'none'
    >
      <AuthStack.Screen name = 'Login' component={Login} />
      <AuthStack.Screen name = 'Home' component={Home} />
      <AuthStack.Screen name = 'Cursos' component={Cursos} />
    </AuthStack.Navigator>
  </NavigationContainer>
  )
}