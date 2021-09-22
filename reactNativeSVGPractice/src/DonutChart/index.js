import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Donut from './Donut'

export default function DonutChart() {
    return (
        <View style={styles.container}>
           <Donut></Donut>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems:'center',
        padding: 8,

      },
})
