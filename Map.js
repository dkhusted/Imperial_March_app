import React, { useState , useEffect} from 'react'; //<--- useEffect has HAS HAS TOOOOOOOOOOOOOOO be imported from react. Otherwise we get something..else...
import { ScrollView, Text, View, StyleSheet, Button, TextInput } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';

export class Map extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      latitude: 55.676098,
      longitude: 12.568337,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      errorMessage: "",
    }
  }

  updateState(location) {
    this.setState({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  

  async componentDidMount() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      this.updateState(location);
    } catch (error) {
      console.log(error);
    }
  }


    render(){
        return (
          <View style={styles.container}>
          <MapView
            style={{ alignSelf: 'stretch', height: '100%' }}
            showsUserLocation={true}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02
            }}
            >
              <Marker coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02
              }} title='Thats me !'/>
            </MapView>
        </View>
        );
    }
  }

  export default Map;


const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      fontSize: 20,
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
  