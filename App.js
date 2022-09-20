import React from 'react';
import { ScrollView, Text, View, StyleSheet, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Counter} from './Counter.js';
import {Map} from './Map.js';
import {MenuScreen} from './Menu.js'
import {Provider } from 'react-native-paper';


/*
TO DO
  - Add a screen with a map
    -Add gps functionality, use expo-location for longitude and latitude
    -Use Leaflet for the map functionality
  - Add a screen for displaying ML ?? TO be defined
  - Make context manager? Or something to manage the styles...getting tired of all that text

*/

class AppNavigation extends React.Component{

  render() {
    const Stack = createNativeStackNavigator();
    return(
      <Provider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen}/>
        <Stack.Screen name="Counter" component={Counter}/>
        <Stack.Screen name="Map" component={Map}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    );
  }

}

export default class App extends React.Component{
  render() {
  

    return (
      <AppNavigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer:{

  },
  logo: {
    width: 350,
    height: 160,
    marginBottom: 10,
  },
  title: {
    color:'#321',
    fontSize:18,
    marginHorizontal:40,
    padding: 40,
  },
  button:{
    backgroundColor:'blue',
    padding:20,
    borderRadius:5,
    fontSize:20,
    color: '#fff'
  },
  buttonText:{
    fontSize:20,
    color:'#fff'
  }
});
