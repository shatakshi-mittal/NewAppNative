import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const ERROR_NAME = '* Please enter name';
const ERROR_EMAIL = '* Please enter email';
const ERROR_PASSWORD = '* Please enter password';
const ERROR_PASSWORD_CONFIRM = '* Please confirm password';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const _Register = async () => {
   
    const isFieldEmpty = verifyFieldData();
    if (isFieldEmpty) {
      
      return;
    }
    try {
      const res = await fetch('https://hola9.live/api/user/register/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          password2: password,
          phoneNumber: '9876543210',
          tc: true,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log('--er--', err);
    }
  };

  const verifyFieldData = () => {
    if (name === '') {
      handleEmptyText(name, 'name', ERROR_NAME);
    }
    if (email === '') {
      handleEmptyText(email, 'email', ERROR_EMAIL);
    }
    if (password === '') {
      handleEmptyText(password, 'password', ERROR_PASSWORD);
    }
    if (confirmPassword === '') {
      handleEmptyText(
        confirmPassword,
        'confirmPassword',
        ERROR_PASSWORD_CONFIRM,
      );
    }
  
    return !!(
      name === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    );
  };

  
  const handleEmptyText = (text, type, msg) => {
   
    if (text === '') {
      setErrors(prevState => ({
        ...prevState,
        [type]: msg,
      }));
    }
    
    else if (
      type === 'confirmPassword' &&
      text.length > 0 &&
      text !== password
    ) {
      setErrors(prevState => ({
        ...prevState,
        confirmPassword: '* password mismatch',
      }));
    } else {
      
      setErrors(prevState => ({
        ...prevState,
        [type]: '',
      }));
    }
  };

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

        <TextInput
          value={name}
          placeholder="Enter Name"
          style={styles.textBox}
          onChangeText={text => {
            
            handleEmptyText(text, 'name', ERROR_NAME);
            setName(text);
          }}
        />
        {errors.name ? (
          <Text style={styles.errorText}>{errors.name}</Text>
        ) : null}

        <TextInput
          value={email}
          placeholder="Enter Your Email"
          style={styles.textBox}
          onChangeText={text => {
           
            handleEmptyText(text, 'email', ERROR_EMAIL);

          
            setEmail(text);
          }}
        />
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}

        <TextInput
          value={password}
          secureTextEntry={true}
          style={styles.textBoxpass}
          placeholder="Enter Password"
          onChangeText={text => {
            
            handleEmptyText(text, 'password', ERROR_PASSWORD);

            setPassword(text);
          }}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}

        <TextInput
          value={confirmPassword}
          secureTextEntry={true}
          style={styles.textBoxpass}
          placeholder="Enter Confirm Password"
          onChangeText={text => {
            
            handleEmptyText(text, 'confirmPassword', ERROR_PASSWORD_CONFIRM);

            setconfirmPassword(text);
          }}
        />
        {errors.confirmPassword ? (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        ) : null}

        <View>
          <TouchableOpacity style={styles.spbtn}>
            <Text style={styles.sp}>Show Password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text style={styles.already}>Already have an account?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.textcheck}>
          <Text style={styles.terms}>I agree to the terms and conditions</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={_Register}>
          <Text style={styles.buttontext}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Register;
const styles = StyleSheet.create({
  errorText: {
    fontSize: 12,
    color: 'red',
  },
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
    borderWidth: 1,
    borderRadius: 4,
    paddingBottom: 6,
    paddingTop: 6,
    marginRight: 50,
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
    borderWidth: 1.5,
    borderRadius: 6,
    padding: 6,
    marginTop: 6,
    marginBottom: 10,
  },
  textBoxpass: {
    borderColor: '#2bc4ff',
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
    backgroundColor: 'blue',
    marginRight: 250,
    textAlign: 'center',
    borderRadius: 6,
    marginBottom: 15,
    marginTop: 5,
  },
  sp: {
    fontSize: 15,
    color: 'white',
  },
  already: {
    marginLeft: 200,
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
