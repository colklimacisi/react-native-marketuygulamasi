import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import{DrawerContentScrollView,DrawerItem}
from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper';
import { styles } from '../utils/color';
import Icon from 'react-native-vector-icons/FontAwesome'
import KategoriItem from '../components/KategoriItem'
import { useLinkProps } from '@react-navigation/native';
export default function SupportScreen(props){
  
  const Label= () => {
    if(props.route.params)
    {return <Text>{props.route.params.Label}</Text>}
    else
    {return null;}
    
  }
  return(
      <View style={{flex:1}}>
         <Button
                title="Geridön"
                
                onPress={() => {

                    props.navigation.goBack();
                }}
            />
        <Text>Sepetim</Text>
        <Text>Sepetim</Text>
        
        <Label/>
       
        <Text>Sepetim</Text>
        <Text>Sepetim</Text>
       
      </View>
  )  ;
}