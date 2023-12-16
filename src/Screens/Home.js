import { StyleSheet } from 'react-native'
import Header from '../Components/Header'
import Categories from '../components/Categories'

//Actúa como la pantalla principal de la aplicación. Header encabezado, Categories muestra categorías disponibles. Recibe setCategorySelected como prop desde App (padre) y la pasa al componente Categories. 

const Home = ({setCategorySelected}) => {
  return (
    <>
      <Header title='Categories'/>
      <Categories setCategorySelected={setCategorySelected}/>
    </>
  )
}

export default Home

//ESTILOS

const styles = StyleSheet.create({

})