import { StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './source/screens/SplashScreen';
import NetflixProfile from './source/screens/NetflixProfile';
import SignUp from './source/screens/SignUp';
import NetflixScreen from './source/screens/NetflixScreen';
import ViewScreen from './source/screens/ViewScreen';
import NetflixTab from './source/screens/NetflixTab';
const App = () => {
  const Stack = createNativeStackNavigator();
  const [showSplash, setSplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 3000);
  }, [])
 
  return (
 <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'
        screenOptions={{ headerShown: false }}>
        {showSplash ? <Stack.Screen name='Splash' component={SplashScreen} />
          :
          <Stack.Screen name='Netflixone' component={NetflixProfile} />
        }
        <Stack.Screen name='Netflixzero' component={SignUp} />
        <Stack.Screen name='Tab' component={NetflixTab} />
        <Stack.Screen name='Netflitwo' component={NetflixScreen}/>
        <Stack.Screen name='Netflixthree' component={ViewScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App

const styles = StyleSheet.create({})

