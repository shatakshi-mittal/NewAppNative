import * as React from 'react'; 
import { Button, View,Text,TextInput, Pressable,Image, TouchableOpacity, ScrollView} from 'react-native'; 
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import Login from './src/Screens/Loginn';
import Register from './src/Screens/Regsiterr';
import Footer from './src/common/footer';
function LogoTitle() {
  return (
    <View />
  );
} 
function AboutUs({ navigation }) { 
  return ( 
    <ScrollView>
    <View style={{flex: 1}}>
    <View style={{ marginTop:200,alignItems: 'center', justifyContent: 'center' }}> 
      <Text style={{color:'black',fontSize:25,fontWeight:'bold',justifyContent:'center',alignItems:'center'}}> n hola9 main app begins with you</Text>
      <Text style={{color:'black',fontSize:21,alignItems:'center',marginLeft:7,marginRight:7}}>
      Our vision is to make Hola9 one stop solution for local 
      businesses,classifieds and largest business-to-business 
      marketplace for India Where you can get business to
      business,business to customer and customer to
      customer services at one place e-commerce platform,
      focuses on expert services around Home,Life and Self
      and where the user need is customized. </Text> 
      <Footer />
    </View>
    </View>
    </ScrollView>
  ); 
}
function ContactUs({ navigation }) { 
  return ( 
    <ScrollView>
    <View style={{flex: 1,justifyContent:'flex-end'}}>
    <View style={{alignItems: 'center', justifyContent: 'center',marginBottom:50 }}> 
      <Text style={{color:'black',fontSize:20,fontWeight:'bold',marginBottom:50}}>Get In Touch With Us</Text>
      <Text style={{color:'black',fontSize:18}}>Name:</Text>
      <TextInput placeholder="Enter Your Name" />
      <Text style={{color:'black',fontSize:18}}>Email:</Text>
      <TextInput placeholder="Enter Your Email" />
      <Text style={{color:'black',fontSize:18}}>Phone Number:</Text>
      <TextInput placeholder="Enter Your Phone Number" />
      <Text style={{color:'black',fontSize:18}}>Message</Text>
      <TextInput placeholder="Enter Your Message" />
      <Footer/>
    </View> 
    </View>
    </ScrollView>
  ); 
}
function Blog({ navigation }) { 
  return ( 
    <ScrollView>
    <View style={{flex: 1,justifyContent:'flex-end'}}>
    <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center' }}> 
      <Text style={{color:'black',fontSize:18,marginBottom:10}}>Make a tour to karnataka</Text>
      <Text style={{color:'black',fontSize:18,marginBottom:10}}>The Huffingon Post</Text> 
      <Text style={{color:'black',fontSize:18,marginBottom:10}}>Honda Civic</Text>
      <Text style={{color:'black',fontSize:18,marginBottom:10}}>Go Tour</Text>
    <Footer/>
    </View> 
    </View>
    </ScrollView>
  ); 
}
function Ads({ navigation }) { 
  return ( 
    <ScrollView>
    <View style={{flex: 1,justifyContent:'flex-end'}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
      <TouchableOpacity><Text style={{marginBottom:20}}>ALL ADDS</Text></TouchableOpacity> 
      <TouchableOpacity><Text style={{marginBottom:100}}>CREATE ADDS</Text></TouchableOpacity> 
      <Footer/>
    </View> 
    </View>
    </ScrollView>
  ); 
} 
// function Login({ navigation }) { 
//   return ( 
//     <ScrollView>
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
//       <Text style={{color:'black',fontSize:25,fontWeight:'bold',justifyContent:'center',alignItems:'center'}}>Login</Text> 
//     <Footer/>
//     </View> 
//     </ScrollView>
//   );
// }
// function Register({ navigation }) { 
//   return ( 
//     <ScrollView >
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
//       <Text style={{color:'black',fontSize:25,fontWeight:'bold',justifyContent:'center',alignItems:'center'}}>Register</Text> 
//     <Footer/>
//     </View> 
//     </ScrollView>
//   ); 
// }  
const Drawer = createDrawerNavigator(); 
export default function App() { 
  return ( 
    <NavigationContainer> 
      <Drawer.Navigator initialRouteName="LogoTitle"
      screenOptions={{headerTitle: (props) => <Image
      style={{ width: 90, height: 30}}
      source={require('../Navi/assets/hola9.png')}
    /> }}>
        
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About Us" component={AboutUs} /> 
        <Drawer.Screen name="Contact Us" component={ContactUs} /> 
        <Drawer.Screen name="Blog" component={Blog} /> 
        <Drawer.Screen name="Ads" component={Ads} /> 
        <Drawer.Screen name="Login" component={Login} /> 
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator> 
    </NavigationContainer> 
  ); 
}