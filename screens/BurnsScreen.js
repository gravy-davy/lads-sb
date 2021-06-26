import React from 'react';
import { ImageBackground, StyleSheet, Text, Button, Alert, View } from 'react-native';
import { Audio } from "expo-av";

let soundObject = new Audio.Sound();

function BurnsScreen({navigation}) {
    return (
        <>
        <View style={{ flexDirection:"row" }}>
          <View style={styles.buttonFormatLeft}>
              <Button
                      title="miami 4 eva"
                      onPress={() => loadAudio(1)}
                      color = "#9900cc"
                  />
          </View>
          <View style={styles.buttonFormatRight}>
              <Button
                      title="omg"
                      onPress={() => loadAudio(2)}
                      color = "#9900cc"
                  />
          </View>
        </View>
        </>
    );
}

async function loadAudio(soundID) {
    await soundObject.unloadAsync() // in case there is a sound already playing
    console.log("ok lemme try to load this sound with id = " + soundID)
    try {
        if(soundID == 1){ console.log("miami4eva"), await soundObject.loadAsync(require("../assets/burns_miami4eva.mp4")) }
        else if(soundID == 2){ console.log("omg"), await soundObject.loadAsync(require("../assets/ramk_omg.mp4")) }
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