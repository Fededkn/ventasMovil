import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { useState } from 'react';
import AuthStack from './authStack';
import { useSelector } from 'react-redux';

const MainNavigator = () => {

    const idToken = useSelector(state => state.auth.value.idToken)

  return (
    <NavigationContainer style={styles.tabNavigator}>
        {idToken ? <TabNavigator/> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({
    tabNavigator:{
        height: "20%" ,
    },
})