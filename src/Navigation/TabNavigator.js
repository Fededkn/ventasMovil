import { colors } from '../Global/colors';
import { StyleSheet } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'
import TabIcon from '../Components/TabIcon';

import ShopStack from './ShopStack';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack';


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown:false,
                    tabBarStyle: styles.tabBar,
                }}>
                <Tab.Screen 
                    name="ShopStack" 
                    component={ShopStack}
                    options={{
                        tabBarIcon:({focused})=> <TabIcon icon="shop" focused={focused} label="Productos"/>
                    }} 
                    />
                <Tab.Screen 
                    name="CartStack" 
                    component={CartStack} 
                    options={{
                        tabBarIcon:({focused})=> <TabIcon icon="shopping-cart" focused={focused} label="Carrito"/>
                    }}
                    />
                <Tab.Screen 
                    name="OrdersStack" 
                    component={OrdersStack} 
                    options={{
                        tabBarIcon:({focused})=> <TabIcon icon="list" focused={focused} label="Ordenes"/>
                    }}
                    />
            </Tab.Navigator>
    )
}
export default TabNavigator

const styles = StyleSheet.create({
    tabNavigator:{
        height: "20%" ,
    },
    tabBar:{
        backgroundColor: colors.primary,
        position: 'absolute',
        bottom: 20,
        left: 15,
        right: 15,
        bottom: 12,
        borderRadius: 10,
        height: 80,

        shadowColor: "#000",
        shadowOffset: {width: 10, height: 10,},
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
    
        elevation: 4,
    }

})