import React, { useState } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import{DrawerContentScrollView,DrawerItem}
from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper';
import { styles } from '../utils/color';
import Icon from 'react-native-vector-icons/FontAwesome'
import KategoriItem from '../components/KategoriItem'
export default function Sepetim(props){

    return(
        <View style={{flex:1}}>
          
         <Text>Urunara</Text>
         <Text>Urunara</Text>
         <Text>Urunara</Text>
         <Text>Urunara</Text>
         
        </View>
    )  ;
  }