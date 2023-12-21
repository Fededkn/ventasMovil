import {View, Text, FlatList, Pressable, StyleSheet} from "react-native"
import allProducts from "../Data/products.json"
import { useEffect, useState } from 'react';
import { colors } from "../Global/colors";
import Search from "../Components/Search"
import ProductItem from "../Components/ProductItem"

const ItemListCategories = ({navigation, route}) => {

  const { category } = route.params
  const [keyword, setKeyword] = useState("")
  const [products, setProducts] = useState(allProducts)

  useEffect(()=>{

    if(category){
      const productsCategory = allProducts.filter(product => product.category === category)
      const productsFiltered = productsCategory.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    }else{
      const productsFiltered = allProducts.filter(product => product.title.includes(keyword))
    }
  },[keyword])

  return (
    <>
      <Search setKeyword={setKeyword}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductItem item={item} navigation={navigation} route={route} />}
      />
    </>

  )
}

export default ItemListCategories

//ESTILOS

const styles = StyleSheet.create({
  container:{
    width:"100%",
  },
  goBack:{
    backgroundColor: colors.secondary,
    width:"100%",
  }
})