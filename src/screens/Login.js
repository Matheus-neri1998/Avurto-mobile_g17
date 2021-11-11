import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

export default function Login() {

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Image
        source={require('../../assets/img/fundo-listrado-2.png')}
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.img}>

        <Image
          style={styles.logo}
          source={require('../../assets/img/Vector.png')}
        />
      </View>

      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/img/avurto-pretof.png')}
          style={styles.logo}
        />
      </View>


      {/* <View style={styles.img2}>
         <Image
         source={require('../../assets/img/Vector.png')}
         style={styles.logo}
        />
        </View> */}

      <View style={styles.containerText}>
        <Text> Faça o Login </Text>
      </View>

      <View style={styles.containerText2}>
        <Text> Não perca essa oporturnidade, e entre na Avurto pra saber mais sobre nossos cursos! </Text>
      </View>

      <View style={styles.containerText3}>
        <Text> Seu Email </Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu Email*"
          autoCorrect={false}
          onChangeText={() => { }}
        />
      </View>

      <View style={styles.containerText4}>
        <Text> Sua Senha </Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite a sua Senha*"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}> Entrar </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.btnEsqueci}>
          <Text style={styles.esqueciText}>Esqueci Minha Senha</Text>
        </TouchableOpacity> */}

      </View>
    </KeyboardAvoidingView>
  );
} // Fim da Function Login

const styles = StyleSheet.create({
  background: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },

  logo: {
    width: 175,
    height: 98
  },

  img: { // img 1 - vector //
    position: 'absolute',
    left: -13.77,
    right: 72.95,
    top: 4.62,
    bottom: 72.55,
  },

  containerLogo: { // Logo - Avurto //
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 1
  },

  containerText: { // Título //
    flex: 1,
    fontSize: 30,
    marginTop: '100px',
    fontWeight: 'Bold',
    fontFamily: 'Mohave',
    fontStyle: 'Normal',
    color: 'rgba(0, 0, 0, 0.7)'
  },

  containerText2: { // Subtítulo //
    display : 'flex',
    fontSize: 15,
    fontStyle: 'Normal',
    fontWeight: 'Bold',
    fontFamily: 'Mohave',
    color: 'rgba(0, 0, 0, 0.64)'
  },

  containerText3: { // Seu Email //
    display : 'flex',
    fontSize: 15,
    color: '#000000',
    fontStyle: 'Normal',
    fontfamily: 'Signika',
  },

  containerText4: { // Sua Senha //
    flex: 1,
    fontSize: 15,
    color: '#000000',
    fontStyle: 'Normal',
    fontfamily: 'Signika',
  },

  input: {
    backgroundColor: '#FFF',
    width: '100%',
    marginBottom: 50,
    color: '#222',
    fontSize: 17,
    borderRadius: 1,
    border: '2px solid #05A6F0',
    padding: 7
  },

  btnSubmit: {
    backgroundColor: '#05A6F0',
    width: 218,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #ffff',
    borderradius: '20px',
    boxsizing: 'border-box',
    borderRadius: 1,
  },

  submitText: {
    color: '#FFF',
    fontfamily: 'Signika',
    fontstyle: 'normal',
    fontweight: 'normal',
    fontSize: 16
  },

  //   btnEsqueci:{
  //     marginTop: 10,
  //   },

  //   esqueciText:{
  //     color: '#5E9CFF',
  //     fontstyle: 'italic',
  //     fontSize: 20,
  //     textDecorationLine: 'underline',
  //   },

});