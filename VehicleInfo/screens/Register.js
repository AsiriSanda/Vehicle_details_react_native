import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.car}
        source={require('../assets/car.png')}
      />
      <TextInput style={styles.input1} placeholder="UserName" placeholderTextColor = "black"/>
      <TextInput style={styles.input2} placeholder="Password" placeholderTextColor = "black"/>
      <TextInput style={styles.input2} placeholder="Email" placeholderTextColor = "black"/>
      <TouchableOpacity
        style={styles.btn}
      >
        <Text style={{color:'#ffff',fontSize:20}}>Register Now</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  input1: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 100,
    color:'black'
    
  },
  input2: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 100,
    color:'black'
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  car: {
    marginTop: '15%',
    width: '100%',
    height:'40%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn:{
    width:'60%',
    padding:5,
    backgroundColor:'#1976d2',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:'3%',
    borderRadius:100

}

});