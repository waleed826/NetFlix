import { StyleSheet, Text, View, ScrollView, Image, Alert, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
const imageArray = [
    { id: 1, name: 'Justin', image: require('../assets/images/Sol.png') },
    { id: 2, name: 'Huntress', image: require('../assets/images/MaskGroups.png') },
    { id: 3, name: 'Tornado', image: require('../assets/images/fergus.png') },
    { id: 4, name: 'Dent', image: require('../assets/images/MaskGroup.png') },
    { id: 5, name: 'Kids', image: require('../assets/images/Kids.png') },
]

const NetflixProfile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ alignItems: 'center', margin: 15 }}>
                <Image source={require('../assets/images/NETFLIXNAMELOGO.png')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>
                <Text onPress={() => Alert.alert('Pressed')} style={{ color: 'white', fontSize: 20 }}>Who’s Watching?</Text>
                <Text onPress={() => Alert.alert('Pressed')} style={{ color: 'white', fontSize: 20 }}>Edit</Text>

            </View>
            <FlatList
                numColumns={2}
                data={imageArray}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={{ flex: 1, marginLeft: 15, justifyContent: 'center', alignItems: 'center', padding: 10, opacity: 9 }} onPress={() => navigation.replace('Netflixzero')}>

                            <Image style={{ height: 100, width: 100 }} source={item.image} />
                            <Text style={{ color: 'white', fontSize: 20 }}>{item.name}</Text>

                        </TouchableOpacity>

                    )
                }}
            />
        </View>
    )
}

export default NetflixProfile

const styles = StyleSheet.create({})