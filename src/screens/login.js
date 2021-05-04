import React, { useState,useEffect,useContext } from 'react';
import { View, TextInput, ToastAndroid, StyleSheet,Text,BackgroundImage, ImageBackground, TouchableOpacity
} from 'react-native'
import { Link } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {Context as AuthContext} from '../context/AuthContext'
import api from '../constants/api'
export default function Login ({navigation}) {
  const {signin} = useContext(AuthContext)
  const [selectedValue, setSelectedValue] = useState("grower");
  let [userName, setUserName] = useState('');
  let [userPassword, setPassword] = useState('');
  let [id, setID] = useState('')
  
    let login_user = () => {
    if (userName === '' || userPassword === '') {
        alert('Please enter your username and password!');
        return;
    }
    let formdata = new FormData();
      formdata.append("username",userName);
      formdata.append("password",userPassword);
      try {
        fetch(`${api}/login`, {
          method: 'POST',
          body:formdata
       }).then((response) => response.json())
        .then((json) => {
          if(json.error){
            ToastAndroid.showWithGravityAndOffset(
              "failded with some error",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
          }else{
            try{
              if(json[0].role === selectedValue){
                signin(json[0])
              }else{
                alert("wrong credentials")
              }
          }catch(err){
            ToastAndroid.showWithGravityAndOffset(
              "failded with some error",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
          }
          }
       }).catch((error) =>{
         console.log(error, 'error')
        ToastAndroid.showWithGravityAndOffset(
          "Please Check Your Internet Connection",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
       })
      }catch(err){
        console.log('Error', err);
      }
  }  

  let farmerlogin = () => {
    if(id.length){
      let formdata = new FormData();
      formdata.append("id",id);
      try {
        fetch(`${api}/farmerlogin`, {
          method: 'POST',
          body:formdata
       }).then((response) => response.json())
        .then((json) => {
          if(json.error){
            ToastAndroid.showWithGravityAndOffset(
              "failded with some error",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
          }else{
            try{
              if(json[0].role === selectedValue){
                signin(json[0])
              }else{
                alert("wrong credentials")
              }
          }catch(err){
            ToastAndroid.showWithGravityAndOffset(
              "failded with some error",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
          }
          }
       }).catch((error) =>{
         console.log(error, 'error')
        ToastAndroid.showWithGravityAndOffset(
          "Please Check Your Internet Connection",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
       })
      }catch(err){
        console.log('Error', err);
      }
    }
  }

return(
        <ImageBackground source={require('../assets/Images/pdflowersetproject10-adj-38_2.jpg')} style={styles.container}> 
         <Text> Please Select Account Type</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: "90%" }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Grower" value="grower" />
            <Picker.Item label="Vendor" value="vendor" />
            <Picker.Item label="Soil Health Lab" value="agronomist" />
            <Picker.Item label="Sponsor" value="sponsor" />
            <Picker.Item label="Agronomist" value="agro" />
        </Picker>
        {selectedValue === "grower" || selectedValue === "vendor"?
        <View style={{width:'100%', justifyContent:"center", alignItems:"center"}}>
            <TextInput
              style={styles.input}
              placeholder='Enter Id/'
              value={id}
              autoCapitalize="none"
              onChangeText={
                (userName) => setID(userName)
              }
            />
              <View style={styles.space}/>
            <TouchableOpacity style={styles.loginBtn} onPress={farmerlogin}>
              <Text style={styles.loginText}>LOGIN/لاگ ان کریں</Text>
            </TouchableOpacity>
        </View>
        :
        <View style={{width:'100%', justifyContent:"center", alignItems:"center"}}>
            <TextInput
              style={styles.input}
              placeholder='Email/ای میل'
              autoCapitalize="none"
              onChangeText={
                (userName) => setUserName(userName)
              }
            />
          <TextInput
            style={styles.input}
            placeholder='Password/پاس ورڈ'
            secureTextEntry={false}
            autoCapitalize="none"
            onChangeText={
              (userPassword) => setPassword(userPassword)
            }
          />
            <View style={styles.space}/>
            <TouchableOpacity style={styles.loginBtn} onPress={login_user}>
              <Text style={styles.loginText}>LOGIN/لاگ ان کریں</Text>
            </TouchableOpacity>
          </View>
        }
        <View style={styles.space}/>
        <Text>Not Registered? Click on <Link style={{color: 'blue'}} to="/signup">Signup/سائن اپ</Link> </Text>
      </ImageBackground>
    );}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 50,
    margin: 10,
    padding: 8,
    fontSize: 18,
    borderWidth: 1,
    color: "black",
  },
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
  backgroundImage: {
    flex: 1,
  },
  Button: {
    color: 'green'
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#32CD32",
  },
})