import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '../Global/colors'

const OrderItem = ({order}) => {

    const total = order.items.reduce((acc,product)=> acc + (product.price *product.quantity),0)

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.date}>Fecha: {new Date(order.createdAt).toLocaleString()}</Text>
        <Text style={styles.total}>Total: $ {total}</Text>
      </View>
      <Feather name='search' size={25} color={"black"}/>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        marginTop: 15,
        marginRight: 20,
        marginBottom: 15,
        marginLeft: 20,
        padding: 15,
        height: 100,
        justifyContent: "space-between",
        flexDirection:"row",
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 1,
    },
    textContainer: {
        width: "70",
        gap: 4,
    },
    date: {
        fontSize: 15,
        color: "black",
    },
    total: {
        fontSize: 18,
        fontWeight: "500",
    },

})