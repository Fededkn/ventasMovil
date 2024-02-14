import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { useEffect } from 'react';
import AuthStack from './AuthStack';
import { useSelector, useDispatch } from 'react-redux';
import { fechSession } from '../database'

const MainNavigator = () => {

    const dispatch = useDispatch()

    const idToken = useSelector(state => state.auth.value.idToken)

    //SQL

    useEffect(()=>{
      (async ()=> {
        try {
          const session = await fechSession()
          if(session.rows.length){
            const user = session.rows._array[0]
            dispatch(setUser(user))
          }
        } catch (error) {
          console.log(error)
        }
      })()
    },[])

    //SQL

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