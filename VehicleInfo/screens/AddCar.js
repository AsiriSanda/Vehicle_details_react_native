import { View, Text, StyleSheet, Image, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextArea, NativeBaseProvider, Input, Button, VStack } from "native-base";
import { launchImageLibrary } from 'react-native-image-picker';
import { storeCar } from './StoreCar';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AddCar() {


    const [carObj, setCarObj] = useState({
        regNumber: '',
        brand: '',
        date: '',
        location: '',
        image: '',
        price: '',
    });

    useEffect(() => {
        setCarObj(() => {
            return {
                ...carObj
            };
        });
    }, []);


    const saveCar = () => {
        fetch('http://192.168.1.105:4000/cars', {
            method: 'POST',
            body: JSON.stringify(carObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => { Alert.alert("Vehicle Saved Successfully !") })
            .catch((err) => { Alert.alert("Error occured !") })
    }

    return (
        <NativeBaseProvider>
            <VStack space={4} alignItems="center" mt="15%">

                <TextInput style={styles.input1} onChangeText={e => { setCarObj(prevState => { return { ...carObj, regNumber: e, }; }); }} value={carObj.regNumber} placeholder='Registration Number' placeholderTextColor="black"/>
                <TextInput style={styles.input1} onChangeText={e => { setCarObj(prevState => { return { ...carObj, brand: e, }; }); }} value={carObj.brand} placeholder='Brand' w="80%" placeholderTextColor="black"/>
                <TextInput style={styles.input1} onChangeText={e => { setCarObj(prevState => { return { ...carObj, location: e, }; }); }} value={carObj.location} placeholder='location' w="80%" placeholderTextColor="black" />
                <TextInput style={styles.input1} onChangeText={e => { setCarObj(prevState => { return { ...carObj, price: e, }; }); }} value={carObj.price} placeholder='Price' w="80%" placeholderTextColor="black"/>
                <TextInput style={styles.input1} onChangeText={e => { setCarObj(prevState => { return { ...carObj, date: e, }; }); }} value={carObj.date} placeholder='Date' w="80%" placeholderTextColor="black"/>
                <Button size="md" backgroundColor={'#9ccc65'} borderRadius={70} width={'50%'} onPress={async e => {
                    const image = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 })
                    let images = image.assets
                    images.forEach(e => {
                        let uri = e.uri
                        console.log(uri)
                        setCarObj(prevState => {
                            return {
                                ...carObj,
                                image: uri,
                            };
                        });
                    })
                    }}>Vehicle Image </Button>
                <Button size="md" backgroundColor={'#1976d2'} borderRadius={70} width={'50%'} onPress={saveCar}> Save </Button>

            </VStack>
        </NativeBaseProvider>
    )
    
}
const styles = StyleSheet.create({
    input1: {
        borderWidth: 1,
        width: '80%',
        borderRadius: 20,
        color: 'black',

    },
});