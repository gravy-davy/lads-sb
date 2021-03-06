import React from 'react';
import { ImageBackground, StyleSheet, Text, Button, Alert, View } from 'react-native';
import { Audio } from "expo-av";
import {bgColor, buttonColor} from './appStyles'

let soundObject = new Audio.Sound();

function BurnsScreen({navigation}) {
    let buttonC = buttonColor.valueOf()
    return (
        <>
        <View style={{ flex: 1, backgroundColor: bgColor.valueOf()}}>
            <View style={{ flexDirection:"row" }}>
            <View style={styles.buttonFormatLeft}>
                <Button
                        title="miami 4 eva"
                        onPress={() => loadAudio(1)}
                        color = {buttonColor}
                    />
            </View>
            <View style={styles.buttonFormatRight}>
                <Button
                        title="break time"
                        onPress={() => loadAudio(2)}
                        color = {buttonColor}
                    />
            </View>
            </View>
            <View style={{ flexDirection:"row" }}>
            <View style={styles.buttonFormatLeft}>
                <Button
                        title="we back"
                        onPress={() => loadAudio(3)}
                        color = {buttonColor}
                    />
            </View>
            <View style={styles.buttonFormatRight}>
                <Button
                        title="beggin"
                        onPress={() => loadAudio(4)}
                        color = {buttonColor}
                    />
            </View>
            </View>
            <View style={{ flexDirection:"row" }}>
            <View style={styles.buttonFormatLeft}>
                <Button
                        title="need boost"
                        onPress={() => loadAudio(5)}
                        color = {buttonColor}
                    />
            </View>
            <View style={styles.buttonFormatRight}>
                <Button
                        title="ez dub"
                        onPress={() => loadAudio(6)}
                        color = {buttonColor}
                    />
            </View>
            </View>
            <View style={{ flexDirection:"row" }}>
            <View style={styles.buttonFormatLeft}>
                <Button
                        title="seniors"
                        onPress={() => loadAudio(7)}
                        color = {buttonColor}
                    />
            </View>
            <View style={styles.buttonFormatRight}>
                <Button
                        title="useless"
                        onPress={() => loadAudio(8)}
                        color = {buttonColor}
                    />
            </View>
            </View>
            <View style={{ flexDirection:"row" }}>
            <View style={styles.buttonFormatLeft}>
                <Button
                        title="bing"
                        onPress={() => loadAudio(9)}
                        color = {buttonColor}
                    />
            </View>
            <View style={styles.buttonFormatRight}>
                <Button
                        title="smoker cough"
                        onPress={() => loadAudio(10)}
                        color = {buttonColor}
                    />
            </View>
            </View>
        </View>
        </>
    );
}

async function loadAudio(soundID) {
    await soundObject.unloadAsync() // in case there is a sound already playing
    try {
        if(soundID == 1){ await soundObject.loadAsync(require("../assets/burns_miami4eva.mp4")) }
        else if(soundID == 2){ await soundObject.loadAsync(require("../assets/burns_1.mp4")) }
        else if(soundID == 3){ await soundObject.loadAsync(require("../assets/burns_weback.mp4")) }
        else if(soundID == 4){ await soundObject.loadAsync(require("../assets/burns_beggin.mp4")) }
        else if(soundID == 5){ await soundObject.loadAsync(require("../assets/burns_needboost.mp4")) }
        else if(soundID == 6){ await soundObject.loadAsync(require("../assets/burns_ezdub.mp4")) }
        else if(soundID == 7){ await soundObject.loadAsync(require("../assets/burns_seniors.m4a")) }
        else if(soundID == 8){ await soundObject.loadAsync(require("../assets/burns_useless.mp4")) }
        else if(soundID == 9){ await soundObject.loadAsync(require("../assets/burns_bing.mp4")) }
        else if(soundID == 10){ await soundObject.loadAsync(require("../assets/burns_smoker.m4a")) }
        else{ console.log("no shot ") };  
        console.log("sound loaded")
        playSound()
    } catch (error) {
      console.log(error);
    }
  };
  
  // PLAYS THE SOUND
  async function playSound()
  {
      console.log("sound is playing")
      await soundObject.playAsync()
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
      buttonFormatLeft:
      {
          width: '40%', 
          left: '50%', 
          paddingTop: '5%' 
      },
      buttonFormatRight:
      {
          //height: '10%', 
          width: '40%', 
          left: '75%',  
          paddingTop: '5%' 
      }
  })

export default BurnsScreen;