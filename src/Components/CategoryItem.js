import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import CardShadows from '../Wrappers/CardShadows'
import { useDispatch } from 'react-redux'
import { setProductsFilteredByCategory } from '../features/shop/shopSlice'

const CategoryItem = ({category, navigation, route}) => {

    const dispatch = useDispatch()

  return (
        <View> 
            <Pressable onPress={()=> {
            dispatch(setProductsFilteredByCategory(category))
            navigation.navigate("Category",{category})}}>
                <CardShadows style={styles.containerCard}>   
                    <Text style={styles.text}>{category}</Text>
                </CardShadows>
            </Pressable>
        </View>
        
  )
}
   
export default CategoryItem

const styles = StyleSheet.create({
    containerCard:{
        backgroundColor: colors.secondary,
        padding:20,
        margin:10,
        width:"70%",
        marginHorizontal:"15%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 5,
        borderWidth: 1,
    },
    text:{
        fontSize:20,
    }
})