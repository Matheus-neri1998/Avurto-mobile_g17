import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Home extends Component {
  render (){
      return(
        <View style = {styles.home}>
        <Text>Home</Text>
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
});