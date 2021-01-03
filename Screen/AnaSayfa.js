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

import Uruncontainer from '../components/uruncontainer';
import { styles } from '../utils/color';


export default function AnaSayfa() {
  return (
    <View style={{ flex: 1,flexWrap:'wrap',flexDirection:'column'}}>
      <View style={styles.sliderboxArea}></View>
      
      
        <Uruncontainer />
        <Uruncontainer />
        <Uruncontainer />
        <Uruncontainer />
        <Uruncontainer />
        

      <View style={styles.sliderboxArea}></View>
      <View style={({ backgroundColor: 'steelblue' }, styles.itemContainer)} />
    </View>
  );
}
