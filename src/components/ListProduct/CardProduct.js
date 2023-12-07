import {View, Text, Button, StyleSheet} from "react-native"

const CardProduct = ({item,onModal}) => {
    return <View style={styles.cardContainer}> 
    <Text>{item.title}</Text>
    <Text>{item.price} $</Text>
    <Button title="Eliminar" onPress={() => onModal(item)}/>
    </View>
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:"grey",
        flexDirection:"row",
        margin: 20,
        alignItems: "center",
        justifyContent: "space-around",
    }
})

export default CardProduct