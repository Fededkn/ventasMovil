import { StyleSheet, Text, View } from 'react-native'

//Vista de los detalles de un artículo.

const ItemDetails = () => {
  return (
    <View style={styles.container}>
      <Text>ItemDetails</Text>
    </View>
  )
}

export default ItemDetails

//ESTILOS

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        alignItems:"center",
        justifyContent:"start",
    }
})