import React from 'react';
import {View} from 'react-native';
import{DrawerContentScrollView}
from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper';
import KategoriItem from '../components/KategoriItem'
export function Kategoriler(props){

  return(
      <View style={{flex:1}}>
          <DrawerContentScrollView {...props}>
          <Drawer.Section>
              <KategoriItem {...props}text={'Meyve,Sebze'}/>
              <KategoriItem {...props}text={'Süt,Kahvaltılık'}/>
              <KategoriItem {...props}text={'Gıda,Şekerleme'}/>
              <KategoriItem {...props}text={'İçecek'}/>
              <KategoriItem {...props}text={'Deterjan,Temizlik'}/>
              <KategoriItem {...props}text={'Kağıt,Kozmetik'}/>
              <KategoriItem {...props}text={'Bebek,Oyuncak'}/>
              <KategoriItem {...props}text={'Ev,Pet'}/>
              <KategoriItem {...props}text={'Elektornik'}/>
              </Drawer.Section>
              
          </DrawerContentScrollView>
          
              
                  
              
          
          
      </View>
  )  ;
}