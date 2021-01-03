import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import AnaSayfa from '../Screen/AnaSayfa';
import SupportScreen from '../Screen/SupportScreen';
import KategoriItem from '../components/KategoriItem';
import Kategoriler from '../Screen/SupportScreen';

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{navigation.name}</Text>
    </View>
  );
}




const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="SupportScreen">
      <Drawer.Screen
        name="Feed"
        text='fees'
        component={AnaSayfa}
        options={{ drawerLabel: 'Feed,Sebze'}}
        
      />
      <Drawer.Screen
        name="SupportScreen"
        component={SupportScreen}
        options={{ drawerLabel: 'Et,Balık' }}
      />
      <Drawer.Screen
        name="KategoriItem"
        component={KategoriItem}
        options={{ drawerLabel: 'Et,Balık' }}
      />
      <Drawer.Screen
        name="Kategoriler"
        component={Kategoriler}
        options={{ drawerLabel: 'Et,Balık' }}
      />
    </Drawer.Navigator>
  );
}

export default function DrawerNavigation(props) {
  return (
    
      <MyDrawer />
    
  );
}
