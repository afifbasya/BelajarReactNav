import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const products = [
    {
        id: 1,
        nama: "Kerudung",
        harga: 50000
    },
    {
        id: 2,
        nama: "Rok",
        harga: 100000
    },
    {
        id: 3,
        nama: "Skincare",
        harga: 140000
    },
    {
        id: 4,
        nama: "Baju",
        harga: 300000
    },
    {
        id: 5,
        nama: "Lipstik",
        harga: 40000
    },
]

export default function Product() {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            {products.map((product) => {
                return (
                    <TouchableOpacity
                        style={styles.product}
                        key={product.id}
                        onPress={() => navigation.navigate('DetailProduct', product)}
                    >
                        <Text>{product.nama}</Text>
                        <Text>Rp. {product.harga}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        marginHorizontal: 30,
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        backgroundColor: 'white'
    }
})