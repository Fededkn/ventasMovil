import { colors } from '../Global/colors'
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useSignupMutation } from '../App/services/auth'

const Signup = ({navigation}) => {

    const [triggerSignup,{data,isError,isSuccess,error,isLoading}] = useSignupMutation()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    
    useEffect(()=> {
        if(isSuccess) console.log(data)
        if(isError) console.log(error)
    }, [data,isError,isSuccess])

    const onSubmit = () => {
        triggerSignup({email,password})
    }

    return (
        <View>
            <View>
                <Text></Text>
                <InputForm 
                    label="Email"
                    value={email}
                    onChangeText={(t)=> setEmail(t)}
                    isSecure = {false}
                    error= ""
                />
                <InputForm 
                    label="Contraseña"
                    value={password}
                    onChangeText={(t)=> setPassword(t)}
                    isSecure = {true}
                    error= ""
                />
                <InputForm 
                    label="Confirmar contraseña"
                    value={confirmPassword}
                    onChangeText={(t)=> setConfirmPassword(t)}
                    isSecure = {true}
                    error= ""
                />
                <SubmitButton title="Send" onPress={onSubmit}
                />
                <Text>Ya tenes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text>Logearme</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Signup