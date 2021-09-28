import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
export default function LottieAnimation() {
    return (
        <View   style={styles.container}>
         <LottieView
         style={styles.animationStyles}
         source={require('../animation/404-ani.json')} 
         autoPlay
          loop />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    },
    animationStyles:
    {
    }
})
