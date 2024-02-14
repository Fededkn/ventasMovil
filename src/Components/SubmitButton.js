import { StyleSheet, Pressable, Text } from "react-native";
import { colors } from "../Global/colors";

const SubmitButton = ({title,onPress}) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        paddingLeft:40,
        paddingRight:40,
        paddingTop:12,
        paddingBottom:12,
        marginTop:40,
    }, 
    title:{
        fontSize: 18,
        color: "white",
    }, 
})