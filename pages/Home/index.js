import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, View, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function Terbaru() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Terbaru</Text>
        </View>
    )
}

function Populer() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Populer</Text>
        </View>
    )
}

export default function Home() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#6C53AD",
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                    fontWeight: 'bold'
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#6C53AD'
                }
            }}
        >
            <Tab.Screen name="Terbaru" component={Terbaru} />
            <Tab.Screen name="Populer" component={Populer} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})