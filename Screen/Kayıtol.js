import React from 'react';
import {View,Text,Button,TextInput,Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from '../utils/color';

import * as firebase from "firebase";
CreateUser = (email,password,Spassword,navigation) =>{
  if(password===Spassword)
  {firebase. auth()
    .createUserWithEmailAndPassword(email,password)
    .then(() => {
      console.log('User account created & signed in!');
      navigation.goBack()
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });}
  else{Alert.alert("şifreler aynı değil")}
 }

const Kayıtol = ({navigation}) =>
{
    const [data,setData]=React.useState({
        email:'',
        password:'',
        Secondpassword:'',

    })
    const textInputChage =(val)=>{
      
            setData({
                ...data,
                email:val
            });
        
    }
    const textPasswordChage = (val) =>{
      
        setData({
            ...data,
            password:val
        });
    
}
const secondPasswordChage = (val) =>{
      
    setData({
        ...data,
        Secondpassword:val
    });

}
    return (
        <View style={{justifyContent: 'center',flex:1}}>
          {/*<Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>*/}
          <Text style={styles.textBaşlık}>Email</Text>
          <View style={{flexDirection:'row'}}><Icon name="user-o"size={20} style={{alignSelf:'center'}}/>
            <TextInput style={styles.textInput} onChangeText={(val)=>{textInputChage(val)}} placeholder="email"/></View>
          
            <Text style={styles.textBaşlık}>password</Text>
          <View style={{flexDirection:'row'}}><Icon name="lock"size={20}style={{alignSelf:'center'}}/>
            <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={(val)=>{textPasswordChage(val)}} placeholder="password"/></View>
            <Text style={styles.textBaşlık}>password onay</Text>

          <View style={{flexDirection:'row'}}><Icon name="lock"size={20}style={{alignSelf:'center'}}/>
            <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={(val)=>{secondPasswordChage(val)}} placeholder="password"/></View>
          <Button title="Kayıt Ol" onPress={() =>CreateUser(data.email,data.password,data.Secondpassword,navigation)} />
          
        </View>
      );
};
export default Kayıtol;