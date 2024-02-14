import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { colors } from '../Global/colors';
import { addItem } from '../features/cart/cartSlice';
import MessageModal from '../Components/Modal/MessageModal';

const ItemDetail = ({ route }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.shop.value.productSelected);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleAddToCart = () => {
    dispatch(addItem(product));
    setModalMessage('Producto agregado al carrito');
    setIsModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.headerImage}
        source={{ uri: product.thumbnail }}
        resizeMode="cover"
      />

      <View style={styles.detailsContainer}>

        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.brand}>Marca: {product.brand}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.priceContainer}>   
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.addToCartButtonText}>Agregar al carrito</Text>
          </Pressable>
        </View>

        <View style={styles.stockRatingContainer}>
          <Text style={styles.rating}>Rating: {product.rating}</Text>
          <Text style={styles.stock}>Stock: {product.stock}</Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageGallery}>
        {product.images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.galleryImage} />
        ))}
      </ScrollView>
      <MessageModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} message={modalMessage} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: 250,
    marginBottom: 10,
  },
  detailsContainer: {
    padding: 10,
    alignContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 18,
    marginTop: 18,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width:"100%",
    justifyContent:"space-around",
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  addToCartButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stock: {
    marginBottom: 5,
  },
  brand: {
    marginBottom: 5,
  },
  stockRatingContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
  }, 
  category: {
    marginBottom: 5,
  },
  rating: {
    marginBottom: 5,
  },
  imageGallery: {
    paddingVertical: 10,
  },
  galleryImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default ItemDetail;
