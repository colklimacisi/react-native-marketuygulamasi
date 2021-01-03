import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{navigation.name}</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Feed"
        text='fees'
        component={Feed}
        options={{ drawerLabel: 'Meyve,Sebze'}}
        
      />
      <Drawer.Screen
        name="Notifications"
        component={Feed}
        options={{ drawerLabel: 'Et,Balık' }}
      />
      <Drawer.Screen
        name="aa"
        component={Profile}
        options={{ drawerLabel: 'Süt,Kahvaltılık' }}
      />
      <Drawer.Screen
        name="3"
        component={Profile}
        options={{ drawerLabel: 'İçecek' }}
      />
      <Drawer.Screen
        name="4"
        component={Profile}
        options={{ drawerLabel: 'asdasda' }}
      />
    </Drawer.Navigator>
  );
}

export function DrawerNavigation(props) {
  return (
    
      <MyDrawer />
    
  );
}
