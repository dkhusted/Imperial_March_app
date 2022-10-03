import React, { useState , useEffect} from 'react'; 
import { ScrollView, Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { Gyroscope } from 'expo-sensors';


export class Leveler extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        data :{
          //Kommer fra gyroscope som rad/s
            x: 0,
            y: 0,
            z: 0,},
        red: 0,
        green: 255,
        blue: 0,
        pi: 3.1415926535,
        tiltX:0,
        tiltY:0,
        subscribtion: null
      }
    }

    _fast = () => {
        Gyroscope.setUpdateInterval(16);
    }

    /*
    Gyroscope returnere data'en i rad/s, hvordan kan man konvertere det til grader?

    */
    _subscribe = () => {
        this._fast;
        this.setState({subscribtion: Gyroscope.addListener(gyroscopeData => 
            {this.setState({data: gyroscopeData});}
            )
        });
        
    }
    _unsubscribe = () => {
        this.state.subscribtion && this.state.subscribtion.remove();
        this.setState({subscribtion: null});
        this.setState({tiltX: 0});
        this.setState({tiltY: 0});
    }

    componentDidUpdate(prevProbs) {
      if(prevProbs.data !== this.state.data){
        if (this.state.data.x < 0 | this.state.data.x > 0){
          this.state.tiltX = this.state.tiltX + this.state.data.x * this.state.pi *2;
        }
        else{
          this.state.tiltX = this.state.tiltX; 
        }

        if (this.state.data.y < 0 | this.state.data.y > 0){
          this.state.tiltY = this.state.tiltY + this.state.data.y * this.state.pi * -2;
        }
        else{
          this.state.tiltY = this.state.tiltY;
        }
      }
    }

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.title}>
        x: {this.state.tiltX.toFixed(0)} grader
        </Text>
        <Text style={styles.title}>
        y: {this.state.tiltY.toFixed(0)} grader
        </Text>
      </View>
        <TouchableOpacity onPress={this.state.subscribtion ? this._unsubscribe: this._subscribe} style={{flex:2,
        backgroundColor: 'rgb(' + this.state.red + ',' + (this.state.tiltX  - this.state.tiltY ) + ',' + this.state.blue  + ')',
        alignItems: 'center',
      }}>
            <Text style={{fontSize: 40}}>{this.state.subscribtion ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex:1,
      flexDirection: 'column'
    },
    box1:{
      backgroundColor: '#fff',
      flex: 1
    },
    box2:{
      flex:2,
      backgroundColor: 'blue'
    },
    title: {
      color:'#321',
      fontSize: 40,
      borderBottomColor: "black",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button:{
      backgroundColor:'blue',
      position: 'absolute',
      top: 165,
      left: 0,
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
  