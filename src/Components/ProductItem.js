import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native'
import { colors } from "../Global/colors"
import { useDispatch } from 'react-redux'
import { setProductSelected } from '../features/shop/shopSlice'

//Representa un elemento individual de producto en una lista.

const ProductItem = ({item, navigation, route}) => {

    const {width} = useWindowDimensions()
    const dispatch = useDispatch()
    
    return (
        <Pressable style={styles.container} onPress={()=>{
            dispatch(setProductSelected(item.id))
            navigation.navigate("Product", {id:item.id})

            }}>
            <Text style={width < 350 ? styles.textMin : styles.text}>{item.title}</Text>
            <Image 
                style={styles.image}
                resizeMode='cover'
                source={{uri:item.thumbnail}}
            />
        </Pressable>
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
        justifyContent:"space-between",
    },
    image:{
        minWidth: 90,
        maxWidth: 90,
        height: 90,
        width:"30%",
    },
    text:{
        width: "60%",
        fontSize: 20,
    },
        textMin:{
            fontSize: 15,
        }
})