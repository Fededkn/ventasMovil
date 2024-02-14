import { StyleSheet, View, Text, TextInput } from "react-native";
import { colors } from "../Global/colors";

const InputForm = ({label,value,onChangeText,isSecure,error}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.textInput} value={value} onChangeText={onChangeText} secureTextEntry={isSecure} />
            {error ? <View><Text>{error}</Text></View> : null}
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    container:{
        marginTop:35,
    },
    label:{
          fontSize: 18,
          marginBottom: 15,
    },
    textInput:{
        backgroundColor: colors.secondary,
        height: 40,
        width: 300,
        fontSize: 18,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "grey",

    }
})