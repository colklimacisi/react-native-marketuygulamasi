import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  Alert,
  TouchableHighlight,
  Button,
  ScrollView,
} from 'react-native';
import Kayıtol from '../Screen/Kayıtol' 
import GirişEkranı from '../Screen/GirişEkranı' 

import { styles } from '../utils/color';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    
      <Stack.Navigator initialRouteName="GirişEkranı">
<Stack.Screen name="GirişEkranı" component={GirişEkranı} />
<Stack.Screen name="xxx" component={Kayıtol} />

</Stack.Navigator>
    
  );
}
