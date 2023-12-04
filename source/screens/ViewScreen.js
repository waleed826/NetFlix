import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
const ViewScreen = () => {
  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <LinearGradient style={{margin:10}} start={{x:1 , y:1}} end={{x:0, y:1}} colors={['white','black']}   >
      <View  style={{   }}><AntDesign name={'closecircle'} color={'white'}/></View>
      <View  >
        <Image source={require('../assets/images/Outerbanksposter.png')} style={{ height: 194, width: 139, alignItems: 'center', justifyContent: 'center', margin:10 }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ borderWidth: 2, borderColor: 'white', flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 15, }} >Top</Text>
          <Text style={{ color: 'white', fontSize: 15, }} >10</Text>
        </View>
        <Text style={{ color: 'white' }} >{'\t'}#5 in TV Shows Today</Text>
      </View>
      </LinearGradient>
      <TouchableOpacity style={{ flexDirection: 'row', padding: 4, margin: 10, justifyContent: 'center', backgroundColor: 'red' }}>
        <Entypo name={'controller-play'} color={'white'} size={20} />
        <Text style={{ color: 'white' }} >Play</Text>
      </TouchableOpacity>

      <Text style={{ color: 'white', fontSize: 12 }}>On an island of haves and have-nots, teen John B enlists his three best friends to hunt a lengendary treasure linked to his father’s disappearance.</Text>
      <Text style={{ color: 'gray', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit Lorem ipsum dolor sit amet, conse </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
        <TouchableOpacity style={styles.touchBotop}>
          <Octicons color='white' name='plus' size={25} />
          <Text style={styles.fixviewtxt}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchBotop}>
          <SimpleLineIcons color='white' name='like' size={25} />
          <Text style={styles.fixviewtxt}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchBotop}>
          <Feather color='white' name='send' size={25} />
          <Text style={styles.fixviewtxt}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, padding: 10 }}>
        <Text style={{ color: 'white', borderTopWidth: 4, borderTopColor: 'rgba(210,47,38,1)', fontSize: 12 }}>EPISODES</Text>
        <Text style={{ color: 'gray', fontSize: 12 }}>TRAILERS & MORE</Text>
        <Text style={{ color: 'gray', fontSize: 12 }}>MORE LIKE THIS</Text>
      </View>
      <Text style={{ color: 'gray', fontSize: 12 }}>Season 1</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ImageBackground style={{ height: 72, width: 130, alignItems: 'center', justifyContent: 'center' }} source={require('../assets/images/PILOT.png')}>
          <Ionicons name={'play-circle-outline'} color={'white'} size={35} />
        </ImageBackground>
        <Text style={{ color: 'white', fontSize: 12 }}>{'\t'}1. Pilot</Text>
      </View>
      <Text style={{ color: 'gray', fontSize: 12 }}>On an island of haves and have-nots, teen John B enlists his three best friends to hunt a lengendary treasure linked to his father’s disappearance.</Text>
      <View style={styles.fixview}>
        {/* <TouchableOpacity style={styles.touchBotop}>
          <MaterialCommunityIcons color='white' name='home-outline' size={25} />
          <Text style={styles.fixviewtxt}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchBotop}>
          <EvilIcons color='white' name='search' size={31} />
          <Text style={styles.fixviewtxt}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchBotop}>
          <MaterialIcons color='white' name='video-library' size={25} />
          <Text style={styles.fixviewtxt}>Coming soon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchBotop}>
          <Octicons color='white' name='download' size={25} />
          <Text style={styles.fixviewtxt}>Downloads</Text>
        </TouchableOpacity>
        <TouchableOpacity onFocus={'white'} style={styles.touchBotop}>
          <Octicons color='white' name='three-bars' size={25} />
          <Text style={styles.fixviewtxt}>More</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default ViewScreen

const styles = StyleSheet.create({
  fixview: {
    // position:'absolute',
    // bottom:0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5
  },
  fixviewtxt: {
    fontSize: 10,
    color: 'white'
  },
  touchBotop: {
    opacity: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
})