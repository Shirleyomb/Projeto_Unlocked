import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

const Home = () => {

  const navigation = useNavigation();

  function HandleNavigationToWelcome() {
    navigation.navigate('Welcome');
  }
  return (
    <ImageBackground source={require('../../assets/background.png')} style={styles.container}>
      <RectButton style={styles.button} onPress={() => HandleNavigationToWelcome()}>
        <Text style={styles.buttonText}>
          Entrar
            </Text>
      </RectButton>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>
          Você está completamente seguro!
          </Text>
      </View>
    </ImageBackground>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },

  button: {
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 80,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#960AA0',
    fontSize: 16,
  },

  footer: {},
  
  textFooter: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 10,
  }
});

export default Home;