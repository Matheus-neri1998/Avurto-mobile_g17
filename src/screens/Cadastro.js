import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Cadastro extends Component {
  render (){
      return(
        <View style = {styles.main}>
        <Text>Cadastro</Text>
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