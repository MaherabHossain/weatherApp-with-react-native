// import React from 'react'
// import {View} from 'react-native'
// import Home from './components/Home'

// export default function App(){
//   return(
//     <View>
//       <Home />
//     </View>
//   )
// }
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home'
import Search from './components/Search'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
                return <MaterialCommunityIcons name='weather-lightning' size={size} color={color} />;
            } else if (route.name === 'Settings') {
              return <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#f3f3f3',
          activeBackgroundColor:'#48148f',
          inactiveBackgroundColor:'#5906cc'
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}