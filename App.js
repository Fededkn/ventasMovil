import { StyleSheet, StatusBar, View } from 'react-native';
import Home from './src/Screens/Home';
import ItemListCategories from './src/Screens/ItemListCategories';
import { useState } from 'react';
import {useFonts} from 'expo-font';

const App = () => {

  const [categorySelected,setCategorySelected] = useState("")

  const [fontLoaded] = useFonts({
    
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf"),
    PlayFair:require("./assets/Fonts/PlayfairDisplay-Regular.ttf"),  

  })

  if(!fontLoaded) return null //Evita que la aplicación se renderice hasta que las fuentes se carguen por completo.

  return (
    <View style={styles.container}>
      {categorySelected ? <ItemListCategories category={categorySelected}/> : <Home setCategorySelected={setCategorySelected}/>}
    </View>
  );
}

export default App

//ESTILOS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },

});