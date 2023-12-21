import { StyleSheet, StatusBar, View, SafeAreaView } from 'react-native';
import Home from './src/Screens/Home';
import ItemListCategories from './src/Screens/ItemListCategories';
import ItemDetail from "./src/Screens/ItemDetail";
import { useEffect, useState } from 'react';
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

//ESTILOS

