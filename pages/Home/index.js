import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity style={{ marginTop: 10, backgroundColor: 'pink', padding: 10 }} onPress={() => navigation.navigate('Profile')}>
                <Text>Go to Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 10, backgroundColor: 'pink', padding: 10 }} onPress={() => navigation.navigate('Products')}>
                <Text>Go to Products</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})