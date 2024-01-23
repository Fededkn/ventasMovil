import { StyleSheet, Pressable, Text } from "react-native";
import { colors } from "../Global/colors";

const SubmitButton = ({title,onPress}) => {
    return (
        <Pressable onPress={onPress}>
            <Text>{title}</Text>
        </Pressable>
    )
}

export default SubmitButton