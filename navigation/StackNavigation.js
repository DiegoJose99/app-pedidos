import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Login from '../screens/Login';
import Registro from '../screens/Registrarme';
import Menu from '../screens/Menu';
import Alimentos from '../screens/Alimentos';
import Bebidas from '../screens/Bebidas';
import Caldos from '../screens/alimentos/Caldos';
import Pescados from '../screens/alimentos/Pescados';
import Camarones from '../screens/alimentos/Camarones';
import Pulpos from '../screens/alimentos/Pulpos';
import Ceviche from '../screens/alimentos/Ceviche';
import Cervezas from '../screens/bebidas/Cervezas';
import Refrescos from '../screens/bebidas/Refrescos';
import Aguas from '../screens/bebidas/Aguas';
import Pago from '../screens/Pago';
import Direccion from '../screens/Direccion';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                name='Login'
                component={Login}
                />
                <Stack.Screen
                name='Registro'
                component={Registro}
                />
                <Stack.Screen
                name='Menu'
                component={Menu}
                />
                <Stack.Screen
                name='Alimentos'
                component={Alimentos}
                />
                <Stack.Screen 
                name='Caldos'
                component={Caldos}/>
                <Stack.Screen 
                name='Pescados'
                component={Pescados}/>
                <Stack.Screen
                name='Camarones'
                component={Camarones}/>
                <Stack.Screen 
                name='Pulpos'
                component={Pulpos}/>
                <Stack.Screen 
                name='Ceviche'
                component={Ceviche}/>
                <Stack.Screen 
                name='Bebidas'
                component={Bebidas}/>
                <Stack.Screen 
                name='Cervezas'
                component={Cervezas}/>
                <Stack.Screen 
                name='Refrescos'
                component={Refrescos}/>
                <Stack.Screen 
                name='Aguas'
                component={Aguas}/>
                <Stack.Screen 
                name='Pago'
                component={Pago}/>
                <Stack.Screen 
                name='Direccion'
                component={Direccion}/>
            </Stack.Navigator>        
        </NavigationContainer>
    )
}

export default StackNavigation