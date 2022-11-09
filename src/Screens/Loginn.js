import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React, {useState} from 'react';
import Footer from '../common/footer';
  const Login = ({navigation}) => {
    const [isSelected, setSelection] = useState(false);
    return (
      <ScrollView>
      <View style={styles.inputtextview}>
        <View style={styles.ms}>
          <View style={styles.mobnum}>
            <Image
              style={styles.img}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/597/597177.png',
              }}
            />
            <TouchableOpacity>
              <Text style={styles.mobtext}>MOBILE NUMBER</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signin}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/2991/2991148.png',
              }}
            />
            <TouchableOpacity>
              <Text style={styles.signtext}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.twoline}>
          <View style={styles.lines} />
  
          <View style={styles.lines} />
        </View>
        
        <Text style={styles.labeltext}></Text>
        <TextInput placeholder="Enter Your Email" style={styles.textBox} />
        <Text style={styles.labeltext}></Text>
        <TextInput style={styles.textBoxpass} placeholder="Enter Password" />
        
        <View>
          <TouchableOpacity style={styles.spbtn}>
            <Text style={styles.sp}>Show Password</Text>
          </TouchableOpacity>
          <View>
          <TouchableOpacity style={styles.fpb}>
            <Text style={styles.fp}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity>
            <View>
              <Text style={styles.cr}>Create an account?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.textcheck}>
          <Text style={styles.terms}>I agree to the terms and conditions</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={styles.button}>
          <Text style={styles.buttontext}>LOGIN</Text>
        </TouchableOpacity>
        <Footer/>
      </View>
      </ScrollView>
    );
  };
  export default Login;
  const styles = StyleSheet.create({
    inputtextview: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      paddingRight: 24,
      paddingLeft: 16,
      paddingTop: 10,
    },
    mobnum: {
      flexDirection: 'row',
      backgroundColor: 'darkblue',
      borderColor: '#E5E4E2',
      borderWidth: 5,
      borderRadius: 4,
      paddingBottom: 6,
      paddingTop: 6,
      marginRight:50,
      marginLeft:5
    },
    mobtext: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
    },
    img: {
      width: 16,
      height: 16,
      marginRight: 4,
      paddingBottom: 20,
      tintColor: 'white',
    },
    signin: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: '#E5E4E2',
      borderWidth: 1,
      borderRadius: 4,
      paddingBottom: 6,
      paddingTop: 6,
      marginLeft: 5,
    },
    signtext: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
    },
    image: {
      width: 16,
      height: 16,
      marginRight: 4,
      paddingBottom: 20,
    },
    ms: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 20,
    },
    twoline: {
      flexDirection: 'row',
      height: 4,
      justifyContent: 'space-between',
      marginBottom: 30,
    },
    lines: {
      flex: 1,
      height: 2,
      backgroundColor: '#E5E4E2',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 14,
    },
    Or: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'grey',
    },
    textBox: {
      borderColor: '#2bc4ff',
      backgroundColor:'lightgrey',
      borderWidth: 1.5,
      borderRadius: 6,
      padding: 6,
      marginTop: 6,
      marginBottom: 10,
    },
    textBoxpass: {
      borderColor: '#2bc4ff',
      backgroundColor:'lightgrey',
      borderWidth: 1.5,
      borderRadius: 6,
      padding: 6,
      marginTop: 6,
      marginBottom: 10,
    },
    labeltext: {
      fontWeight: 'bold',
    },
    spbtn: {
      flexDirection:'row',
      backgroundColor: 'blue',
      marginRight:250,
      textAlign: 'center',
      borderRadius: 2,
      marginBottom: 15,
    },
    sp: {
      fontSize: 15,
      color: 'white',
      textAlign:'center'
    },
    fpb:{
      flexDirection:'row',
      marginLeft:150
    },  
    fp:{
      fontSize:15,
      color:'grey',
      marginLeft:100,
    },
    cr: {
      fontSize:15,
      marginBottom:20,
      color: 'grey',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textcheck: {
      flexDirection: 'row',
      backgroundColor: 'white',
      marginBottom: 20,
      fontWeight: 'bold',
    },
    checkbox: {
      marginRight: 4,
      paddingBottom: 0,
      alignSelf: 'center',
      transform: [{scaleX: 1}, {scaleY: 1}],
      borderColor: 'lightgray',
    },
    terms: {
      fontWeight: 'bold',
      color:'black'
    },
    button: {
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#130966',
      marginBottom: 30,
      shadowColor: 'darkblue',
      shadowOpacity: 4,
      shadowRadius: 4,
    },
    buttontext: {
      fontSize: 18,
      color: 'white',
      marginBottom: 0,
    },
  });
  