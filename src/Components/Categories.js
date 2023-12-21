import { StyleSheet, FlatList } from 'react-native'
import categories from '../Data/categories.json'
import CategoryItem from "./CategoryItem"

//Muestra una lista de categorías desde un archivo JSON y utiliza FlatList para mostrar cada una de estas categorías como elementos de la lista. Para cada elemento de la lista, utiliza el componente CategoryItem, al que le pasa la función setCategorySelected como prop.

const Categories = ({navigation, route}) => {
  return (
    <FlatList
        style={styles.container}
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoryItem category={item} navigation={navigation} route={route}/>}
    />
  )
}

export default Categories

// ESTILOS

const styles = StyleSheet.create({
    container:{
        width:"100%",
    }
})