import { View, Text, StyleSheet, Image, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { VStack, TextArea, NativeBaseProvider, Button, TextField } from "native-base";
import { launchImageLibrary } from 'react-native-image-picker';

export default function ManageCar() {


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


    const updateCar = () => {
        fetch('http://192.168.1.105:4000/cars',
            {
                method: 'PUT',
                body: JSON.stringify(carObj),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
            },
        )
            .then(res => {
                console.log(res);
                Alert.alert('Car Updated Successfully');
            })
            .catch(res => {
                console.log(res);
                Alert.alert('Car Updating is Unsuccessful');
            })
    }

    const deleteCar = () => {
        fetch(
            'http://192.168.1.105:4000/cars', {
            method: 'DELETE',
        },)
            .then(res => {
                console.log(res);
                Alert.alert('Car Deleted Successfully');
            })
            .catch(res => {
                console.log(res);

                Alert.alert('Car Deleting is Unsuccessful');
            })
    }




    return (
        <NativeBaseProvider>
            <VStack space={4} alignItems="center" mt="15%">
                <TextInput style={styles.input1} onChangeText={e => { setCarObj(prevState => { return { ...carObj, regNumber: e, }; }); }} value={carObj.regNumber} placeholder='Registration Number' placeholderTextColor="black" />
                <TextInput style={styles.input1} onChangeText={e => { setCarObj(prevState => { return { ...carObj, brand: e, }; }); }} value={carObj.brand} placeholder='Brand' w="80%" placeholderTextColor="black" />
                <TextInput style={styles.input1} onChangeText={e => { setCarObj(prevState => { return { ...carObj, location: e, }; }); }} value={carObj.location} placeholder='location' w="80%" placeholderTextColor="black" />
                <TextInput style={styles.input1} onChangeText={e => { setCarObj(prevState => { return { ...carObj, price: e, }; }); }} value={carObj.price} placeholder='Price' w="80%" placeholderTextColor="black" />
                <TextInput style={styles.input1} onChangeText={e => { setCarObj(prevState => { return { ...carObj, date: e, }; }); }} value={carObj.date} placeholder='Date' w="80%" placeholderTextColor="black" />
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
                }}>Vehicle Image Update </Button>

                <Button size="md" backgroundColor={'#ffd54f'} borderRadius={70} width={'50%'} onPress={updateCar}> Update </Button>
                <Button size="md" backgroundColor={'#ff5722'} borderRadius={70} width={'50%'} onPress={deleteCar} > Delete </Button>

            </VStack>
        </NativeBaseProvider >
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