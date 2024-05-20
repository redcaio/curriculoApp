import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
const App = () => {
  return (
    <ScrollView>
      <View style ={styles.container}>
      <Text style ={styles.title}>Sobre mim</Text>        
      <Text></Text>
        <Image
  style={{
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }}
  source={{
    uri: 'https://lh3.googleusercontent.com/pw/AP1GczNSqQ1V4VlybcTKqPWfuAvzRqraXLlFSIJlsXdw4cqmTCmZDet7h6SF87yhhrXcVcjAKBWetwwUcYWyHkEoXw6Z3VLWhB80C_EchtctC1cNQBnkhhQDd-AfcyGnQ90ljJUdjRJ-zrNt1_BOiaqXB_43lw=w288-h288-s-no-gm?authuser=0',
  }}
        />
      </View>
      <View>
      <Text style ={styles.paragraph}>Eu sou Caio Martins Porto, tenho 20 anos e estou fazendo
      Análise e desenvolvimento de Sistemas pela faculdade do Senac, atualmente estou no 3º período
      do curso.</Text>
      </View>
      
    </ScrollView>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeigh,
      backgroundColor: '#FFFFFF',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      textAlign: 'center',
    },
    title: {
      margin: 24,
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold'
    },
});

export default App;