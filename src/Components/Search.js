import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native'
import { AntDesign, Entypo } from "@expo/vector-icons"
import { colors } from "../Global/colors"
import { useState } from 'react'

const Search = ({setKeyword}) => {

    // Estado local: input para almacenar el texto ingresado y error para manejar mensajes de error.

    const [input,setInput] = useState("")
    const [error,setError] = useState("")

    // Función para realizar la búsqueda, realiza una validación para verificar si el texto de búsqueda contiene números y muestra un mensaje de error en caso afirmativo.

    const seach = () => {
        const expression = /.*[0-9].*/
        if(expression.test(input)){
            setError("no debe contener numeros")
        }else{
            setKeyword(input)
        }      
    }

    // Función removeItem para limpiar el input y el mensaje de error.

    const removeItem = () =>{
        setInput("")
        setError("")
    }
  return (
    <View>
        <View style={styles.containerInput}>
            <TextInput style={styles.input} placeholder="Buscar" value={input} onChangeText={(t)=> setInput(t)}/>
            <Pressable onPress={seach}>
                <AntDesign name="search1" color="black" size={25} />
            </Pressable>   
            <Pressable onPress={removeItem}>
                <Entypo name="circle-with-cross" color="black" size={25} />
            </Pressable> 
        </View>
        {error ? <Text>{error}</Text> : null}
    </View>
  )
}

export default Search

//ESTILOS

const styles = StyleSheet.create({
    containerInput:{
        width:"90%",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection: "row",
    },
    input:{
      backgroundColor: colors.secondary,
      color: "white",
      borderRadius: 5,
      width: "80%",
      fontSize:20,

    }
})