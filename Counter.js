import React, { useState , useEffect} from 'react'; //<--- useEffect has HAS HAS TOOOOOOOOOOOOOOO be imported from react. Otherwise we get something..else...
import { ScrollView, Text, View, StyleSheet, Button, TextInput } from 'react-native';

//Parent because MenuScreen class 'acts like a child' -_-
export class Counter extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        count: 0,
        fonSize: 25,
        usrBGcolour: '#ffdab9'
      }
    }
 
  //decrease counter
  decrease = () => {
    this.setState({count: this.state.count - 1});
  }
  //reset counter 
  reset = () =>{
    this.setState({count: 0});
  }
  
  componentDidUpdate() {
    if((this.state.count % 3) == 0)
      this.state.fonSize = this.state.count;
    else
      this.state.fonSize = 30;
  }

  render() {

  return (
      <View style={{backgroundColor: this.state.usrBGcolour, flex:1}}>
        <Text style={{color:"#ffdab9", fontSize: this.state.fonSize}}>Lets party!!!</Text>
        <Button style={styles.button} onPress={() => this.setState({count: this.state.count + 1})} title="I increase!"/>
        <Button style={styles.button} onPress={this.decrease} title="I decrease!"/>
        <Button style={styles.button} onPress={this.reset} title="I reset!"/>
        <Text style={styles.title}>Count={this.state.count}</Text>
        <Text style={styles.title}>Current fontSize={this.state.fonSize}</Text>
        <TextInput style={{height:40, width:150, borderWidth:1, borderColor:'rgb(255,255,255', backgroundColor:'#fff'}} 
        placeholder="Desired background color" onChangeText={(newText) => this.setState({usrBGcolour: newText})}
        defaultValue={this.state.usrBGcolour}>
        </TextInput>
      </View>
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
  