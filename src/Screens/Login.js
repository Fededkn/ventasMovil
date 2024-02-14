import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { colors } from "../Global/colors";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton"; 
import { useLoginMutation } from "../App/services/auth"
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { insertSession } from "../database";

const Login = ({navigation}) => {

    const dispatch = useDispatch()
    const [triggerLogin,{data,isError,isSuccess,error,isLoading}] = useLoginMutation()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    //SQL

    useEffect(()=> {
        if(isSuccess) {
            dispatch(setUser(data))
            insertSession(data)
                .then(()=> console.log(result))
                .catch(err => console.log(err))
        }
        if(isError) console.log(error)
    }, [data,isError,isSuccess])

    //SQL

    const onSubmit = () => {
        triggerLogin({email,password})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar sesión</Text>
            <View>
            <InputForm 
                label="Email"
                value={email}
                onChangeText={(t)=> setEmail(t)}
                isSecure = {false}
                style={styles.input}
             />
            </View>
            
            <InputForm 
                label="Contraseña"
                value={password}
                onChangeText={(t)=> setPassword(t)}
                isSecure = {true}
                style={styles.input}
            />
            <SubmitButton onPress={onSubmit} title="Enviar" />
            <Text style={styles.signupText}>¿No tienes una cuenta?</Text>
            <Pressable onPress={()=> navigation.navigate("Signup")}>
                <Text style={styles.signupLink}>Regístrate aquí</Text>
            </Pressable>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 200,
    },
    input: {
        height: "100%",
        fontSize:30,
    }, 
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: colors.white,
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