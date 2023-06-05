
import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenPerfil, ScreenCamera, ScreenLocation } from "../screens";
import { colors } from '../styles/colors';
import { Ionicons, FontAwesome, Entypo,  } from '@expo/vector-icons';

type TabParamList = {
  Perfil: undefined
  Camera: undefined 
  
};
type TabScreenNavigation =BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes ={
  navigation: TabScreenNavigation
}

export function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: colors.white
      }}
      >
      <Tab.Screen name="Perfil" component={ScreenPerfil}
        options={{
          tabBarIcon: () => (<Ionicons name='person' color={colors.black} size={24}/>)
        }}
      />
      <Tab.Screen name="Camera" component={ScreenCamera}
        options={{
          tabBarIcon: () => (<FontAwesome name="camera" size={24} color={colors.black} />)
        }}
      />
      <Tab.Screen name='Location' component={ScreenLocation}
      options={{
        tabBarIcon:() =>
        <Ionicons name="location-sharp" size={24} color={colors.black} />
      }}/>
    </Tab.Navigator>
  );
}