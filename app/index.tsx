import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons, Entypo, Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const icons = [
    { name: 'home', lib: 'Ionicons', icon: <Ionicons name="home" size={50} color="#007bff" /> },
    { name: 'camera', lib: 'FontAwesome', icon: <FontAwesome name="camera" size={50} color="#28a745" /> },
    { name: 'email', lib: 'MaterialIcons', icon: <MaterialIcons name="email" size={50} color="#dc3545" /> },
    { name: 'user', lib: 'FontAwesome', icon: <FontAwesome name="user" size={50} color="#6f42c1" /> },
    { name: 'settings', lib: 'Ionicons', icon: <Ionicons name="settings" size={50} color="#fd7e14" /> },
    { name: 'bell', lib: 'FontAwesome', icon: <FontAwesome name="bell" size={50} color="#20c997" /> },
    { name: 'chat', lib: 'Entypo', icon: <Entypo name="chat" size={50} color="#e83e8c" /> },
    { name: 'music', lib: 'Feather', icon: <Feather name="music" size={50} color="#17a2b8" /> },
    { name: 'lock', lib: 'FontAwesome', icon: <FontAwesome name="lock" size={50} color="#343a40" /> },
    { name: 'heart', lib: 'MaterialIcons', icon: <MaterialIcons name="favorite" size={50} color="#ff4757" /> },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daftar Ikon</Text>
      <View style={styles.grid}>
        {icons.map((item, index) => (
          <View key={index} style={styles.card}>
            {item.icon}
            <Text style={styles.label}>{item.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  },
  card: {
    width: 100,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
  },
});
