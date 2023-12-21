import {View, Text, FlatList, Pressable} from "react-native"
import categories from "../Data/categories.json";

const Home = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({item})=> <Pressable onPress={()=>{navigation.navigate("ItemListCategories",{category:item})}}><Text>{item}</Text></Pressable>}
      />
    </View>
  )
}


export default Home
