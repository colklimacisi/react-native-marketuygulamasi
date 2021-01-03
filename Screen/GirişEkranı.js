import React from 'react';
import { View, Text, Button, TextInput } from 'react-native'
import { styles } from '../utils/color';
import Icon from 'react-native-vector-icons/FontAwesome'

import * as firebase from "firebase";

Login = (email,password, navigation ) => {firebase.auth()
    .signInWithEmailAndPassword(email,password)
    .then(() => {
      console.log('User account created & signed in!');
      navigation.navigate('QQQ');
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
  
const GirişEkranı = ({ navigation }) => {
    const [data, setData] = React.useState({
        email: '',
        password: '',

    })
    const textInputChage = (val) => {

        setData({
            ...data,
            email: val
        });

    }
    const textPasswordChage = (val) => {

        setData({
            ...data,
            password: val
        });

    }
    return (

        <View style={{ flex: 1, justifyContent: 'center' }}>


            <View>
                <Text style={styles.textBaşlık}>Email</Text>
                <View style={{ flexDirection: 'row' }}><Icon name="user-o" size={20} style={{ alignSelf: 'center' }} />
                    <TextInput style={styles.textInput} onChangeText={(val) => { textInputChage(val) }} placeholder="email" /></View>

                <Text style={styles.textBaşlık}>password</Text>
                <View style={{ flexDirection: 'row' }}><Icon name="lock" size={20} style={{ alignSelf: 'center' }} />
                    <TextInput style={styles.textInput} onChangeText={(val) => { textPasswordChage(val) }} secureTextEntry={true} placeholder="password" /></View>
                    
                    <Button
        title="GirişYap"
        onPress={() =>  Login(data.email,data.password,navigation)
          
        }
      />
                    </View>

            <Text style={styles.textBaşlık}>Yoksa Kayıtlı değilmisiniz</Text>
            <Button
                title="Kayıt ol"
                onPress={() => {

                    navigation.push('xxx');
                }}
            />
        </View>
    );

}
export default GirişEkranı;