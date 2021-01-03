
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AnaSayfa from '../Screen/AnaSayfa';
import Sepetim from '../Screen/Sepetim';
import Kampanyalar from '../Screen/Kampanyalar';
import UrunAra from '../Screen/UrunAra';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

const BottomTabNavigator = () =>{
  return(
    <Tab.Navigator
          initialRouteName="Anasayfa"
          activeColor="#e91e63"
          style={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Anasayfa"
            component={AnaSayfa}
            options={{
              tabBarLabel: 'AnaSayfa',
              tabBarIcon: ({ color }) => (
                <FontAwesome name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Kampanyalar"
            component={Kampanyalar}
            options={{
              tabBarLabel: 'Kampanyalar',
              tabBarIcon: ({ color }) => (
                <FontAwesome name="bullhorn" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="UrunAra"
            component={UrunAra}
            options={{
              tabBarLabel: 'Ürün Ara',
              tabBarIcon: ({ color }) => (
                <FontAwesome name="search" color={color} size={26} />
              ),
            }}
          />
            <Tab.Screen
            name="Sepetim"
            component={Sepetim}
            options={{
              tabBarLabel: 'Sepetim',
              tabBarIcon: ({ color }) => (
                <FontAwesome name="shopping-cart" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
  )
        }


export default BottomTabNavigator;