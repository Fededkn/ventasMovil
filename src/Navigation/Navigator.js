import Home from '../Screens/Home';
import ItemListCategories from '../Screens/ItemListCategories';
import ItemDetail from "../Screens/ItemDetail";
import Header from '../Components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="ItemListCategories" component={ItemListCategories}/>
                <Stack.Screen name="ItemDetail" component={ItemDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigator