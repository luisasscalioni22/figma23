
import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenCadastro, ScreenLogin } from "../screens";
import { TabNavigation } from './tab.navigation';
import {DrawerNavigation } from './drawer.navigation';
type LoginStackParamList = {
  Login: undefined
  Cadastro: undefined
  Tab: undefined
  Drawer: undefined
  Camera:undefined
};
type LoginScreenNavigation =StackNavigationProp<LoginStackParamList, 'Login'>
export type loginTypes ={
  navigation: LoginScreenNavigation
}

export function LoginNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
  
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastro" component={ScreenCadastro} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      
    </Stack.Navigator>
  );
}