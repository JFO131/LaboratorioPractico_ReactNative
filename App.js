import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function HomeBar() {
  return (
    <View style={styles.homeBar}>
      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="person" size={24} color="#AB21D9" />
        <Text style={styles.tabText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="add-circle" size={24} color="#AB21D9" />
        <Text style={styles.tabText}>Anadir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="chatbubble" size={24} color="#AB21D9" />
        <Text style={styles.tabText}>Mensajes</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Contenido que se estira y deja la HomeBar fija abajo */}
      <View style={{ flex: 1 }}>

        <View style={styles.headerContainer}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYaO_VT30riofCjEm1-tXGUb3vxR_fXuA9RpF5masY4fzfZzB90jpwgo&s=10' }}
            style={styles.foto}
          />
          <Text style={styles.nombre}>Julian Becerra</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.correo}>becerravillalobos08@gmail.com</Text>
        </View>

        <TouchableOpacity style={styles.botonEditar}>
          <Text style={styles.botonTexto}>Editar Perfil</Text>
        </TouchableOpacity>

      </View>

      <HomeBar />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B1FB5',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 200,
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 12,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  correo: {
    fontSize: 16,
    color: '#000000',
  },
  botonEditar: {
    backgroundColor: '#B51F1F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 40,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  homeBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
});
