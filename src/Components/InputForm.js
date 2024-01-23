import { StyleSheet, View, Text, TextInput } from "react-native";
import { color } from "../Global/colors";

const InputForm = ({label,value,onChangeText,isSecure,error}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isSecure} />
            {error ? <View><Text>{error}</Text></View> : null}
        </View>
    )
}

export default InputForm