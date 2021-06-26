import React from 'react';
import { ImageBackground, StyleSheet, Text, Button, Alert, View } from 'react-native';

function HomeScreen({navigation}) {
    return (
    <>  
        <ImageBackground 
            style = {styles.backgroundLogo}
            source={require("../assets/corkcity.png")}>
        </ImageBackground>     
        <View style={styles.buttonFormat}>
            <Button
                title="Burns"
                onPress={() => {navigation.navigate('Burns')}}
                color = "#e62e00"
            />
        </View>
        <View style={styles.buttonFormat}>
            <Button
                title="Ramk"
                onPress={() => Alert.alert('Ramk has been selected.')}
                color = "#e62e00"
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