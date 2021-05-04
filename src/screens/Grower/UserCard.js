import React from 'react';
import {View, SafeAreaView, Image, Text,TouchableOpacity,StyleSheet} from 'react-native';

const UserCard = ({navigation,route}) => {
  const contact= route.params;
  return (
    <SafeAreaView>
    <View style={{backgroundColor: '#C0C0C0' , height: 230, borderRadius: 10}}>
      <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            {/* <Image
              source={contact.image}
              style={{flex: 1, resizeMode: 'contain'}}
            /> */}
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10, textAlign: 'center'}}>
            {contact.name}
          </Text>
          <View style={styles.space}/>
          <View style={{flexDirection:'row', flex: 1}}>
              <TouchableOpacity style={styles.button}>
                <Image source={require('../../assets/Images/218-2180655_phone-call-icon-png.png')} style={styles.picture}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Image source={require('../../assets/Images/icon-18.png')} style={styles.picture}/>
              </TouchableOpacity>
            </View></View>
    </SafeAreaView>
  );
};

export default UserCard;
const styles = StyleSheet.create({
  picture: {
    borderRadius: 30,
    width: 60,
    height: 60,
    marginLeft: 40,
    marginRight:80
  },
  space: {
    width: 10, // or whatever size you need
    height: 20,
  },
});