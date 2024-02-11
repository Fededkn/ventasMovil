import {StatusBar} from 'react-native';
import {useFonts} from 'expo-font';
import { colors } from './src/Global/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './src/App/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/Navigation/MainNavigator';
import { init } from './src/database';

//SQL

init()
  .then(()=> console.log("DB"))
  .catch(error => console.log(error))

//SQL

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
