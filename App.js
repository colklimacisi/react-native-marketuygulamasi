import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './navigation/DrawerNavigation'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator'
import Stacknavigator from './navigation/StackNavigator'
import Kategoriler from './Screen/Kategoriler'
import * as firebase from "firebase";
const Drawer = createDrawerNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyCz5g9KK1_CNTZFfO6M8iDe8J7o21Y825o",
  authDomain: "mobiluygulama-fcc12.firebaseapp.com",
  projectId: "mobiluygulama-fcc12",
  storageBucket: "mobiluygulama-fcc12.appspot.com",
  messagingSenderId: "914338206927",
  appId: "1:914338206927:web:d656d0b26462a89e0fd3ba"}
  if(firebase.apps.length===0)
  {firebase.initializeApp(firebaseConfig);}
  
 
  
  
export default function App() {
  const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
   
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; 
    }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props=> <Kategoriler{...props} />}initialRouteName="Home">
        <Drawer.Screen name="Home" component={Stacknavigator} />
        <Drawer.Screen name="Notifications" component={DrawerNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


  
