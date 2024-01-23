import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { colors } from "../Global/colors";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton"; 
import { useLoginMutation } from "../App/services/auth"

const Login = ({navigation}) => {

    const [triggerLogin,{data,isError,isSuccess,error,isLoading}] = useLoginMutation()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    useEffect(()=> {
        if(isSuccess) console.log(data)
        if(isError) console.log(error)
    }, [data,isError,isSuccess])

    const onSubmit = () => {
        triggerLogin({email,password})
    }

    return (
        <View>
            <View>
                <Text>Iniciar sesión</Text>
                <InputForm 
                    label="Email"
                    value={email}
                    onChangeText={(t)=> setEmail(t)}
                    isSecure = {false}
                    error= "asd"
                />
                <InputForm 
                    label="Contraseña"
                    value={password}
                    onChangeText={(t)=> setPassword(t)}
                    isSecure = {true}
                    error= "asd"
                />
                <SubmitButton onPress={onSubmit} title="Enviar" />
                <Text>No tenes un cuenta?</Text>
                <Pressable onPress={()=> navigation.navigate("Signup")}>
                    <Text>Signup</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login














