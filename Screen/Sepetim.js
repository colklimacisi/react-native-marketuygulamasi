import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import{DrawerContentScrollView,DrawerItem}
from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper';
import { styles } from '../utils/color';
import Icon from 'react-native-vector-icons/FontAwesome'
import KategoriItem from '../components/KategoriItem'
import { useLinkProps } from '@react-navigation/native';
export default function Sepetim(props){
  
  const Label= () => {
    if(props.route.params.Label)
    {return <Text>{props.route.params.Label}</Text>}
    else
    {return null;}
    
  }
  return(
      <View style={{flex:1}}>
        
        <Text>Sepetim</Text>
        <Text>Sepetim</Text>
        
        <Label/>
       
        <Text>Sepetim</Text>
        <Text>Sepetim</Text>
       
      </View>
  )  ;
}