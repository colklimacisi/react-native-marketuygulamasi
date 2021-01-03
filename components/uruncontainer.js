import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../utils/color';
import Urun from './urun';
export default function UrunContainer() {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.navigationbar}>
        <Text> platform properties</Text>
      </View>
      <View style={styles.urunContainer}>
        <ScrollView horizontal={true}>
          <Urun style={styles.item} />
          <Urun style={styles.item} />
           <Urun style={styles.item} />
          <Urun style={styles.item} />
          <Urun style={styles.item} />
          <Urun style={styles.item} />
          <Urun style={styles.item} />
          <Urun style={styles.item} />
        
        </ScrollView>
      </View>
    </View>
  );
}
