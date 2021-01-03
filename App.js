import React ,{useEffect,useState}from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator'
import KategoriItem from './components/KategoriItem'
import SupportScreen from './Screen/SupportScreen'
import {Kategoriler }from './Screen/Kategoriler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as firebase from "firebase";
import StackNavigator from './navigation/StackNavigator'
import { LogBox } from 'react-native';
const Stack = createStackNavigator();
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
  
  LogBox.ignoreAllLogs()
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
      <Drawer.Navigator drawerContent={props => <Kategoriler {...props} />} initialRouteName="Home">
      <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="QQQ" component={BottomTabNavigator} />
        <Drawer.Screen name="Root" component={Root} />
       
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="KategoriItem" component={KategoriItem} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
    </Stack.Navigator>
  );
}
  
