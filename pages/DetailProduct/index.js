import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DetailProduct({ route }) {
    const product = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product.nama}</Text>
            <Text>Harga : Rp. {product.harga}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
})