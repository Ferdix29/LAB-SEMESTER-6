
// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Segitiga */}
        <View style={styles.triangle} />

        {/* Persegi Panjang dengan Nama */}
        <View style={styles.rectangleWrapper}>
          <Text style={styles.rectangleText}>FERDIANSYAH</Text>
        </View>
      </View>

      {/* Bentuk Pil (Capsule) dengan NIM */}
      <View style={styles.capsuleWrapper}>
        <Text style={styles.capsuleText}>NIM: 105841100422</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 80,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#3498db',
  },
  rectangleWrapper: {
    width: 180,
    height: 50,
    backgroundColor: '#8e44ad',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  rectangleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  capsuleWrapper: {
    alignSelf: 'center',
    backgroundColor: '#e74c3c',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 50,
  },
  capsuleText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
