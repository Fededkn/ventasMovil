import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  )
}

export default Header

//ESTILOS

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        width: "100%",
        height:80,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:20,
        fontFamily:"Josefin",
    },
})
