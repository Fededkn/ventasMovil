import { StyleSheet, FlatList, View, Text, Pressable } from 'react-native'
import Header from "../Components/Header"
import Search from "../Components/Search"
import allProducts from "../Data/products.json"
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'

//Muestra una lista de productos filtrada por una categoría recibida en "category" como prop desde App (padre).

const ItemListCategories = ({category, setCategorySelected, setProductDetailId}) => {
  
  const [keyword,setKeyword] = useState("")
  const [products, setProducts] = useState(allProducts)

  useEffect(()=>{

    if(category){
      const productCategory = allProducts.filter(product => product.category === category) // Filtra por categoría
      const productsFiltered = productCategory.filter(product => product.title.includes(keyword)) // Filtra por palabra clave
      setProducts(productsFiltered) // Actualiza los productos filtrados
    }else{
      const productsFiltered = allProducts.filter(product => product.title.includes(keyword)) // Filtra por palabra clave si no hay categoría
      setProducts(productsFiltered) // Actualiza los productos filtrados
    }
  },[keyword]) // Se ejecuta cuando cambia la palabra clave
  
  return (
    <>
      <Header />
      <Search setKeyword={setKeyword}/>
      <Pressable style={styles.goBack} title="atras" onPress={()=>setCategorySelected("")}>
        <Text>Atrás</Text>
      </Pressable>
      <FlatList 
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductItem setProductDetailId={setProductDetailId} item={item}/>}
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