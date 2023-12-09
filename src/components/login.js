import { View, TouchableOpacity } from 'react-native'
import { TextInput, Text, Button } from 'react-native-paper';
import { Image } from '@rneui/base';
import React from 'react'
import { Kanit_400Regular, Kanit_300Light } from "@expo-google-fonts/kanit";
import { useFonts } from "expo-font";

export default function Login({ navigation }) {
    const [showPass, setShowPass] = React.useState(false);    

    const [fontsLoaded] = useFonts({
        Kanit_400Regular,
        Kanit_300Light,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                paddingVertical: 60,
                backgroundColor: '#5F6F52',
            }}
        >
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: 'flex-end',
                }}
            >
                  <Image 
                        style={{
                            width: 400, 
                            height: 850,
                            opacity: 0.4,
                        }}
                        source={require('../images/cover.gif')}
                />

            </View>
                <Text
                    style={{
                        padding: 20,
                        fontSize: 30,
                        textAlign: 'left',
                        fontFamily: 'Kanit_400Regular',
                        color: '#d294eb',
                        
                    }}
                >Enjoy the world of entertainment.</Text>
                <Text
                    style={{
                        padding: 20,
                        fontSize: 20,
                        textAlign: 'left',
                        fontFamily: 'Kanit_400Regular',
                        color: '#d294eb',
                    }}
                >Sign In</Text>
                
            
            <View
                style={{
                    paddingTop: 0,
                    paddingHorizontal: 15,
                    marginTop: 10,
                }}
            >
                <TextInput 
                    mode='outlined'
                    placeholder='Email'
                    style={{
                        marginVertical: 25,
                    }}
                    error={false}
                    theme={{ fonts: { regular: 'Apple Color Emoji' } }}
                    
                />
                <TextInput
                    mode='outlined'
                    placeholder='Password'
                    secureTextEntry={!showPass}
                    right={
                        <TextInput.Icon
                            icon={showPass ? "eye-off" : "eye"}
                            onPress={() => setShowPass(!showPass)}
                        />
                    }
                    style={{
                        marginVertical: 1,
                        fontFamily: 'Kanit_300Light',
                    }}
                />
            </View>
            <View
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                    marginRight: 35,
                }}
            >
               
            </View>
            <View
                style={{
                    paddingHorizontal: 80,
                    paddingVertical: 20,
                }}
            >
                <Button 
                    mode="contained"
                    icon="login"
                    buttonColor='#d294eb'
                    textColor='#FEFAE0'
                    style={{
                        padding: 3,
                        marginVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}
                    labelStyle={{
                        fontSize: 30,
                    }}
                    onPress={() => navigation.navigate("HomePage")}
                >
                    <Text style={{width: '60%', color: '#FEFAE0', fontSize: 18, fontFamily: 'Kanit_300Light'}}>Login</Text>
                </Button>
                <Button 
                    mode="outlined"
                    icon="door"
                    textColor='#d294eb'
                    style={{
                        borderColor:'#d294eb',
                        padding: 3,
                        marginVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}
                    labelStyle={{
                        fontSize: 30,
                    }}
                    onPress={() => navigation.pop()}
                >
                    <Text style={{width: '60%', color: '#FEFAE0', fontSize: 18, fontFamily: 'Kanit_300Light'}}>Exit</Text>
                </Button>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: 15,
                }}
            >
                
                <TouchableOpacity
                    onPress={() => navigation.navigate("Recovery")}
                >
                    <View style={{flexDirection:"row"}}>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            marginHorizontal: 2,
                            fontFamily: 'Kanit_300Light',
                            fontSize: 16,
                        }}
                    >Forgot your</Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: '#d294eb',
                            marginHorizontal: 2,
                            fontFamily: 'Kanit_300Light',
                            fontSize: 16,
                        }}
                    >Password</Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: '#d294eb',
                            marginHorizontal: 2,
                            fontSize: 15,
                        }}
                    >?</Text>


                    </View>

                </TouchableOpacity>
                <Text
                    style={{
                        textAlign: 'center',
                        color: '#FEFAE0',
                        marginHorizontal: 3,
                        fontFamily: 'Kanit_300Light',
                        fontSize: 15,
                    }}
                >New to Netflixxxxx?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: '#d294eb',
                            marginHorizontal: 3,
                            fontFamily: 'Kanit_300Light',
                            fontSize: 17,
                        }}
                    >Sign up now</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}