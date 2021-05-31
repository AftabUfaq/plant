import React from 'react';
import {ImageBackground,Text,StyleSheet} from 'react-native';
const UserCard = ({navigation}) => {
const [sampleDate, setSampleDate] = useState("")
const [sderror, setSderror] = useState("")

const [sampleCollected, setSampleCollected] = useState("")
const [scerror, setScerror] = useState("")

const [ec, setEc] = useState("")
const [ecerror, setEcerror] = useState("")

const [ph, setPh] = useState("")
const [pherror, setPherror] = useState("")

    return(
        <ImageBackground source={require('../assets/Images/pdflowersetproject10-adj-38_2.jpg')} style={styles.container}> 
       <TextInput label="Sample Collection Date" value={sampleDate} setValue={setSampleDate} error={sderror} setError={setSderror} />
       <TextInput label="Sample Collected by" value={sampleCollected} setValue={setSampleCollected} error={scerror} setError={setScerror} />
       <TextInput label="Ec" value={ec} setValue={setEc} error={ecerror} setError={setEcerror} />
       <TextInput label="Ph" value={ph} setValue={setPh} error={pherror} setError={setPherror} />
       <TouchableOpacity style={styles.loginBtn}
        // onPress={register_user}
        >
        <Text>Submit</Text>
      </TouchableOpacity>

        </ImageBackground>

    );
};
const styles = StyleSheet.create({
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
