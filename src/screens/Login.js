import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput } from 'react-native';

export default class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        email: '',
        senha: ''
      }
    } // Fim do construtor

    realizarLogin = async () => {
      console.warn(this.state.email + '' + this.state.senha)
      try {
  
          const resposta = await api.post('/login', {
              email: this.state.email,
              senha: this.state.senha,
          });
          const token = resposta.data.token;

          console.warn(token)

          await AsyncStorage.setItem('userToken', token);

          this.props.navigation.navigate('Home')
  
      } catch (error) {
        console.warn(error)
      }
    } // Fim do método RealizarLogin


  render(){
    return(
      <KeyboardAvoidingView style={styles.background}>
        <Image 
          source={require('../../assets/img/fundo-listrado-2.png')}
          style={StyleSheet.absoluteFillObject}
        />

        <Image
          source={require('../../assets/img/avurto-pretof.png')}
          style={styles.logo}
        />

        <Image
          source={require('../../assets/img/Vector.png')}
          style={styles.Imgvector1}
        />

        <View style={styles.containerText1}>
        <Text style={{ color: 'rgba(0, 0, 0, 0.7)',fontFamily: 'Mohave-Bold.otf', fontSize: '30px', fontStyle: 'normal', fontWeight: 'bold', lineheight: '42px'}}> FAÇA O LOGIN! </Text>
        </View>
        
        <View style={styles.containerText2}>
          <Text style={{ color: 'rgba(0, 0, 0, 0.7)', fontFamily: 'Mohave-Bold.otf', fontSize: '15px', fontStyle: 'normal', fontWeight: 'bold'}}> 
          NÃO PERCA ESSA OPORTURNIDADE, E ENTRE NA AVURTO PARA SABER MAIS SOBRE OS NOSSOS CURSOS! </Text>
          </View>
        

        <Image
          source={require('../../assets/img/Vector.png')}
          style={styles.Imgvector2}
        />

        {/* <TextInput
          style={styles.input}
          placeholder={'Digite o seu Email'}
          autoCorrect={false}
          onChangeText={() => {}}
        /> */}

        <Image
          source={require('../../assets/img/Vector.png')}
          style={styles.Imgvector3}
        />

      </KeyboardAvoidingView>
    );
  } // Fim do render
}

// Estilização da página à partir daqui //
const styles = StyleSheet.create({
    background: {
      flex: 3,
      backgroundColor: '#fff',
      alignItens: 'center', 
      justifyContent: 'center'
    },

    logo: { // Logo da Avurto //
      flex: 1,
      position: 'absolute',
      left: '28.74%',
      right: '28.99%',
      top: '0.82%',
      bottom: '85.87%'
    },

    Imgvector1: {
      flex: 1,
      position: 'absolute',
      left: '-13.77%',
      right: '72.95%',
      top: '4.62%',
      bottom: '72.55%'
    },

    containerText1: { // Faça o login //
      flex: 1,
      width: '253px',
      height: '42px',
      left: '128px',
      top: '131px'
    },



    Imgvector2 : {
      flex: 1,
      position: 'absolute',
      left: '71.5%',
      right: '-12.32%',
      top: '17.8%',
      bottom: '59.38%'
    },

    Imgvector3 : {
      flex: 1,
      position: 'absolute',
      left: '37.92%',
      right: '21.26%',
      top: '83.83%',
      bottom: '-6.66%'
    },

});