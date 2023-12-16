import * as react from 'react';
import { View, Text, TextInput } from 'react-native';


const LoginScreen = () => {
    const loginButton = () => {

    }

    return (
        <View>
            <Text>Login</Text>
            <View>
                <Text>username</Text>
                <TextInput placeholder='Enter your name'/>
                <Text>password</Text>
                <TextInput placeholder='Enter password'/>

            </View>
        </View>
    );
}