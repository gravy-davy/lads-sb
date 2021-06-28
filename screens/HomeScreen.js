import React from 'react';
import { ImageBackground, StyleSheet, Text, Button, Alert, View } from 'react-native';

// text #20e4f0

function HomeScreen({navigation}) {
    return (
    <>  
        <View style={{ flex: 1, backgroundColor: '#26283b'}}>
            <ImageBackground 
                style = {styles.backgroundLogo}
                source={require("../assets/cc_logo.png")}>
            </ImageBackground>      
            <View style={styles.buttonFormat}>
                <Button
                    title="Burns"
                    onPress={() => {navigation.navigate('Burns')}}
                    color = "#20e6f0"
                />
            </View>
            <View style={styles.buttonFormat}>
                <Button
                    title="Ramk"
                    onPress={() => Alert.alert('Coming soon!')}
                    color = "#20e6f0"
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