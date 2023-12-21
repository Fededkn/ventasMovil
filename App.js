import {StatusBar} from 'react-native';
import {useFonts} from 'expo-font';
import { colors } from './src/Global/colors';
import Navigator from './src/Navigation/Navigator';

const App = () => {

  const [fontLoaded] = useFonts({
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf"),
    PlayFair:require("./assets/Fonts/PlayfairDisplay-Regular.ttf"),  
  })

  if(!fontLoaded) return null

  return (
    <>
      <StatusBar
        backgroundColor={colors.primary}/>
      <Navigator/>
    </>
  )
}

export default App
