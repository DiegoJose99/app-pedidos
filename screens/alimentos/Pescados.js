import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { size } from 'lodash';

export default function Pescados() {
    const navegacion = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fondo.jpeg')} style={styles.backgroundImage}>
            </ImageBackground>
            {/* <View style={styles.hearderImg}>
        <Image
          source={require('../assets/logo.png')}
          style={{ width: 330, height: 100, borderRadius: 20 }}
          resizeMode='cover'
        />
      </View> */}

            <ScrollView style={{paddingTop:'35%'}}>
                {/* <View> */}
                <View style={{ flexDirection: 'row', top: 10, height: 165 }}>
                    <View>
                        <Image
                            source={require('../../assets/Cevichee.jpg')}
                            style={{ width: 150, height: 150, borderRadius: 20 }}
                            resizeMode='cover'
                        />
                        {/* <Text style={{ fontSize: 40, color: 'white', backgroundColor: 'green' }}>Pescados</Text> */}
                    </View>
                    <View style={{ justifyContent: 'center', paddingLeft: 8}}>
                        <Text style={{ fontSize: 35, color: '#994E09', width: '98%' }}>Pescados</Text>
                        <Text style={{ paddingTop: '9%', fontSize: 25, color: '#994E09', width: '90%' }}>Cantidad: 250grs</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', height: 80 }}>
                    <Text style={{ fontSize: 35, color: '#994E09', }}>Comentarios</Text>
                </View>
                <View style={{ top: 0, justifyContent: 'center', alignItems: 'center' }}>
                    <Input
                        allowFontScaling={false}
                        placeholder="Agrega un comentario sobre tu pedido."
                        placeholderTextColor={'#994E09'}
                        style={{ textAlign: 'center', fontSize: 18, height: 88 }}
                        selectionColor={'#3D5CA4'}
                        containerStyle={{
                            width: '100%',
                            height: 90,
                            borderWidth: 1,
                            borderColor: 'rgba(151,151,151,1)',
                            marginBottom: 20,
                            borderRadius: 5,
                            backgroundColor: '#FBBF3E',
                        }}
                        inputContainerStyle={{ borderBottomWidth: 0, alignItems: 'center', justifyContent: 'center' }}
                        autoCapitalize={'none'}
                        inputStyle={{ textAlign: 'center', textAlignVertical: 'center' }} // Agregamos textAlignVertical
                    />
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ paddingTop: '0%', fontSize: 25, color: '#994E09', width: '60%' }}>Cantidad: 250grs</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ paddingTop: '0%', fontSize: 25, color: '#994E09', width: '60%' }}>Total: </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '3%' }}>
        {/* <TouchableOpacity> */}
          <Button
            allowFontScaling={false}
            containerStyle={styles.containerIngresar}
            buttonStyle={styles.btnIngresar}
            title="Pagar"
            titleStyle={{
              fontWeight:'bold',
              color: '#994E09',
              fontSize: 28,
              letterSpacing: -0.5750000000000001,
            }}
            onPress={() => navegacion.navigate('Pago')}
          />
          {/* </TouchableOpacity> */}
        </View>
        {/* </View> */}
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
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
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