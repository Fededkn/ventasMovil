import {View, Text, FlatList, Pressable, StyleSheet} from "react-native"
import allProducts from "../Data/products.json"
import { useEffect, useState } from 'react';
import { colors } from "../Global/colors";

const ItemListCategories = ({navigation, route}) => {

  const { category } = route.params
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const productsFilted= allProducts.filter(product => product.category === category)
    setProducts(productsFilted)
  },[category])

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={item=> item.id}
        renderItem={({item}) => <Pressable onPress={()=> {navigation.navigate("ItemDetail",{id:item.id})}}><Text>{item.title}</Text></Pressable>}
      />
    </View>
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