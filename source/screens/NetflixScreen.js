import { StyleSheet, Text, View, FlatList, Image, ImageBackground, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

import Entypo from 'react-native-vector-icons/Entypo'


const { width, height } = Dimensions.get('screen')
const imageArray = [
  { image: require('../assets/images/posterone.jpg') },
  { image: require('../assets/images/fiftyshades.png') },
  { image: require('../assets/images/postertwo.jpg') },
  { image: require('../assets/images/JOKER.png') },
  { image: require('../assets/images/potserthree.jpg') },
  { image: require('../assets/images/posterfour.jpg') },
  { image: require('../assets/images/lockedup.png') },
  { image: require('../assets/images/posterfive.jpg') },
  { image: require('../assets/images/postersix.jpg') }]

const NetflixScreen = ({ navigation }) => {
  return (
    <View style={styles.mainview}>
      <ScrollView style={styles.mainview}>
        <TouchableOpacity style={{ opacity: 10 }}>
          <ImageBackground resizeMode='stretch' source={require('../assets/images/outerbanks.png')} style={styles.backgroundimage}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
              <TouchableOpacity onPress={()=>navigation.replace('Netflixone')}>
              <Image source={require('../assets/images/NETFLIXLOGO.png')} onPress={()=>navigation.replace('Netflixone')} />
              </TouchableOpacity>
              <Text onPress={() => Alert.alert('Pressed TV SHOWS')} style={{ color: 'white' }}>TV SHOWS</Text>
              <Text onPress={() => Alert.alert('Pressed Movies')} style={{ color: 'white' }}>Movies</Text>

              <Text onPress={() => Alert.alert('Pressed My List')} style={{ color: 'white' }}>My List</Text>
            </View>
            <View style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
              <View style={{
                alignItems: 'center', background: ' rgba(217, 217, 217, 0.5)',
                backgroundColor: 'rgba(0,0,0,0.4)', borderBottomWidth: 40
              }}>
                <Image source={require('../assets/images/SERIES.png')} />

                <Image style={{}} source={require('../assets/images/LOGO.png')} />
                {/* <Text style={{color:'white', fontSize:40}}>OUTER{"\n"}BANKS</Text> */}
              </View>
            </View>

          </ImageBackground>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
          <Text style={styles.fixtext}>Soapy</Text>
          <Text style={styles.fixtext}>Exciting</Text>
          <Text style={styles.fixtext}>Teen</Text>
          <Text style={styles.fixtext}>Action</Text>
          <Text style={styles.fixtext}>Drama</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
          <TouchableOpacity style={{ opacity: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <AntDesign name='plus' size={20} style={{ color: 'white' }} />
            <Text style={{ color: 'white' }}>My List</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Netflixthree')} style={{ backgroundColor: 'white', opacity: 10, width: '45%', height: '70%', flexDirection: 'row', justifyContent: 'center' }}>
            <Entypo name='controller-play' style={{ color: 'black' }} size={30} />
            <Text style={{ color: 'black', fontSize: 20 }}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ opacity: 10, flexDirection: 'column' }}>
            <AntDesign name='infocirlceo' size={20} style={{ color: 'white' }} />
            <Text style={{ color: 'white' }}>info</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'white' }}>Previews</Text>
        <FlatList
          horizontal
          data={imageArray}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={{ opacity: 10, flex: 1, justifyContent: 'space-between', alignItems: 'center', borderRadius: 10, marginLeft: 10 }}>
                <Image style={{ height: 130, width: 100, marginLeft: 1, }} resizeMode='cover' source={item.image} />
              </TouchableOpacity >
            )
          }}
        />
        <Text style={{ color: 'white' }}>Movies</Text>
        <FlatList
          horizontal
          data={imageArray}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={styles.flat}>
                <Image style={{ height: 130, width: 100, marginLeft: 1, }} resizeMode='cover' source={item.image} />
              </TouchableOpacity >
            )
          }}
        />
        <Text style={{ color: 'white' }}>Trending Now</Text>
        <FlatList
          horizontal
          data={imageArray}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={styles.flat}>
                <Image style={{ height: 130, width: 100, marginLeft: 1, }} resizeMode='cover' source={item.image} />
              </TouchableOpacity >
            )
          }}
        />
        <Text style={{ color: 'white' }}>Favorites</Text>
        <FlatList
          horizontal
          data={imageArray}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={styles.flat}>
                <Image style={{ height: 130, width: 100, marginLeft: 1, }} resizeMode='cover' source={item.image} />
              </TouchableOpacity>
            )
          }}
        />
      </ScrollView>
    </View>
  )
}

export default NetflixScreen

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'black'
  },
  backgroundimage: {
    height: height * 0.45,
    // flexGrow:2,
    // flexShrink: 0, 
    color: 'lightgray'
  },
  flat: {
    opacity: 10,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10
  },
})