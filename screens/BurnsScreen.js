import React from 'react';
import { ImageBackground, StyleSheet, Text, Button, Alert, View } from 'react-native';

function BurnsScreen({navigation}) {
    return (
    <> 
        <Text>Burns screen</Text>
    </>  
    );
}

const styles = StyleSheet.create({
    backgroundLogo : 
    {
        width: undefined,
        height: undefined,
        aspectRatio: 1
    },
    titleText :
    {
        color : 'purple',
        textAlign : 'center'
    },
    buttonFormat:
    {
        height: '10%', 
        width: '50%', 
        left: '25%', 
        right: '25%', 
        paddingTop: '5%' 
    }
})

export default BurnsScreen;