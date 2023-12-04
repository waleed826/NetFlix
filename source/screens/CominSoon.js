// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const CominSoon = () => {
//   return (
    
//     <View style={{ backgroundColor:'black',flex:1}}>
//     <Text style={{color:'white',fontSize:30}}>ComingSoon Screen</Text>
//   </View>
//   )
// }

// export default CominSoon

// const styles = StyleSheet.create({})

import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, StyleSheet } from "react-native";
import WebView from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";
const CominSoon = () => {
  return (
    
    <View style={{flex:1}}>
      <YoutubePlayer
        height={200}
        videoId={"mRGMMd8eazw"}
      />
      <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1,backgroundColor:'red' }} />
    </View>
  )
}

export default CominSoon

const styles = StyleSheet.create({})