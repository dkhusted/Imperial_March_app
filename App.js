import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Button } from 'react-native';
import Counter from './Counter';

const App = () => {

  return (  
    <View style={styles.container}>
      <Counter />
    </View>
  );
}

export default App;

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
