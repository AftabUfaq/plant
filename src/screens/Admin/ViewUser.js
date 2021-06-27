import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View,Linking,StyleSheet, SafeAreaView } from 'react-native';

export default function ViewUser({navigation,route}){
 let user = route.params.user
 const message = "May the last Ashrah becomes the source of mughfirah for all of us. Share this prayer with everyone you know so that we can maximize the impact. Little deeds go a long way. "
  
  const sentpayment = () => {
      navigation.navigate("SentPatment",{user:user})
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems:"center", justifyContent:"center", backgroundColor: 'white' }}>
         <Text>Name: {user.firstname} {user.lastname}</Text>
         <Text>Cnic: {user.cnic} </Text>
         <Text>Area: {user.area}</Text>
         <Text>Mobile Number: {user.mobilenumber}</Text>
         <Text>Role: {user.role}</Text>
          
        <View style={{flexDirection:"row", justifyContent:"space-evenly", width:'100%'}}>
          <TouchableOpacity 
          onPress={() => {
            Linking.openURL(
              `http://api.whatsapp.com/send?text=${message}&phone=${user.mobilenumber}`
            );
          }}
          
          style={{...styles.button, backgroundColor:"green"}}>
             <Text style={{fontWeight:"bold", color:"#fff"}}>Whatsapp </Text>
          </TouchableOpacity>

          <TouchableOpacity 
              onPress={() => {
                Linking.openURL(
                  `sms:${user.mobilenumber}?body=${message}`
                );
              }}
           style={{...styles.button, backgroundColor:"blue"}}>
             <Text style={{fontWeight:"bold", color:"#fff"}}>Message </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
              onPress={() => {sentpayment()}}
           style={{...styles.button, backgroundColor:"gray"}}>
             <Text style={{fontWeight:"bold", color:"#fff"}}>Sent Payment </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button:{
    width:160, 
    height:40,
    marginTop:20,
    justifyContent:"center", 
    alignItems:"center", 
    borderRadius:10
  }
})