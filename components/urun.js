import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {styles} from '../utils/color'
import Buton from './Buton'
import PushNotification from '../components/PushNotification'
export default function Urun(){
 
  return(
   <View style={styles.item}>
  
          <View style={styles.imageArea}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/ekmek.jpg')}
            />
          </View>
          <View style={styles.taniticitextArea}>
            <Text>ekmek</Text>
          </View>
          <View style={styles.textAreaFiyat}>
            <Text>10tl</Text>
           
          </View>
          <PushNotification style={styles.button}/>
        </View>
        )
}
 
