import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  Button
} from 'react-native';

const UpdateUser = ({ navigation }) => {
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Textinput
                placeholder="Enter User Id"
                style={{ padding: 10 }}
                onChangeText={
                  (id) => setIDd(id)
                }
              />
              <Button
                title="Search User"
                customClick={searchUser} 
              />
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
     
        <TouchableOpacity style={styles.loginBtn}
        onPress={register_user}
        >
        <Text style={styles.loginText}>Signup/سائن اپ</Text>
      </TouchableOpacity>
              <Button
                title="Update User"
                customClick={updateUser}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateUser;