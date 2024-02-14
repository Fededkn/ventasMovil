import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import CartItem from '../Components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { usePostOrdersMutation } from '../App/services/shopServices'
import React, { useState } from 'react'
import MessageModal from '../Components/Modal/MessageModal'
import { removeItem } from '../features/cart/cartSlice'

const Cart = () => {

    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    const localId = useSelector(state => state.auth.value.localId)
    const cart = useSelector(state => state.cart.value)
    
    const [triggerPostOrder,data,isSuccess,isError,error] = usePostOrdersMutation()

    const handleConfirmOrder = () => {
        triggerPostOrder({ localId, order: cart });
        setModalMessage("Orden cargada satisfactoriamente")
        setIsModalVisible(true);
      };

      const handleDeleteItem = (productId) => {
        dispatch(removeItem(productId));
      };
    

  return (
    <View style={styles.container}>
        <FlatList 
            data={cart.items}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CartItem item={item} onDelete={handleDeleteItem}/>}
        />
        <View style={styles.confirmContainer}>
            {/* <Pressable onPress={()=> triggerPostOrder({ localId, order: cart })}> */}
            <Pressable onPress={handleConfirmOrder}>
                <Text style={styles.confirmText}>Confirmar</Text>
            </Pressable>
            <Text style={styles.totalText}>Total: $ {cart.total}</Text>
            <MessageModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} message={modalMessage} />
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
        fontSize: 20,
    },
    totalText: {
        fontSize: 20,
    },
})