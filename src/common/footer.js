import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import MobileStoreButton from 'react-mobile-store-button';
const Footer = () => { 
  return (<>
    <View style={{ flex: 1,marginTop:20,backgroundColor:'white' }}>
      <View><Text style={{color: 'lightblack' ,marginBottom:10,fontSize:20}}>Electronics</Text>
        <Text style={{marginBottom:10}}>Washing Machines  Fridges  Air Coolers  Ac's  Camera's  Video & Audio Accessories</Text></View>
        <View style={{height:1,backgroundColor:'lightgrey',marginBottom:5}}></View>
      <View><Text style={{ color: 'lightblack'  ,marginBottom:10,fontSize:20}}>Mobile & Laptops</Text>
        <Text style={{marginBottom:10}}>Data Cables  Chargers  Headsets  Power Bank  Screeen Guard  Selfies Stick</Text></View>
        <View style={{height:1,backgroundColor:'lightgrey',marginBottom:5}}></View>
      <View><Text style={{ color: 'lightblack' ,marginBottom:10,fontSize:20 }}>Furnitures</Text>
        <Text style={{marginBottom:10}}>Home Furnitures  Office Furnitures  KitchenWare  Kid's Furniture</Text></View>
        <View style={{height:1,backgroundColor:'lightgrey',marginBottom:5}}></View>
      <View><Text style={{color: 'lightblack' ,marginBottom:10,fontSize:20 }}>Bikes & Cars</Text>
        <Text style={{marginBottom:10}}>Bikes  Cars  Bikes Accessories  Cars Accessories</Text></View>
        <View style={{height:1,backgroundColor:'lightgrey',marginBottom:5}}></View>
      <View><Text style={{ color: 'lightblack' ,marginBottom:10,fontSize:20 }}>Home & Lifestyle</Text>
        <Text style={{marginBottom:15}}>Home Decore  Home Furnishing  Cleaning Supplies  Kitchen & Dining</Text></View></View>
        <View style={{height:1,backgroundColor:'lightgrey',marginBottom:40}}></View>
    <View style={{backgroundColor:'lightgrey'}}>
      <Image resizeMode='contain' source={require('../../assets/hola9.png')} style={{ width: 80, height: 50, marginLeft: 20,marginTop:50 }} />
      <Text style={{ marginLeft: 20, color: 'black' }}>#12 Second Floor 3rd Cross</Text>
      <Text style={{ marginLeft: 20, color: 'black' }}>Patel Narayana Reddy Layout </Text>
      <Text style={{ marginLeft: 20, color: 'black' }}>6th Block Koramangala</Text>
      <Text style={{ marginLeft: 20, color: 'black' }}>Bengaluru -560095</Text>
      <View style={{ flexDirection: 'row', marginStart : 10 }}>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Image resizeMode='center' source={require('../../assets/ss.png')} style={{ width: 120, height:80 }} />
        </TouchableOpacity>
        <TouchableOpacity >
          <Image resizeMode='center' source={require('../../assets/ge.png')} style={{ width: 120, height:80 }} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row',  }}>
        <View 
        style={{marginStart: 10}}
        >
        <Text style={{ marginLeft: 30, marginBottom: 10, color: 'grey', fontWeight: 'bold',fontSize:15 }}>My Account</Text>
          <Text style={{ marginLeft: 35, marginBottom: 5,fontSize:15 }}>Signup</Text>
          <Text style={{ marginLeft: 35, marginBottom: 5,fontSize:15 }}>Login</Text>
          <Text style={{ marginLeft: 35, marginBottom: 5,fontSize:15}}>Login</Text>
          <Text style={{ marginLeft: 35, marginBottom: 5,fontSize:15}}>Faq</Text>
          <Text style={{ marginLeft: 35, marginBottom: 5,fontSize:15 }}>Contact Us</Text>
          <Text style={{ marginLeft: 35, marginBottom: 5,fontSize:15 }}>About Us</Text>
        </View>
        <View 
        style={{marginStart: 50}}
        >
          <Text style={{ marginLeft: 10, marginBottom: 10, color: 'grey',fontSize:15, fontWeight: 'bold' }}>Helpful Links</Text>
          <Text style={{ marginLeft: 25, marginBottom: 5,fontSize:15 }}>Refund Policy</Text>
          <Text style={{ marginLeft: 25, marginBottom: 5,fontSize:15 }}>Listing Policy</Text>
          <Text style={{ marginLeft: 25, marginBottom: 5,fontSize:15 }}>Copyright Policy</Text>
          <Text style={{ marginLeft: 25, marginBottom: 5,fontSize:15 }}>Privacy Policy</Text>
          <Text style={{ marginLeft: 25, marginBottom: 5,fontSize:15}}>Terms's</Text>
          <Text style={{ marginLeft: 25, marginBottom: 5,fontSize:15 }}>Blogs</Text>
          <Text style={{ marginLeft: 25, marginBottom: 7,fontSize:15 }}>Pricing</Text>
        </View>
          
      </View>
      <View><Text style={{marginLeft:40}}>2022 © <Text style={{color:'blue'}}>Hola9 Classifieds India Private Limited</Text> All </Text>
      <Text style={{marginLeft:160}}>rights reserved.</Text></View>
    </View>
  </>
  )
}
export default Footer