import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import CardShadows from '../Wrappers/CardShadows'

const CategoryItem = ({category}) => {
  return (
        <CardShadows style={styles.container}>
            <Text style={styles.text}>{category}</Text>
        </CardShadows>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondary,
        padding:20,
        margin:10,
        width:"70%",
        marginHorizontal:"15%",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:20,
    }
})