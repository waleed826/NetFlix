import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const SplashScreen = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
      <Image source={require('../assets/images/NETFLIXNAMELOGO.png')}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})