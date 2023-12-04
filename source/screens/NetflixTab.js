import {  Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Button  } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Downloads from './Downlaods';
import More from './More';
import CominSoon from './CominSoon';
import Search from './Search';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import NetflixScreen from './NetflixScreen';
const Tab = createBottomTabNavigator();

const NetflixTab = () => {

  return (
    <Tab.Navigator initialRouteName='Netflitwo'
            screenOptions={{
                headerShown: false,
                
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarActiveBackgroundColor: 'black',
                tabBarInactiveBackgroundColor: 'black',
                tabBarHideOnKeyboard:true,
                tabBarStyle: {
                    //    margin:10,
                    //     padding: 10,
                    backgroundColor: 'rgba(189, 214, 132,0.3)',
                },
            }}
        >
            <Tab.Screen name='Netflitwo' component={NetflixScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{}}>
                                <MaterialCommunityIcons color={focused ? 'white':'gray' } name='home-outline' size={25} />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen name='Search' component={Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{}}>
                                <EvilIcons color={focused ? 'white':'gray' } name='search' size={31} />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen name='Coming soon' component={CominSoon}
                options={{
                    tabBarBadge:8,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{}}>
                                <MaterialIcons color={focused ? 'white':'gray' } name='video-library' size={25} />


                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen name='Downloads' component={Downloads}
                options={{
                    
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Octicons color={focused ? 'white':'gray' } name='download' size={25} />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name='More' component={More}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>                                                                    
                                    <Octicons color={focused ? 'white':'gray' } name='three-bars' size={25} />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
  )
}

export default NetflixTab

const styles = StyleSheet.create({})






        