import React from 'react';
import { ImageBackground, StyleSheet, Text, Button, Alert, View } from 'react-native';
import BurnsScreen from './BurnsScreen';

function HomeScreen({navigation}) {
    return (
    <>  
        <View style={styles.buttonFormat}>
            <Button
                title="Burns"
                onPress={() => {navigation.navigate('Burns')}}
                color = "#9900cc"
            />
        </View>
        <View style={styles.buttonFormat}>
            <Button
                title="Ramk"
                onPress={() => Alert.alert('Ramk has been selected.')}
                color = "#9900cc"
            />
        </View>
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

export default HomeScreen;