import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login';
import Signup from './src/screens/Signup';
import GrowerHome from './src/screens/Grower/GrowerHome';
import Message from './src/screens/Grower/Message';
import UserCard from './src/screens/Grower/UserCard';
import AdminHome from './src/screens/Admin/AdminHome'
import ViewUser from './src/screens/Admin/ViewUser'
import DeleteUser from './src/screens/Admin/DeleteUser'
import UpdateUser from './src/screens/Admin/UpdateUser'
import AgronomistHome from './src/screens/Agronomist/AgronomistHome'
import SponsorHome from './src/screens/Sponsor/SponsorHome'
import VendorHome from './src/screens/Vendor/VendorHome'
import SoilhealthLabHome from './src/screens/SoilHealthLab/SoilHealthLabHome'

import {Context as AuthContext} from './src/context/AuthContext'
import {Provider as AuthProvider} from './src/context/AuthContext'
import { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
const  App = () =>  {
  const {state:{loading, userdata, loggedin,},tryLocalSignin}  = useContext(AuthContext)
  const AuthStack = createStackNavigator();
  const AdminStack = createStackNavigator();
  const GrowerStack = createStackNavigator();
  const AgronomistStack = createStackNavigator();
  const SponsorStack = createStackNavigator();
  const VendorStack = createStackNavigator();
  const SoilHealthStack = createStackNavigator();
  
  const AuthScreens = ({navigation}) => {
    return(
      <AuthStack.Navigator initialRouteName="login">
        <AuthStack.Screen name="signup" options={{headerShown:true}} component={Signup}/>
        <AuthStack.Screen name="login" component={Login} options={{headerShown:false}} />
      </AuthStack.Navigator>
    )
  }

  const AdminScreens = ({navigation}) => {
    return(
      <AdminStack.Navigator>
        <AdminStack.Screen name="adminhome" component={AdminHome} />
        <AdminStack.Screen name="ViewUser" component={ViewUser} />
        <AdminStack.Screen name="DeleteUser" component={DeleteUser} />
        <AdminStack.Screen name="UpdateUser" component={UpdateUser} />
      </AdminStack.Navigator>
    )
  }

  const GrowerScreens = ({navigation}) => {
    return(
      <GrowerStack.Navigator>
        <GrowerStack.Screen name="growerhome" component={GrowerHome} />
        <GrowerStack.Screen name="Message" component={Message}/>
        <GrowerStack.Screen name="UserCard" component={UserCard} />
      </GrowerStack.Navigator>
    )
  }

  const AgronomistScreens = ({navigation}) => {
    return(
      <AgronomistStack.Navigator>
        <AgronomistStack.Screen name="agronomisthome" component={AgronomistHome} />
      </AgronomistStack.Navigator>
    )
  }

  const SponsorScreens = ({navigation}) => {
    return(
      <SponsorStack.Navigator>
        <SponsorStack.Screen name="sponsorhome" component={SponsorHome} />
      </SponsorStack.Navigator>
    )
  }

  const SoilhealthLabScreens = ({navigation}) =>{
    return(
      <SoilHealthStack.Navigator>
        <SoilHealthStack.Screen name="SoilhealthLabHome" component={SoilhealthLabHome} />
      </SoilHealthStack.Navigator>
    )
  }
  const VendorScreens = ({navigation}) => {
    return(
      <VendorStack.Navigator>
        <VendorStack.Screen name="vendorhome" component={VendorHome} />
      </VendorStack.Navigator>
    )
  }

  useEffect(() => {
    tryLocalSignin();
  },[loading])
  if(loading){
    return(
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Text>Loading</Text>
      </View>
    )
  }
  return (
     <NavigationContainer>
      {userdata === null 
      ?<AuthScreens />
      
      :userdata.role === "admin"
      ?<AdminScreens />
      
      :userdata.role === "sponsor"
      ?<SponsorScreens />

      :userdata.role === "grower"
      ?<GrowerScreens />
      
      :userdata.role === "argo"
      ?<AgronomistScreens />

      :userdata.role === "vendor"
      ?<VendorScreens />
      :<SoilhealthLabScreens />
      }
     </NavigationContainer>
  );
}

export default () => {
  return(
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

