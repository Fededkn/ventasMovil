import { StyleSheet, FlatList } from 'react-native'
import CategoryItem from "./CategoryItem"
import { useGetCategoriesQuery } from '../App/services/shopServices'

//Muestra una lista de categorías desde un archivo JSON y utiliza FlatList para mostrar cada una de estas categorías como elementos de la lista. Para cada elemento de la lista, utiliza el componente CategoryItem, al que le pasa la función setCategorySelected como prop.

const Categories = ({navigation, route}) => {

  const {data:categories} = useGetCategoriesQuery()

  return (
    <FlatList
        style={styles.container}
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <CategoryItem category={item} navigation={navigation} route={route} />}
    />
  )
}

export default Categories

// ESTILOS

const styles = StyleSheet.create({
    container:{
        width:"100%",
        marginBottom: "20%",
    }
})