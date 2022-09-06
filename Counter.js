import React, { useState , useEffect} from 'react'; //<--- useEffect has HAS HAS TOOOOOOOOOOOOOOO be imported from react. Otherwise we get something..else...
import { ScrollView, Text, View, StyleSheet, Button, TextInput } from 'react-native';


const Counter = () => {
    const [count, setCounter] = useState(0); //<--- 0 means the state variable is of type int. True would mean boolean
    const [fonSize, setFontSize] = useState(0);
    const [usrBGcolour, setusrBGcolour] = useState('');
      //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
  };
  
  useEffect(() => {
    setFontSize(25);
    setusrBGcolour('#ffdab9')
  },[])

  return (
      <View style={{backgroundColor:usrBGcolour, flex:2}}>
        <Text style={{color:"#ffdab9", fontSize: fonSize}}>Lets party!!!</Text>
        <Button style={styles.button} onPress={increase} title="I increase!"/>
        <Button style={styles.button} onPress={decrease} title="I decrease!"/>
        <Button style={styles.button} onPress={reset} title="I reset!"/>
        <Text style={styles.title}>Count={count}</Text>
        <Text style={styles.title}>Current fontSize={fonSize}</Text>
        <TextInput style={{height:40, width:150, borderWidth:1, borderColor:'rgb(255,255,255'}} placeholder="Desired background color" onChangeText={newText => setusrBGcolour(newText)}
        defaultValue={usrBGcolour}>

        </TextInput>
      </View>
    );
  }

  export default Counter;


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
  