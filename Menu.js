import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';


//TODO: Should make icons for each component....maybe

export class MenuScreen extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      visible: false,
    }
  }

  closeMenu = () => {
    this.setState({visible: false});
  }

  openMenu = () => {
    this.setState({visible: true});
  }

  render() {

    return (
      <Provider>
        <View style={styles.container}>
          <Menu style={{width:400, height:300}}
            visible={this.state.visible}
            onDismiss={this.closeMenu}
            anchor={
              <Button onPress={this.openMenu} mode="outlined">
                Show menu
              </Button>
            }>
            <Menu.Item
              onPress={() => this.props.navigation.push('Counter')}
              title="Counter"
            />
            <Menu.Item
              onPress={() => this.props.navigation.navigate('Map')}
              title="Map"
            />
            <Menu.Item
              onPress={() => this.props.navigation.navigate('Leveler')}
              title="Leveler"
            />
          </Menu>
        </View>
      </Provider>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: 'center',
  },
});