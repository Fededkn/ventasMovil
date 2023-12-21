import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { colors } from '../Global/colors';
import allProducts from "../Data/products.json"
import Header from '../Components/Header';

const ItemDetails = ({ productDetailId, setProductDetailId }) => {

  const [product,setProduct] = useState ([]);

  useEffect(()=>{
    const productFinded = allProducts.find(product => product.id === productDetailId)
    setProduct(productFinded)
  },[productDetailId])

  return (
    <View style={styles.container}>
      <Header />
      <Pressable style={styles.goBack} title="atras" onPress={()=>setProductDetailId(0)}>
        <Text>Atrás</Text>
      </Pressable>
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
        <Pressable style={styles.buyNow}> 
          <Text style={styles.buyNowText}>Comprar ahora!</Text>
        </Pressable>
      </View>
      
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    alignItems: 'center',
    justifyContent: 'start',
    backgroundColor: colors.secondary,
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

