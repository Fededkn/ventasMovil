import { StyleSheet, StatusBar, View, SafeAreaView } from 'react-native';
import Home from './src/Screens/Home';
import ItemListCategories from './src/Screens/ItemListCategories';
import ItemDetail from "./src/Screens/ItemDetail";
import { useEffect, useState } from 'react';
import {useFonts} from 'expo-font';
import { colors } from './src/Global/colors';

const App = () => {

  const [categorySelected,setCategorySelected] = useState("")
  const [productDetailId,setProductDetailId] = useState(0)

  const [fontLoaded] = useFonts({
    
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf"),
    PlayFair:require("./assets/Fonts/PlayfairDisplay-Regular.ttf"),  

  })

  if(!fontLoaded) return null //Evita que la aplicación se renderice hasta que las fuentes se carguen por completo.

  return (
    <>
      <StatusBar
        backgroundColor={colors.primary}
      />
      <SafeAreaView style={styles.container}>
      {categorySelected ?
      productDetailId != 0 ?
          <ItemDetail productDetailId={productDetailId} setProductDetailId={setProductDetailId} />
          :
          <ItemListCategories 
          category={categorySelected} 
          setCategorySelected={setCategorySelected}
          setProductDetailId={setProductDetailId}/> 
      : 
      <Home setCategorySelected={setCategorySelected}/>}
    </SafeAreaView>
    </>
   
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
    width: "100%",
  },

});