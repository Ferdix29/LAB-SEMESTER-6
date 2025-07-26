import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

// Daftar lengkap nama mahasiswa (sudah dirapikan)
const studentList = [
  "Nur Milani Hidayah", "Majeri", "Siti Marwa", "Nabila Ismail Matta", "Muliana",
  "Nurmisba", "Alvian Syah Burhani", "Ahmad Fathir", "Andi Citra Ayu Lestari",
  "Ferdiansyah", // Nama referensi
  "Yusri Ali", "Syawaluddin", "Parwati", "Hamdani", "Muhammad Faturrachman Iswan",
  "Muhammad Adianto", "Fajar Eka Alamsyah", "Erick Yusuf Kotte", "A. Fajar Apriliawan",
  "Farisan", "Ali Sulton S Palilati", "A. Ikram Mukarram"
];

// Definisikan 10 nama fontFamily sesuai yang didaftarkan di useFonts
const fontFamilies = [
  'BebasNeue', 'FiraSans', 'Goldman', 'Lato', 'PTSerif',
  'Bitcount', 'IntelOneMono', 'NotoSansJP', 'OpenSans', 'RobotoCondensed'
];

export default function StudentDisplayScreen() {
  const referenceName = "Ferdiansyah";
  const totalStudents = studentList.length;
  const referenceIndex = studentList.findIndex(name => name === referenceName);

  // Fungsi untuk mendapatkan indeks secara sirkular (memutar)
  const getCircularIndex = (baseIndex: number, offset: number) => {
    return (baseIndex + offset + totalStudents) % totalStudents;
  };

  // Logika untuk memilih 5 nama sebelum dan 5 nama sesudah
  const selectedNames = [
    ...Array.from({ length: 5 }, (_, i) => studentList[getCircularIndex(referenceIndex, i - 5)]),
    ...Array.from({ length: 5 }, (_, i) => studentList[getCircularIndex(referenceIndex, i + 1)])
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Daftar Nama Mahasiswa</Text>
        <Text style={styles.subHeader}>Tugas 4 Lab</Text>
        <View style={styles.nameListContainer}>
          {selectedNames.map((name, index) => (
            <View key={index} style={styles.nameCard}>
              <Text style={[styles.nameText, { fontFamily: fontFamilies[index] }]}>
                {name}
              </Text>
              <Text style={styles.fontInfo}>
                Font: {fontFamilies[index]}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Stylesheet unik untuk tampilan yang menarik
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBF4FF',
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0A2540',
    textAlign: 'center',
    fontFamily: 'Goldman',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 18,
    color: '#526A81',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'PTSerif',
  },
  nameListContainer: {
    width: '100%',
  },
  nameCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  nameText: {
    fontSize: 22,
    color: '#1A385A',
  },
  fontInfo: {
    fontSize: 14,
    color: '#7C93AB',
    marginTop: 6,
    fontStyle: 'italic',
  },
});