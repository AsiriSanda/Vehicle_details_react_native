import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function LogIn({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.car}
                source={require('../assets/car.png')}
            />
            <TextInput style={styles.input1} placeholder="UserName" placeholderTextColor="black"/>
            <TextInput style={styles.input2} placeholder="Password" placeholderTextColor="black"/>
            <TouchableOpacity
                style={styles.btn} onPress={()=>{navigation.navigate("Home")}}
            >
                <Text style={{color: '#ffff', fontSize: 20}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn} onPress={()=>{navigation.navigate("Register")}}
            >
                <Text style={{color: '#ffff', fontSize: 20}}>Register</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    input1: {
        marginTop: '5%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 100,
        color: 'black',

    },
    input2: {
        marginTop: '5%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 100,
        color: 'black',
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    car: {
        marginTop: '15%',
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btn: {
        width: '60%',
        padding: 5,
        backgroundColor: '#1976d2',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3%',
        borderRadius: 100,

    },

});
