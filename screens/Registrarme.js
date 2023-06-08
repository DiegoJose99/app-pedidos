import React, { useState, useRef } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { size } from 'lodash';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('dbMariscos.db');
const [errorMessage, setErrorMessage] = useState('');


const createTableUser = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS tdUsers (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, apellidos TEXT, telefono TEXT, calle TEXT, colonia TEXT, edad TEXT, correo TEXT, password TEXT)',
      [],
      () => {
        console.log('Table created successfully');
      },
      error => {
        console.log('Error creating table:', error);
      }
    );
  });
};
const getUsers = () => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM tdUsers',
      [],
      (_, result) => {
        const users = result.rows._array;
        console.log('Usuarios:', users);
      },
      (_, error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  });
};
const insertData = (nombre, apellidos, telefono, calle, colonia, edad, correo, password) => {
  if (nombre.trim() ==='' || apellidos.trim() ==='' || telefono.trim() ==='' || calle.trim() ==='' || colonia.trim() ==='' || edad.trim() ==='' || correo.trim() === '' || password.trim() === '') {
    // Verifica que el correo y la contraseña no estén vacíos
    setErrorMessage('Por favor, ingresa el usuario y la contraseña.');
    return;
  }
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO tdUsers (nombre, apellidos, telefono, calle, colonia, edad, correo, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [nombre, apellidos, telefono, calle, colonia, edad, correo, password],
      (_, result) => {
        console.log('Datos insertados correctamente');
      },
      (_, error) => {
        console.error('Error al insertar los datos', error);
      }
    );
  });
};

export default function Registrarme() {
  const navegacion = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [verPassword, setVerPassword] = useState(false);
  const [errors, setErrors] = useState({});
  //
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [calle, setCalle] = useState('');
  const [colonia, setColonia] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const CreateDb = () => {
    createTableUser();
    console.log('Botón presionado para crear la db y la tabla user');
  };

  const addUser = () => {
    console.log('Valores ingresados:', nombre, apellidos, telefono, calle, colonia, edad, correo, password);
    insertData(nombre, apellidos, telefono, calle, colonia, edad, correo, password);
    getUsers();
    Alert.alert('Registro con éxito', 'Se a registrado correctamente a la aplicación de "Mariscos El Tizoc". \n Inicie sesion con su correo y contraseña registrada.', [
      {
        text: 'Iniciar sesión',
        onPress: () => navegacion.navigate('Login')
      }
    ]);
    console.log('Agregar datos, const addUser');
  };

  const handlePress = () => {
    // Lógica que se ejecuta cuando se presiona el botón
    console.log('Botón presionado');
    // navegacion.navigate('Menu')
  };
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
      <ScrollView>
        <View style={styles.secondContainer}>
          <Text style={styles.iniciarSesion} allowFontScaling={false}>Registro</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Input
            allowFontScaling={false}
            placeholder="Nombre"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent', height: 55 }}
            placeholderTextColor='#994E09'
            selectionColor={'black'}
            autoCapitalize={'none'}
            onChangeText={setNombre}
          />
          <Input
            allowFontScaling={false}
            placeholder="Apellidos"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent', height: 55 }}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            onChangeText={setApellidos}
          />
          <Input
            allowFontScaling={false}
            placeholder="Teléfono"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent', height: 55 }}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            onChangeText={setTelefono}
          />
          <Input
            allowFontScaling={false}
            placeholder="Calle"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent', height: 55 }}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            onChangeText={setCalle}
          />
          <Input
            allowFontScaling={false}
            placeholder="Colonia"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent', height: 55 }}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            onChangeText={setColonia}
          />
          <Input
            allowFontScaling={false}
            placeholder="Edad"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent', height: 55 }}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            onChangeText={setEdad}
          />
          <Input
            allowFontScaling={false}
            placeholder="Correo"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent', height: 55 }}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            onChangeText={setCorreo}
          />
          <Input
            allowFontScaling={false}
            placeholder="Contraseña"
            style={styles.inputStyle}
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 2, borderBottomColor: '#FBBF3E', backgroundColor: 'transparent', height: 55 }}
            placeholderTextColor='#994E09'
            autoCapitalize={'none'}
            onChangeText={setPassword}
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
            onPress={() => addUser()}
          />
        </View>
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
