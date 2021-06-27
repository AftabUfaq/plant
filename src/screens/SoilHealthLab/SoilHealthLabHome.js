import React from 'react'
import {View, Text,StyleSheet,TouchableOpacity, Dimensions} from 'react-native'
const width = Dimensions.get("window").width
const SoilhealthLabHome = ({navigation}) => {
  return(
    <View style={styles.container}>
        <View style={styles.main}>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("UploadReport")}>
              <Text style={{color:"#fff", fontWeight:"bold"}}>Upload</Text>
            </TouchableOpacity>
            <View style={styles.box}>

            </View>
        </View>
        <View style={styles.main}>
            <View style={styles.box}>

            </View>
            <View style={styles.box}>

            </View>
        </View>
    </View>
  )
}

export default SoilhealthLabHome

const styles= StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:"center", 
    alignItems:"center"
  },
  main:{
      flexDirection:"row", 
      marginTop:10,
      width:width-20, 
      justifyContent:"space-between", 
      alignItems:"center", 
      alignSelf:"center"
    },
  box:{
    width:width/2 -25, 
    backgroundColor:"gray", 
    borderRadius:10, 
    height:150,
    alignItems:"center", 
    justifyContent:"center"
  }
})