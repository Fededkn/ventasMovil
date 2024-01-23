import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../Screens/Cart'
import Header from '../Components/Header';


const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Cart'
    screenOptions={
        ({route})=>{
            return {
                header : () => <Header title="Carrito"/>
            }
        }
    }
>
    <Stack.Screen name="Cart" component={Cart} />
</Stack.Navigator>
  )
}

export default CartStack