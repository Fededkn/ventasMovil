import {StatusBar} from 'react-native';
import {useFonts} from 'expo-font';
import { colors } from './src/Global/colors';
import Navigator from './src/Navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/Navigation/TabNavigator';
import { store } from './src/App/store'
import { Provider } from 'react-redux'
import Signup from "./src/Screens/Signup"
import Login from './src/Screens/Login';
import MainNavigator from './src/Navigation/MainNavigator';

const Stack = createNativeStackNavigator()

const App = () => {

  const [fontLoaded] = useFonts({
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf"),
    PlayFair:require("./assets/Fonts/PlayfairDisplay-Regular.ttf"),  
  })

  if(!fontLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  )
}

export default App