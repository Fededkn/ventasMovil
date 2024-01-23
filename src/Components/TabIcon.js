import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'


const TabIcon = ({icon, label, focused}) => {
  return (
    <View style={styles.container}> 
        <Entypo name={icon} size={30} color={focused ? "white" : "#444444"}/>
        <Text style={{...styles.textIcon,...{color:focused ? "white" : "#444444"}}}>{label}</Text>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    textIcon:{
        color:"white",
        textAlign:"center",

    },
})