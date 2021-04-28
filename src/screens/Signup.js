import React, { useState,useEffect } from 'react';
import {View, StyleSheet,ScrollView,ToastAndroid, Alert, ImageBackground, TouchableOpacity,Text} from 'react-native';
import TextInput from '../components/Textinput'
import {Picker} from '@react-native-picker/picker';
import api from '../constants/api'
export default function Signup ({navigation}) {

const [selectedValue, setSelectedValue] = useState("grower");
const [firstName, setFirstName] = useState("aftab")
const [fnerror, setFnerror] = useState("")

const [lastName, setLastName] = useState("ufaq")
const [lnerror, setlneror] = useState("")

const [username, setUsername] = useState("");
const [usernameerror , setUserNameError] = useState("");

const [password, setPassword] = useState("123456");
const [passworderror, setPassworderror] = useState("")

const [area, setArea] = useState("rawalpindi")
const [areaerror , setAreaError] = useState("")

const [address, setAddress] = useState("bahria town Phase 8");
const [addresserror, setAddressError]= useState("")

const [mobilenumber, setMobileNumber] = useState("923408906107")
const [mobilenumbererror, setMobileNumberError] = useState("");

const [cnic, setCnic] = useState("1620275381647")
const [cnicError , setCnicError] = useState("")

const [accountnumber, setAccountNumber]= useState("1234567890123")
const [accountnumbererror, setAccountNumbererror] = useState("")
 
const register_user = () => {
  if(username.length < 3){
    setUserNameError("Please Enter user Name");
    return;
  }
  if(password.length < 4){
      setUserNameError("");
      setPassworderror("Please Enter strong Password")
      return;
  }
  setPassworderror("");
  let formdata = new FormData();
  formdata.append("firstname", firstName);
  formdata.append("lastname",lastName);
  formdata.append("username", username);
  formdata.append("password",password);
  formdata.append("area", area);
  formdata.append("role", selectedValue);
  formdata.append("cnic", cnic);
  formdata.append("mobilenumber", mobilenumber);
  formdata.append("accountnumber", accountnumber);
  formdata.append("address", address);
  try {
    fetch(`${api}/signup`, {
      method: 'POST',
      
      body:formdata
   }).then((response) => response.json())
    .then((json) => {
      if(json.error){
        setUserNameError("the username is already used");
      }else{
        setUserNameError("")
        ToastAndroid.showWithGravityAndOffset(
          "Registeration Done",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
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
};
    return (
      <ImageBackground source={require('../assets/Images/pdflowersetproject10-adj-38_2.jpg')} style={styles.container}> 
        <ScrollView style={{width:"100%", marginTop:40,}}contentContainerStyle={{justifyContent:"center", alignItems:"center", paddingBottom:10,}} >
        <Text>Sign Up</Text> 
        
        <TextInput label="First name" value={firstName} setValue={setFirstName} error={fnerror} setError={setFnerror} />
       
        <TextInput label="Last name" value={lastName} setValue={setLastName} error={lnerror} setError={setlneror} />
       
        <TextInput label="Area" value={area} setValue={setArea} error={areaerror} setError={setAreaError} />
       
        <TextInput label="Mobile Number" value={mobilenumber} setValue={setMobileNumber} error={mobilenumbererror} setError={setMobileNumberError} />
       
        <TextInput label="Address" value={address} setValue={setAddress} error={addresserror} setError={setAddressError} />
       
        <TextInput label="Cnic" value={cnic} setValue={setCnic} error={cnicError} setError={setCnicError} />
       
        <TextInput label="Bank Account Number" value={accountnumber} setValue={setAccountNumber} error={accountnumbererror} setError={setAccountNumbererror} />
       
        <TextInput label="username" value={username} setValue={setUsername} error={usernameerror} setError={setUserNameError} />
       
        <TextInput label="Password" value={password} setValue={setPassword} error={passworderror} setError={setPassworderror} />
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
     
        <TouchableOpacity style={styles.loginBtn}
        onPress={register_user}
        >
        <Text style={styles.loginText}>Signup/سائن اپ</Text>
      </TouchableOpacity>
      </ScrollView>
      </ImageBackground>
    )
  }
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
    space: {
      width: 20, // or whatever size you need
      height: 150,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop:10,
      backgroundColor: "#32CD32",
    },

  })