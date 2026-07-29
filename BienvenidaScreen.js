import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BienvenidaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Bienvenido!</Text>
      <Text style={styles.subtitulo}>Julian Becerra</Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={styles.botonTexto}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8B1FB5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#eee',
    marginBottom: 30,
  },
  boton: {
    backgroundColor: '#B51F1F',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});