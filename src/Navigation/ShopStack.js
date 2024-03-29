import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemListCategories from '../Screens/ItemListCategories'
import ItemDetail from '../Screens/ItemDetail'
import Header from '../Components/Header';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={
        ({route})=>{
            return {
                header : () => <Header title={
                    route.name === "Home" ? "Categorias" :
                    route.name === "Category" ? route.params.category :
                    "Detalle del producto" 
                }/>
            }
        }
    }
>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Category" component={ItemListCategories} />
    <Stack.Screen name="Product" component={ItemDetail} />
</Stack.Navigator>
  )
}

export default ShopStack