import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from "../Global/colors"

//Representa un elemento individual de producto en una lista.

const ProductItem = ({item}) => {
  return (
    <View style={styles.container}>
        <Image 
            style={styles.image}
            resizeMode='cover'
            source={{uri:item.thumbnail}}
        />
        <Text style={styles.text}>{item.title}</Text>
    </View>
  )
}

//ESTILOS

export default ProductItem

const styles = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor: colors.secondary,
        margin:10,
        paddingHorizontal:"10%",
        paddingVertical:10,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
    },
    image:{
        width:70,
        height: 70,
    }
})