import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../Components/Header';

import ImageSelector from '../Screens/ImageSelector';
import MyProfile from '../Screens/MyProfile';


const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='MyProfile'
    screenOptions={
        ({route})=>{
            return {
                header : () => <Header title="Perfil"/>
            }
        }
    }
>
    <Stack.Screen name="MyProfile" component={MyProfile} />
    <Stack.Screen name="ImageSelector" component={ImageSelector} />
</Stack.Navigator>
  )
}

export default ProfileStack