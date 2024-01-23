import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { useState } from 'react';
import AuthStack from './authStack';

const MainNavigator = () => {

    const [usuario, setUsuario] = useState("")
  return (
    <NavigationContainer style={styles.tabNavigator}>
        {usuario ? <TabNavigator/> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({
    tabNavigator:{
        height: "20%" ,
    },
})