import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import contact from './Message';

const UserCard = () => {

  return (
    <SafeAreaView>
      <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={contact.image}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {contact.name}
          </Text>

    </SafeAreaView>
  );
};

export default UserCard;