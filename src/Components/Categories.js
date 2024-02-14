import { StyleSheet, FlatList } from 'react-native'
import CategoryItem from "./CategoryItem"
import { useGetCategoriesQuery } from '../App/services/shopServices'

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

const styles = StyleSheet.create({
    container:{
        width:"100%",
        marginBottom: "20%",
    }
})