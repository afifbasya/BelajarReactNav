// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Products, Profile } from './pages'
import { Text, View } from 'react-native';


const Stack = createNativeStackNavigator();

// const headerOptions = {
//   headerStyle: {
//     backgroundColor: 'pink'
//   },
//   headerTintColor: 'black',
//   headerTitleStyle: {
//     fontWeight: '300',
//   },
// }

// function HeaderCustom(props) {
//   return (
//     <View>
//       <Text>{props.children}</Text>
//     </View>
//   )
// }

function Notif() {
  return (
    <View>
      <Text>Notif</Text>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'pink'
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Aplikasi Saya",
            headerRight: () => <Notif />
            // ...headerOptions
          }}
        // options={{
        //   headerTitle: (props) => <HeaderCustom {...props} />,
        //   title: "Home Screen",
        // }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Profile Saya",
            // ...headerOptions
          }}
        />
        <Stack.Screen name="Products" component={Products} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;