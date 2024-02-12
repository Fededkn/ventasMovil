import { colors } from '../Global/colors'
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useSignupMutation } from '../App/services/auth'
import { useDispatch } from 'react-redux'
import { signupSchema } from '../validations/signupSchema'
import { insertSession } from '../database'
import { setUser } from '../features/auth/authSlice'

const Signup = ({navigation}) => {

    const dispatch = useDispatch()
    const [triggerSignup,{data,isSuccess,error,isLoading}] = useSignupMutation()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const [confirmPasswordError,setConfirmPasswordError] = useState("")

    useEffect(()=>{
        if(isSuccess) {
            dispatch(setUser(data))
            insertSession(data)
            .then(result => console.log(result))
            .catch(err => console.log(err))
        }
    },[isSuccess])

    const onSubmit = () => {
        try {
            setPasswordError("")
            setEmailError("")
            setConfirmPasswordError("")
            signupSchema.validateSync({email,password,confirmPassword})
            triggerSignup({email,password})
        } catch (error) {
            switch(error.path){
                case "email":
                    setEmailError(error.message)
                    break
                case "password":
                    setPasswordError(error.message)
                    break
                case "confirmPassword":
                    setConfirmPasswordError(error.message)
                    break
                default:
                    break
            }
        }
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
                    error= {emailError}
                />
                <InputForm 
                    label="Contraseña"
                    value={password}
                    onChangeText={(t)=> setPassword(t)}
                    isSecure = {true}
                    error= {passwordError}
                />
                <InputForm 
                    label="Confirmar contraseña"
                    value={confirmPassword}
                    onChangeText={(t)=> setConfirmPassword(t)}
                    isSecure = {true}
                    error= {confirmPassword}
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