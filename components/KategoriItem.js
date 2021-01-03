import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../utils/color';
import Icon from 'react-native-vector-icons/FontAwesome'

import{DrawerItem}
from '@react-navigation/drawer'
export default function KategoriItem(props){
  
    const Label=props.text
    return(
        <DrawerItem onPress={()=>{props.navigation.navigate('Root', {
          screen: 'SupportScreen',
          params: { Label: Label },
        })}}label={props.text} icon={() => (<Icon name ="plus" style={styles.Icon} />)} />
        

          )
  }
   