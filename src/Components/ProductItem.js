import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native'
import { colors } from "../Global/colors"
import { useDispatch } from 'react-redux'
import { setProductSelected } from '../features/shop/shopSlice'

const ProductItem = ({item, navigation, route}) => {

    const {width} = useWindowDimensions()
    const dispatch = useDispatch()
    
return (
    <View style={styles.container}>
        <Pressable
        style={[styles.cardContainer,{ width: width * 0.9 }]}
        onPress={() => {
            dispatch(setProductSelected(item.id));
            navigation.navigate("Product", {id: item.id});
        }}
    >
        <Image 
            style={styles.image}
            resizeMode='cover'
            source={{uri: item.thumbnail}}
        />
        <Text style={styles.title}>{item.title}</Text>
    </Pressable>
    </View>
);
};

export default ProductItem

const styles = StyleSheet.create({
    container:{
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer:{
        backgroundColor: colors.secondary,
        borderWidth:1,
        borderRadius:5,
    },
    image:{
        width: '100%',
        height: 200,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    title:{
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
});