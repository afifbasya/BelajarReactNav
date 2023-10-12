import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from "@expo/vector-icons/Ionicons"

function Icon({ name, isFocused }) {
    let iconName

    if (name === "Home") {
        iconName = isFocused ? "home" : "home-outline"
    } else if (name === "Products") {
        iconName = isFocused ? "cart" : "cart-outline"
    } else {
        iconName = isFocused ? "person" : "person-outline"
    }


    return (
        <Ionicons name={iconName} size={25} color={isFocused ? '#673ab7' : 'gray'} />
    )
}

function ItemMenu({ item }) {
    const focused = item.navigation.isFocused();
    return (
        <TouchableOpacity
            style={styles.item(focused)}
            onPress={() => item.navigation.navigate(item.route.name)}
        >
            <Icon name={item.route.name} isFocused={focused} />
            <Text style={styles.text(focused)}>{item.options.title ? item.options.title : item.route.name}</Text>
        </TouchableOpacity>
    )
}

export default function CustomDrawerContent(props) {
    const listMenu = Object.values(props.descriptors)

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.logo}>
                <Ionicons name="basketball" size={60} color="#6C53AD" />
                <Text style={styles.title}>Aplikasi Saya</Text>
            </View>
            {listMenu.map((item, index) => {
                return <ItemMenu item={item} key={index} />
            })}
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    item: (focused) => ({
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: focused ? '#F0EDF7' : '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }),
    text: (focused) => ({
        fontSize: 15,
        fontWeight: focused ? 'bold' : 'normal',
        color: focused ? '#6C53AD' : 'black'
    }),
    logo: {
        alignItems: 'center',
        marginVertical: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#6C53AD'
    }
})