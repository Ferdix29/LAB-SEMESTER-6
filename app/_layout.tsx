import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  // Muat semua 10 font dari folder assets/fonts
  const [fontsLoaded, fontError] = useFonts({
    // 5 Font Statis
    'BebasNeue': require('../assets/fonts/BebasNeue-Regular.ttf'),
    'FiraSans': require('../assets/fonts/FiraSans-Regular.ttf'),
    'Goldman': require('../assets/fonts/Goldman-Regular.ttf'),
    'Lato': require('../assets/fonts/Lato-Black.ttf'),
    'PTSerif': require('../assets/fonts/PTSerif-Regular.ttf'),

    // 5 Font Variabel
    'Bitcount': require('../assets/fonts/BitcountPropSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf'),
    'IntelOneMono': require('../assets/fonts/IntelOneMono-VariableFont_wght.ttf'),
    'NotoSansJP': require('../assets/fonts/NotoSansJP-VariableFont_wght.ttf'),
    'OpenSans': require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'RobotoCondensed': require('../assets/fonts/RobotoCondensed-VariableFont_wght.ttf'),
  });

  // Jangan render apapun sampai font selesai dimuat
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Jika ada error saat memuat font, tampilkan di console
  if (fontError) {
    console.error("Gagal memuat font:", fontError);
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}