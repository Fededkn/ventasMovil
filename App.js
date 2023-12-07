import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal } from 'react-native';
import uuid from 'react-native-uuid'
import ModalDelete from './src/components/ModalDelete';
import AddProduct from './src/components/AddProduct';

const App = () => {

  const [newTitleProduct,setNewTitleProduct] = useState ("")
  const [newPriceProduct, setNewPriceProduct] = useState("")
  const [products,setProducts] = useState([])
  const [productSelected,setProductSelected] = useState({})
  const [modalVisible,setModalVisible] = useState (false)

  const handlerAddProduct = () => {
    const newProduct = {
      id:uuid.v4(),
      title: newTitleProduct,
      price: newPriceProduct,
    }
    setProducts(current => [...current,newProduct])
    setNewTitleProduct("")
    setNewPriceProduct("")
  }

  const handlerModal = (item) => {
    setProductSelected(item)
    setModalVisible(true)
  }

  const handlerDeleteProduct = () => {
    setProducts(current => current.filter(product => product.id !== productSelected.id))
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <AddProduct
        valueTitle={newTitleProduct}
        valuePrice={newPriceProduct}
        onChangeTitle={setNewTitleProduct}
        onChangePrice={setNewPriceProduct}
        addProduct={handlerAddProduct}

      
      />
      <View style={styles.listContainer}>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item})=> <View style={styles.cardContainer}> 
                <Text>{item.title}</Text>
                <Text>{item.price} $</Text>
                <Button title="Eliminar" onPress={() => handlerModal(item)}/>
                </View> }
        />
      </View>
    <ModalDelete
      product = {productSelected}
      visible = {modalVisible}
      onModal = {handlerModal}
      
      
      onDelete = {handlerDeleteProduct}
      

    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: "30px"
  },

  listContainer:{
  width:"100%",
  },
  cardContainer:{
    backgroundColor:"grey",
    flexDirection:"row",
    margin: 20,
    alignItems: "center",
    justifyContent: "space-around",
  }

});

export default App