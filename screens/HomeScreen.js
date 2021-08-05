import React from 'react';
import { ImageBackground, StyleSheet, Text, Button, Alert, View } from 'react-native';
import {bgColor, buttonColor} from './appStyles'

// text #20e4f0, color 20e6f0. color should be imported not hardcoded

function HomeScreen({navigation}) {
    return (
    <>  
        <View style={{ flex: 1, backgroundColor: bgColor.valueOf()}}>
            <ImageBackground 
                style = {styles.backgroundLogo}
                source={require("../assets/cc_logo.png")}>
            </ImageBackground>      
            <View style={styles.buttonFormat}>
                <Button
                    title="Burns"
                    onPress={() => {navigation.navigate('Burns')}}
                    color = {buttonColor}
                />
            </View>
            <View style={styles.buttonFormat}>
                <Button
                    title="Ramk"
                    onPress={() => Alert.alert('Coming soon!')}
                    color = {buttonColor}
                />
            </View>
        </View>
    </>  
    );
}

const styles = StyleSheet.create({
    backgroundLogo : 
    {
        aspectRatio: 10,
        position: 'relative',
        top: '25%'
    },
    buttonFormat:
    {
        paddingTop: '10%',
        top: '25%',
        position: 'relative',
        width: '30%', 
        alignSelf: 'center'
    }
})

export default HomeScreen;