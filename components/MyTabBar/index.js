import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
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

export default function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.menu}
                        key={index}
                    >
                        <Icon name={route.name} isFocused={isFocused} />
                        <Text style={styles.label(isFocused)}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 30,
        marginBottom: 30,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10
    },
    menu: {
        flex: 1,
        alignItems: 'center'
    },
    label: (isFocused) => ({
        color: isFocused ? '#673ab7' : 'gray',
        fontWeight: isFocused ? 'bold' : 'normal',
    })
})