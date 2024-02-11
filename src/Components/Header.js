import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { deleteSession } from '../database'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../features/auth/authSlice'

import * as authSlice from '../features/auth/authSlice';


const Header = ({title = "Producto"}) => {

  const dispatch = useDispatch()
  const localId = useSelector(state => state.auth.value.localId)

  const onLogout = () =>{
    deleteSession()
    dispatch(authSlice.clearUser())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {localId && <Pressable style={styles.logoutButton} onPress={onLogout}>
                  <MaterialCommunityIcons name='logout' size={25} color={"white"} />
                  </Pressable>
      }
    </View>
  )
}

export default Header

//ESTILOS

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        width: "100%",
        height:80,
        justifyContent:"center",
        alignItems:"center",
        marginTop:30,
        marginRight:60,
    },
    text:{
        fontSize:20,
        fontFamily:"Josefin",
        color: "white",
    },
    logoutButton:{
      position: "absolute",
      right: 10,
    },
})