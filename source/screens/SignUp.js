import { StyleSheet, Text, View, Button, TextInput, Alert, Dimensions,Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const SignUp = ({ navigation }) => {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false);
    const shoPassword = () => {
        setShowPassword(!showPassword)
    };
    const Signup = () => {
        if (phone.endsWith('.com') && password.length >= 8) {
            navigation.replace('Tab')
        }
        else {
            Alert.alert('Invalid Credentials')
        }
    }

    return (
        <View style={styles.mainview}>
            <View style={{alignItems:'center'}}>

                <View style={{
                }}>
                    <Image style={styles.imge} source={require('../assets/images/NETFLIXNAMELOGO.png')} />
                </View>
                <TextInput
                    style={styles.txtinpone}
                    placeholder='Enter Email'
                    placeholderTextColor={'white'}
                    value={phone}
                    keyboardType='email-address'
                    onChangeText={(val) => setPhone(val)}
                />
                <View style={styles.viewtwo}>
                    <TextInput
                        style={{ color: 'white' }}
                        placeholder='Enter Password'
                        value={password}
                        placeholderTextColor={'white'}
                        secureTextEntry={!showPassword}
                        onChangeText={(val) => setPassword(val)}
                    />
                    <AntDesign
                        name={showPassword ? 'eyeo' : 'eye'}
                        size={40} onPress={shoPassword}
                        color={'white'}
                    />
                </View>
                <Button
                    style={{ margin: 10 }}
                    title={'Login'}
                    onPress={Signup}
                />
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    mainview: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent:'center'

    },
    txtinpone: {
        margin: 10,
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        width: '70%',
    },
    viewtwo: {
        margin: 10,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: 'white',
        width: '70%',
        justifyContent: 'space-between',
    },
    imge: {
        height: 70, width: 260
    },
})