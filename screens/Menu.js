import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { size } from 'lodash';

export default function Manu() {
    const navegacion = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fondo.jpeg')} style={styles.backgroundImage}>
        </ImageBackground>
        <View style={styles.hearderImg}>
          <Image
            source={require('../assets/Pics3.png')}
            style={{ width: 330, height: 100, borderRadius: 20 }}
            resizeMode='cover'
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', top:-30}}>
          <TouchableOpacity onPress={() => navegacion.navigate('Alimentos')}>
          <Image
            source={require('../assets/Cevichee.jpg')}
            style={{ width: 200, height: 200, borderRadius: 20 }}
            resizeMode='cover'
          />
          </TouchableOpacity>
          <Text style={{fontSize:40, color: '#994E09'}}>Alimentos</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center',top: 40}}>
        <TouchableOpacity onPress={() => navegacion.navigate('Bebidas')}> 
          <Image
            source={require('../assets/Cevichee.jpg')}
            style={{ width: 200, height: 200, borderRadius: 20 }}
            resizeMode='cover'
          />
          </TouchableOpacity>
          <Text style={{fontSize:40, color: '#994E09'}}>Bebidas</Text>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  backgroundImage: {
    position: "absolute",
    // top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
    opacity: 0.1, // Opacidad de la imagen (0 - 1)
    backgroundColor: "#000000", // Color de fondo mientras carga la imagen
    top:'4%',
  },
  hearderImg:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15%',
  },
});