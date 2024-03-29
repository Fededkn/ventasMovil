import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native'
import { AntDesign, Entypo } from "@expo/vector-icons"
import { colors } from "../Global/colors"
import { useState } from 'react'

const Search = ({setKeyword}) => {

    const [input,setInput] = useState("")
    const [error,setError] = useState("")

    const seach = () => {
        const expression = /.*[0-9].*/
        if(expression.test(input)){
            setError("no debe contener numeros")
        }else{
            setKeyword(input)
        }      
    }

    const removeItem = () =>{
        setInput("")
        setError("")
    }
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
    container:{
        height: 70,
        justifyContent: 'center',
        alignItems:'center',
    }, 
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
      height:40,
      fontSize:20,

    }
})