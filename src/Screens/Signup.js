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
    const [triggerSignup,{data,isError,isSuccess,error,isLoading}] = useSignupMutation()
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
        if(isError) console.log(error)
    },[data,isError,isSuccess])

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
        <View style={styles.container}>
            <Text style={styles.title}>Regístrate</Text>

            <InputForm 
                label="Email"
                value={email}
                onChangeText={(t)=> setEmail(t)}
                isSecure = {false}
                error= {emailError}
                style={styles.input}
            />
            <InputForm 
                label="Contraseña"
                value={password}
                onChangeText={(t)=> setPassword(t)}
                isSecure = {true}
                error= {passwordError}
                style={styles.input}
            />
            <InputForm 
                label="Confirmar contraseña"
                value={confirmPassword}
                onChangeText={(t)=> setConfirmPassword(t)}
                isSecure = {true}
                error= {confirmPasswordError}
                style={styles.input}
            />
            <SubmitButton title="Enviar" onPress={onSubmit} />
            <Text style={styles.signupText}>¿Ya tienes una cuenta?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={styles.signupLink}>Inicia sesión aquí</Text>
            </Pressable>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 200,
        marginTop: 90,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%',
        fontSize: 20,
    },
    signupText: {
        marginTop: 60,
        fontSize: 18,
        color: colors.white,
    },
    signupLink: {
        color: colors.blue,
        marginTop: 10,
        fontSize: 18, 
        textDecorationLine: 'underline',
    },
});