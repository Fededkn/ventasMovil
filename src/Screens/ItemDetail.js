import {View, Text, Image, StyleSheet} from "react-native"
import { useEffect, useState } from 'react';
import { colors } from "../Global/colors"
import { Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const ItemDetail = ({route}) => {

  const dispatch = useDispatch()
  const product = useSelector((state)=> state.shop.value.productSelected)
  // const images = product.images ? product.images : []


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri:product.thumbnail}}
        resizeMode='cover'
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      <View style={styles.containerPrice}>
        <Text style={styles.price}>$ {product.price}</Text>
        <Pressable style={styles.buyNow} onPress={()=> dispatch(addItem(product))}> 
          <Text style={styles.buyNowText}>Agregar!</Text>
        </Pressable>
      </View>
      
    </View>
  )
}

export default ItemDetail


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    alignItems: 'center',
    justifyContent: 'start',
    // backgroundColor: colors.secondary,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  goBack:{
    backgroundColor: colors.secondary,
    width:"100%",
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
  },
  containerText:{
    gap: 15,
    paddingHorizontal: 5,
    paddingVertical:15, 
  },
  containerPrice:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  price:{
    fontSize: 24,
  },
  buyNow:{
    backgroundColor:colors.primary,
    padding: 5,
  },
  buyNowText:{
    color:"white",
  }
});