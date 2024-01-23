import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../Screens/Cart'
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import Header from '../Components/Header';

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Signup'
    screenOptions={
        ({route})=>{
            return {
                header : () => <Header title="Bienvenido"/>
            }
        }
    }
>
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Login" component={Login} />
</Stack.Navigator>
  )
}

export default AuthStack