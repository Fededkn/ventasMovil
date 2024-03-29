import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../Global/colors'

const AddButton = ({title, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default AddButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secondary,
        with:"70%",
        padddingVertical:8,
        margin:10
    },
    text: {
        color:"white",
        textAlign:"center",
        fontSize:18,
        padding:10,
    }
})