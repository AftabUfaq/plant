import React, { useState,useEffect,useContext } from 'react';
import { View, TextInput, ToastAndroid, StyleSheet,Text, ImageBackground, TouchableOpacity} from 'react-native'
import { Link } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {Context as AuthContext} from '../context/AuthContext'
import api from '../constants/api'

export default function Login ({navigation}) {
  const {signout} = useContext(AuthContext)

return(
        <ImageBackground source={require('../assets/Images/pdflowersetproject10-adj-38_2.jpg')} style={styles.container}> 
        
        <View style={styles.space}/>
        <TouchableOpacity style={styles.loginBtn} onPress={() => signout()}> 
          <Text>Logout</Text>
          </TouchableOpacity>
      </ImageBackground>
    )
  }

const styles = StyleSheet.create({
  
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
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