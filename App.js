import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BienvenidaScreen from './BienvenidaScreen';

// HomeBar conectada
function HomeBar({ state, navigation }) {
  const icons = {
    Bienvenida: 'home',
    Perfil: 'person',
  };

  return (
    <View style={styles.homeBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const color = isFocused ? '#AB21D9' : '#999';

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabItem}
            onPress={() => navigation.navigate(route.name)}
          >
            <Ionicons name={icons[route.name]} size={24} color={color} />
            <Text style={[styles.tabText, { color }]}>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <HomeBar {...props} />}
      >
        <Tab.Screen name="Bienvenida" component={BienvenidaScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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