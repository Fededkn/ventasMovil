import { StyleSheet, FlatList, View, Text } from 'react-native'
import Header from "../Components/Header"
import Search from "../Components/Search"
import allProducts from "../Data/products.json"
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'

//Muestra una lista de productos filtrada por una categoría recibida en "category" como prop desde App (padre).

const ItemListCategories = ({category}) => {
  
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
      <FlatList 
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductItem item={item}/>}
              />
    </>
  )
}

export default ItemListCategories

//ESTILOS

const styles = StyleSheet.create({
  container:{
    width:"100%",
  }
})