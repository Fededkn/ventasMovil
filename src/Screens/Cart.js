import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrdersMutation } from '../App/services/shopServices'

const Cart = () => {

    const cart = useSelector(state => state.cart.value)

    const [triggerPostOrder] = usePostOrdersMutation()

  return (
    <View style={styles.container}>
        <FlatList 
            data={cart.items}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable onPress={()=> triggerPostOrder(cart)}>
                <Text style={styles.confirmText}>Confirmar</Text>
            </Pressable>
            <Text style={styles.totalText}>Total: $ {cart.total}</Text>
        </View>
    </View>
      )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 100,
    },
    confirmContainer:{
        backgroundColor: "#999999",
        padding: 18,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    confirmText: {
        fontSize: "20px",
    },
    totalText: {
        fontSize: "20px",
    },
})