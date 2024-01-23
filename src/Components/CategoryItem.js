import { Pressable, StyleSheet, Text } from 'react-native'
import { colors } from '../Global/colors'
import CardShadows from '../Wrappers/CardShadows'
import { useDispatch } from 'react-redux'
import { setProductsFilteredByCategory } from '../features/shop/shopSlice'

// Muestra una tarjeta por categoría, activa la función setCategorySelected con el nombre de la categoría como argumento (category), lo que permite seleccionar una categoría específica de la lista.

const CategoryItem = ({category, navigation, route}) => {

    const dispatch = useDispatch()

  return (
        <Pressable onPress={()=> {
            dispatch(setProductsFilteredByCategory(category))
            navigation.navigate("Category",{category})}
        }>
            <CardShadows style={styles.container}>   
                <Text style={styles.text}>{category}</Text>
            </CardShadows>
        </Pressable>
  )
}
   
export default CategoryItem

// ESTILOS

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondary,
        padding:20,
        margin:10,
        width:"70%",
        marginHorizontal:"15%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: "5px",
        borderWidth: 1,
    },
    text:{
        fontSize:20,
    }
})