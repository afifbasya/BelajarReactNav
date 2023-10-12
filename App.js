// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailProduct, Home, Products, Profile } from './pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabBar } from './components'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;

    //     if (route.name === "Home") {
    //       iconName = "home"
    //     } else if (route.name === "Products") {
    //       iconName = "cart"
    //     } else {
    //       iconName = "person"
    //     }

    //     return <Ionicons name={iconName} size={size} color={color} />
    //   },
    //   tabBarActiveTintColor: 'tomato',
    //   tabBarInactiveTintColor: 'gray'
    // })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />

    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='MainTab'
          component={MainTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={({ route }) => ({ title: route.params.nama })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;