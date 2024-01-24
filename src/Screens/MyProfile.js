import { StyleSheet, Text, View, Image } from 'react-native'
import AddButton from '../Components/AddButton'
import { useGetProfileImagenQuery } from '../App/services/shopServices'
import { useSelector } from 'react-redux'

const MyProfile = ({navigation}) => {

    const localId = useSelector(state => state.auth.value.localId)
    const {data} = useGetProfileImagenQuery(localId)

  return (
    <View style={styles.container}>
      <Image
        source={data ? {uri:data.image} : require("../../assets/usuario.png")}
        style={styles.image}
        resizeMode='cover'
      />
      <AddButton title={"Agregar foto de perfil"} onPress={()=> navigation.navigate("ImageSelector")}/>
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