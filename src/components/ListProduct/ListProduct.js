import {View, FlatList, StyleSheet} from "react-native"
import CardProduct from "./CardProduct"

const ListProduct = ({products,onModal}) => {

    return <View style={styles.listContainer}>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({item})=> <CardProduct item={item} onModal={onModal}/> }
            />
            </View>
}

const styles = StyleSheet.create({
    listContainer:{
        // backgroundColor: "blue",
        width:"100%",
        },
})

export default ListProduct