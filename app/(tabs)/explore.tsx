import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://lh3.googleusercontent.com/pw/AP1GczN01NKpQuYKsY4PNBovS-2sMC2tubwjXLGmJ3_IMe3lNwltBYjdbwtCmUHOkk3MC-cOcqVMfzPVDrJDz65oZmsj06O1t91S1CPBAv7nsscCatrzqc1C6YMaXeH80Tr1Nl3UTSuT7ikyYrfyNyik4TayzA=w468-h309-s-no-gm?authuser=0',
          }}
        />
      </View>

      <View>
        <Text style ={styles.title}> Cursos e Habilidades
        </Text>
      </View>

      <Text style={styles.instructionText}>
        Clique nos tópicos para ler sobre meus conhecimentos.
      </Text>

      <View style={styles.section}>
        <Collapsible title="Linguagens">
          <Text>
            Tenho conhecimento e prática com as linguagens: JavaScript, HTML/C++, Python, MySql.
          </Text>
        </Collapsible>
      </View>

      <View style={styles.section}>
        <Collapsible title="Curso">
          <ThemedText>
            Conclui 3 cursos pela fundação Bradesco: Python Iniciante, JavaScript Iniciante e Excel Avançado.
          </ThemedText>
        </Collapsible>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 16, // Adiciona espaçamento abaixo da imagem
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16, // Adiciona espaçamento abaixo do título
  },
  instructionText: {
    marginHorizontal: 16,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16, // Adiciona espaçamento abaixo do texto de instrução
  },
  section: {
    marginBottom: 16, // Adiciona espaçamento entre as seções colapsáveis
  },
  title: {
    margin: 24,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default App;
