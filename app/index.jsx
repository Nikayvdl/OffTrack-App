import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Haal de schermbreedte op

export default function WelcomeScreen() {
  return (
    <ImageBackground 
      source={require('../assets/images/jack-ward-rknrvCrfS1k-unsplash(1).png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
        <Text style={styles.title}>Explore a new world with us</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  logo: {
    top: 50,
    left: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    top: 300,
    width: 300,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30, 
    width: '100%', 
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    width: 350, 
    borderRadius: 15,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
