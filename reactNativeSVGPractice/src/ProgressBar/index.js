import React, {useEffect, useRef, useState} from 'react';
import {StatusBar, StyleSheet, Text, View, Animated} from 'react-native';

const Progress = ({step, steps, height}) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    //-width + width * step/steps
    //Tinh progress dựa theo width và step
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <>
      <Text
        style={{
          fontFamily: 'Menlo',
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 8,
        }}>
        {step}%/{steps}%
      </Text>
      <View
        onLayout={e => {
          // lấy width View
          console.log( e.nativeEvent.layout.width);
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: height,
          overflow: 'hidden',
        }}>
        <Animated.View
          style={{
            height,
            borderRadius: height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            transform:[{
              translateX:animatedValue
            }]
          }}></Animated.View>
      </View>
    </>
  );
};

export default function ProgressBar() {
 const [index, setIndex] = useState(0)

 useEffect(()=>{
    setTimeout(()=>{
      setIndex(20)
    },2000)
    setTimeout(()=>{
      setIndex(60)
    },4000)
    setTimeout(()=>{
      setIndex(100)
      setTimeout(()=>{
        console.log('Move')
      },1000)
    },6000)
  

   },[])

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Progress step={index} steps={100} height={20}></Progress>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
});
