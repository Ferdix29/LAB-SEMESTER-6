import { useFonts } from 'expo-font';
import { Stack, Slot, Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    // Font statis
    'BebasNeue': require('../assets/fonts/BebasNeue-Regular.ttf'),
    'FiraSans': require('../assets/fonts/FiraSans-Regular.ttf'),
    'Goldman': require('../assets/fonts/Goldman-Regular.ttf'),
    'Lato': require('../assets/fonts/Lato-Black.ttf'),
    'PTSerif': require('../assets/fonts/PTSerif-Regular.ttf'),
    // Font variabel
    'Bitcount': require('../assets/fonts/BitcountPropSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf'),
    'IntelOneMono': require('../assets/fonts/IntelOneMono-VariableFont_wght.ttf'),
    'NotoSansJP': require('../assets/fonts/NotoSansJP-VariableFont_wght.ttf'),
    'OpenSans': require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'RobotoCondensed': require('../assets/fonts/RobotoCondensed-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded && !fontError) return null;

  if (fontError) {
    console.error("Gagal memuat font:", fontError);
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Slot untuk render halaman */}
      <Slot />

      {/* Navigasi Global di bawah */}
      <View style={styles.navbar}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/tugas-4" style={styles.link}>Tugas 4</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  link: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});
