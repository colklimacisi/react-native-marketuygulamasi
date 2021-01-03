import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {styles} from '../utils/color'
import Buton from './Buton'
export default function Urun(){
 
  return(
   <View style={styles.item}>
  
          <View style={styles.imageArea}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/img/anan.png')}
            />
          </View>
          <View style={styles.taniticitextArea}>
            <Text>eppekwsbdwqebkhveakjnfvajksnvfajkfsdjklvnsdlvsdfv</Text>
          </View>
          <View style={styles.textAreaFiyat}>
            <Text>eppekskdjşngkjsdhnıogsdmfvsdnfjksfnvsdjknvjkşsd</Text>
           
          </View>
        <Buton/>
        </View>
        )
}
 
