import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../Global/colors'
import CardShadows from '../Wrappers/CardShadows'
import { useState } from 'react'
import MessageModal from '../Components/Modal/MessageModal'

const CartItem = ({item, onDelete}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('')

    const handleDelete = () => {
        onDelete(item.id)
        setModalMessage("Producto eliminado")
        setIsModalVisible(true)
      };

  return (
    <CardShadows style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.price}>Cantidad: {item.quantity} Precio $ {item.price}</Text>
            <Pressable onPress={handleDelete}>
            <Entypo name='trash' size={22} color={'black'} />
        </Pressable>
        <MessageModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} message={modalMessage} />
        </View>
    </CardShadows>
  )
}

export default CartItem

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
    title: {
        fontSize: 20,
        color: "black",
    },
    brand: {
        fontSize: 14,
    },
    price: {
        fontSize: 18,
    }
})