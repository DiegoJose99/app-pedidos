import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { size } from 'lodash';

export default function Pescados() {
  const navegacion = useNavigation();
  const addCar = () => {
    Alert.alert('Agregar al carrito', 'Se ha agregado al carrito', [
      {
        text: 'Aceptar'
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fondo.jpeg')} style={styles.backgroundImage}>
      </ImageBackground>
      <View style={{
        width: '100%',
        backgroundColor: '#C4C8CC',
        height: '7%',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <View style={{ width: '15%' }}>
          <TouchableOpacity onPress={() => navegacion.goBack()}>
            <Image
              source={require('../../assets/flecha-izquierda.png')}
              style={{ width: 30, height: 30, marginLeft: 13, tintColor: '#994E09' }}
              resizeMode='cover'
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '74%' }}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#994E09',
            textAlign: 'center'
          }}>Aguas</Text>
        </View>
        <View style={{ width: '20%', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navegacion.navigate('Carrito')}>
            <Image
              source={require('../../assets/carrito.png')}
              style={{ width: 30, height: 30, tintColor: '#994E09' }}
              resizeMode='cover'
            />
          </TouchableOpacity>
        </View>
      </View>


      <ScrollView style={{ paddingTop: '10%' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#994E09', fontSize: 55 }}>Aguas</Text>
        </View>
        <View style={{ flexDirection: 'row', top: 10, height: 165 }}>
          <View style={{ paddingLeft: 10 }}>
            <Image
              source={require('../../assets/Cevichee.jpg')}
              style={{ width: 150, height: 150, borderRadius: 20 }}
              resizeMode='cover'
            />
          </View>
          <View style={{ justifyContent: 'center', paddingLeft: 8 }}>
            <Text style={{ fontSize: 35, color: '#994E09', width: '120%' }}>Jamaica</Text>
            <Text style={{ paddingTop: '9%', fontSize: 25, color: '#994E09', width: '120%' }}>Cantidad: 1 lt</Text>
          </View>
        </View>
        <View style={{ marginTop: 50, margin: 10 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ paddingTop: '0%', fontSize: 35, color: '#994E09', width: '60%' }}>Precio unitario</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ paddingTop: '0%', fontSize: 25, color: '#994E09', width: '60%' }}>Total: </Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '10%' }}>
          <Button
            containerStyle={styles.containerIngresar}
            buttonStyle={styles.btnIngresar}
            title="Agregar al carrito"
            titleStyle={{
              fontWeight: 'bold',
              color: '#994E09',
              fontSize: 28,
              letterSpacing: -0.5750000000000001,
            }}
            onPress={() => addCar()}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
    top: '3.5%'
  },
  backgroundImage: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
    opacity: 0.1, // Opacidad de la imagen (0 - 1)
    backgroundColor: "#000000", // Color de fondo mientras carga la imagen
    top: '4%',
  },
  hearderStyle: {
    paddingLeft: 15,
    textAlign: 'right',
    paddingTop: '5%',
  },
  hearderImg: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15%',
  },
  hearderText: {
    paddingTop: '6%',
    paddingBottom: '4%',
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
  },
  secondContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15%',
  },
  iniciarSesion: {
    bottom: '40%',
    paddingBottom: '4%',
    fontSize: 60,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  inputStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
  inputContainer: {
    width: '89%',
    height: 49,
    borderWidth: 0,
    borderColor: 'rgba(151,151,151,1)',
    marginBottom: 20,
    // borderRadius: 5,

  },
  containerIngresar: {
    marginBottom: 60,
    top: '20%',
    // bottom:'30%',
    width: '65%',
    height: 50,
  },
  btnIngresar: {
    borderRadius: 20,
    backgroundColor: '#FBBF3E',
  },
  forgottenPassword: {
    color: 'rgba(151,158,181,1)',
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  inputContainer2: {
    width: '100%',
    height: 90,
    borderWidth: 1,
    borderColor: 'rgba(151,151,151,1)',
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#FBBF3E'
  },
  inputStyle2: {
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'red'
  },
});