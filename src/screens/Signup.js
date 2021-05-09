import React, { useState,useEffect } from 'react';
import {View, StyleSheet,ScrollView,ToastAndroid,Button, Alert,Image,Platform, ImageBackground, TouchableOpacity,Text} from 'react-native';
import TextInput from '../components/Textinput'
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker'; 
import api from '../constants/api'
export default function Signup ({navigation}) {

const [selectedValue, setSelectedValue] = useState("grower");
const [firstName, setFirstName] = useState("")
const [fnerror, setFnerror] = useState("")

const [lastName, setLastName] = useState("")
const [lnerror, setlneror] = useState("")

const [username, setUsername] = useState("");
const [usernameerror , setUserNameError] = useState("");

const [password, setPassword] = useState("");
const [passworderror, setPassworderror] = useState("")

const [area, setArea] = useState("")
const [areaerror , setAreaError] = useState("")

const [address, setAddress] = useState("");
const [addresserror, setAddressError]= useState("")

const [mobilenumber, setMobileNumber] = useState("")
const [mobilenumbererror, setMobileNumberError] = useState("");

const [cnic, setCnic] = useState("")
const [cnicError , setCnicError] = useState("")

const [accountnumber, setAccountNumber]= useState("")
const [accountnumbererror, setAccountNumbererror] = useState("")

const [image, setImage] = useState(null);

useEffect(() => {
  (async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  })();
}, []);

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

 

  if (!result.cancelled) {
   
    uploadimage(result.uri);
  }
}

const uploadimage = (uri) => {
  
  var formdata = new FormData();
  var photo = {
    uri: uri,
    type: 'image/jpeg',
    name: 'photo.jpg',
  };
formdata.append("image", photo);

var requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type' :'multipart/form-data'
},
  body: formdata
 
};

fetch(`${api}/uploadImage`, requestOptions)
  .then(response => response.json())
  .then(result => {
   
    setImage(`${api}/images/${result.filename}`)
  })
  .catch(error => console.log('errorrrrrrr', error));
}
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
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  try {
    fetch(`${api}/signup`, {
      method: 'POST',
      headers:myHeaders,
      body:JSON.stringify({
        "firstname":firstName,
        "lastname":lastName,
        "username":username,
        "password":password,
        "area":area,
        "role":selectedValue,
        "cnic":cnic,
        "mobilenumber":mobilenumber,
        "accountnumber":accountnumber,
        "address":address,
        "image":image
      })
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
        <View style={{ flex: 1, marginVertical:19, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Upload Image" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 100, height: 100,marginTop:20, marginHorizontal:20, borderRadius:100, }} />}
        </View>
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
     