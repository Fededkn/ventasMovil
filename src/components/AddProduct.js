import {View, TextInput, Button, StyleSheet} from "react-native";

const AddProduct = ({valueTitle,valuePrice,onChangeTitle,onChangePrice,addProduct}) => {
    return <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                value={valueTitle}
                onChangeText={(t)=>onChangeTitle(t)}
                />
                <TextInput 
                    style={styles.input}
                    value={valuePrice}
                    onChangeText={(t)=>onChangePrice(t)}
                />
                <Button title="Agregar" onPress={addProduct}/>
            </View>
            }

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: "row" , 
        justifyContent: "space-around",
        alignSelf: "stretch",
        backgroundColor: "red",
    },
    input:{
        borderWidth:2,
        paddingHorizontal:15,
        paddingVertical: 6,
        fontSize:16,
        color:"#4D4B4C",
        width: 250,
    },
})

export default AddProduct