import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { size } from 'lodash';
import { SQLite } from 'expo-sqlite';

export default function Registrarme() {
  const navegacion = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [verPassword, setVerPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // const [parametros, setParametros] = useState({
  //   usuario: '',
  //   password: '',
  //   token: '',
  //   tipoUsuario: "1",
  // });
  // const onChange = (e, type) => {
  //   setParametros({ ...parametros, [type]: e.nativeEvent.text });
  // };
  const handlePress = () => {
    // Lógica que se ejecuta cuando se presiona el botón
    console.log('Botón presionado');
    navegacion.navigate('Menu')
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fondo.jpeg')} style={styles.backgroundImage}>
      </ImageBackground>
      <View style={styles.hearderImg}>
        <Image
          source={require('../assets/logo.png')}
          style={{ width: 330, height: 100, borderRadius: 20 }}
          resizeMode='cover'
        />
        {/* <Text style={styles.hearderText} allowFontScaling={false}> Mariscos {"\n"}              'El Tizoc'</Text> */}
      </View>
      <ScrollView>
        <View style={styles.secondContainer}>
          {/* <Image
            source={require('./assets/logo.png')}
            style={{ width: 140, height: 140, borderRadius: 140 }}
            resizeMode='cover'
          /> */}
          <Text style={styles.iniciarSesion} allowFontScaling={false}>Registro</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {/* <Text style={{ fontSize: 40, color: 'white' }}>Nombre</Text> */}
          <Input
            allowFontScaling={false}
            placeholder="Nombre"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent' ,height: 55}}
            placeholderTextColor='#994E09'
            selectionColor={'black'}
            autoCapitalize={'none'}
            // onChange={e => onChange(e, 'usuario')}
          />
          {/* <Text style={{ fontSize: 40, color: 'white' }}>Apellidos</Text> */}
          <Input
            allowFontScaling={false}
            placeholder="Apellidos"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent' ,height: 55}}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            // onChange={e => onChange(e, 'usuario')}
          />
          {/* <Text style={{ fontSize: 40, color: '#ffffff' }}>Teléfono</Text> */}
          <Input
            allowFontScaling={false}
            placeholder="Teléfono"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent' ,height: 55}}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
          />
          {/* <Text style={{ fontSize: 40, color: 'white' }}>Calle</Text> */}
          <Input
            allowFontScaling={false}
            placeholder="Calle"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent' ,height: 55}}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            // onChange={e => onChange(e, 'usuario')}
          />
          {/* <Text style={{ fontSize: 40, color: 'white' }}>Colonia</Text> */}
          <Input
            allowFontScaling={false}
            placeholder="Colonia"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent' ,height: 55}}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            // onChange={e => onChange(e, 'usuario')}
          />
          {/* <Text style={{ fontSize: 40, color: 'white' }}>Edad</Text> */}
          <Input
            allowFontScaling={false}
            placeholder="Edad"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent' ,height: 55}}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            // onChange={e => onChange(e, 'usuario')}
          />
          {/* <Text style={{ fontSize: 40, color: 'white' }}>Correo</Text> */}
          <Input
            allowFontScaling={false}
            placeholder="Correo"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent' ,height: 55}}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            // onChange={e => onChange(e, 'usuario')}
          />
          {/* <Text style={{ fontSize: 40, color: 'white' }}>Contraseña</Text> */}
          <Input
            allowFontScaling={false}
            placeholder="Contraseña"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent' ,height: 55}}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            // onChange={e => onChange(e, 'usuario')}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button
            allowFontScaling={false}
            containerStyle={styles.containerIngresar}
            buttonStyle={styles.btnIngresar}
            title="Registrarme"
            titleStyle={{
              fontWeight: 'bold',
              color: '#994E09',
              fontSize: 28,
              letterSpacing: -0.5750000000000001,
            }}
            onPress={() => handlePress()}
          />
        </View>
        {/* <View style={{ alignItems: 'center', paddingTop: '13%', backgroundColor: 'red' }}>
        </View> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    top: '4%',
  },
  hearderStyle: {
    // fontWeight: 'bold',
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
    color: '#994E09',
    fontWeight: 'bold',
  },
  inputStyle: {
    textAlign: 'center',
    fontSize: 25,
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
    backgroundColor: '#FCC756',
  },
  forgottenPassword: {
    color: 'rgba(151,158,181,1)',
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
