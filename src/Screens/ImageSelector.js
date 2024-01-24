import { StyleSheet, Text, View, Image } from 'react-native'
import { useState } from 'react'
import React from 'react'
import AddButton from '../Components/AddButton'
import * as ImagePicker from 'expo-image-picker'
import { usePostProfileImageMutation } from '../App/services/shopServices'
import { useSelector } from 'react-redux'

const ImageSelector = ({navigation}) => {

    const [image,setImage] = useState("")
    const [triggerProfileImage] = usePostProfileImageMutation()

    const localId = useSelector(state => state.auth.value.localId)

    const pickImage = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()

        if(granted){
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4,3],
                quality: 0.3,
                base64:true,
            });

            if (!result.canceled) {
                setImage('data:image/jpeg;base64,' + result.assets[0].base64);
            }
        }
    }

    const confirmImage = () => {
        triggerProfileImage({localId,image})
        navigation.goBack()
    }

  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: image} : require("../../assets/usuario.png")}
        style={styles.image}
        resizeMode='cover'
      />
      <AddButton title="Tomar otra foto" onPress={pickImage}/>
      <AddButton title="Confirmar foto" onPress={confirmImage}/>
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20,
    },
    image:{
        width:200,
        height:200,
    },
})