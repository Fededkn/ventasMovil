import { StyleSheet, Text, View, Image } from 'react-native'
import AddButton from '../Components/AddButton'
import { useGetProfileImagenQuery, useGetUserLocationQuery } from '../App/services/shopServices'
import { useSelector } from 'react-redux'

const MyProfile = ({navigation}) => {

    const localId = useSelector(state => state.auth.value.localId)
    const {data} = useGetProfileImagenQuery(localId)
    const {data:location} = useGetUserLocationQuery(localId)

  return (
    <View style={styles.container}>
      <Image
        source={data ? {uri:data.image} : require("../../assets/usuario.png")}
        style={styles.image}
        resizeMode='cover'
      />
      <Text>{location?.address}</Text>
      <AddButton title={"Agregar foto de perfil"} onPress={()=> navigation.navigate("ImageSelector")}/>
      <AddButton title={location ? "Cambiar ubicación" : "Agregar ubicación"} onPress={()=> navigation.navigate("LocationSelector")}/>
    </View>
  )
}

export default MyProfile

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