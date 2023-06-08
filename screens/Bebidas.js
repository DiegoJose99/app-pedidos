import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { size } from 'lodash';

export default function Bebidas() {
  const navegacion = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fondo.jpeg')} style={styles.backgroundImage}>
      </ImageBackground>
      <View style={{
                width: '100%',
                backgroundColor: '#C4C8CC',
                height: '7%',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{ width: '15%' }}>
                    {/* <Text style={{ fontSize: 25, justifyContent: 'center', alignItems: 'center', height: '100%' }}>header</Text> */}
                    <TouchableOpacity onPress={() => navegacion.goBack()}>
                        <Image
                            source={require('../assets/flecha-izquierda.png')}
                            style={{ width: 30, height: 30, marginLeft: 13, tintColor:'#994E09' }}
                            resizeMode='cover'
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '74%' }}>
                    <Text style={{
                        fontSize: 25,
                        // backgroundColor:'red',
                        fontWeight: 'bold',
                        color: '#994E09',
                        textAlign: 'center'
                    }}>Bebidas</Text>
                </View>
                <View style={{ width: '20%', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => navegacion.navigate('Carrito')}>
                        <Image
                            source={require('../assets/carrito.png')}
                            style={{ width: 30, height: 30, tintColor:'#994E09' }}
                            resizeMode='cover'
                        />
                    </TouchableOpacity>
                </View>
            </View>
      <View style={styles.hearderImg}>
        <Image
          source={require('../assets/Pics3.png')}
          style={{ width: 330, height: 100, borderRadius: 20 }}
          resizeMode='cover'
        />
      </View>

      <ScrollView>
      <View style={{ top: 80, flexDirection: 'row', alignItems: 'center',justifyContent: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', left: -20 }}>
          <TouchableOpacity onPress={() => navegacion.navigate('Cervezas')}>
          <Image
            source={require('../assets/michelada.jpeg')}
            style={{ width: 150, height: 150, borderRadius: 20 }}
            resizeMode='cover'
          />
          </TouchableOpacity>
          <Text style={{ fontSize: 40, color: '#994E09', textAlign: 'center' }}>Cervezas</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', left: 20 }}>
          <TouchableOpacity onPress={() => navegacion.navigate('Refrescos')}>
          <Image
            source={require('../assets/Cevichee.jpg')}
            style={{ width: 150, height: 150, borderRadius: 20}}
            resizeMode='cover'
          />
          </TouchableOpacity>
          <Text style={{ fontSize: 40, color: '#994E09', textAlign: 'center' }}>Refrescos</Text>
        </View>
      </View>

      {/* <View style={{ top: 50, flexDirection: 'row', alignItems: 'center',justifyContent: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', left: -20 }}>
          <Image
            source={require('../assets/Cevichee.jpg')}
            style={{ width: 150, height: 150, borderRadius: 20, marginBottom: 10 }}
            resizeMode='cover'
          />
          <Text style={{ fontSize: 40, color: 'white', textAlign: 'center' }}>Ali</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', left: 20 }}>
          <Image
            source={require('../assets/Cevichee.jpg')}
            style={{ width: 150, height: 150, borderRadius: 20, marginBottom: 10 }}
            resizeMode='cover'
          />
          <Text style={{ fontSize: 40, color: 'white', textAlign: 'center' }}>Beb</Text>
        </View>
      </View> */}

      <View style={{ top: '25%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('./assets/Cevichee.jpg')}
            style={{ width: 150, height: 150, borderRadius: 20, left:-20}}
            resizeMode='cover'
          />
          <Text style={{fontSize:40, color: 'white'}}>Alimentos</Text>
        </View> */}
        <View style={{ justifyContent: 'center', alignItems: 'center',marginBottom:'25%' }}>
          <TouchableOpacity onPress={() => navegacion.navigate('Aguas')}>
          <Image
            source={require('../assets/Cevichee.jpg')}
            style={{ width: 150, height: 150, borderRadius: 20 }}
            resizeMode='cover'
          />
          </TouchableOpacity>
          <Text style={{ fontSize: 40, color: '#994E09' }}>Aguas</Text>
        </View>
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
    // top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
    opacity: 0.1, // Opacidad de la imagen (0 - 1)
    backgroundColor: "#000000", // Color de fondo mientras carga la imagen
    top: '4%',
  },
  hearderStyle: {
    // fontWeight: 'bold',
    paddingLeft: 15,
    textAlign: 'right',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: '5%',
  },
  hearderImg: {
    // fontWeight: 'bold',
    // paddingLeft: 15,
    // textAlign: 'right',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: '15%',
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
});