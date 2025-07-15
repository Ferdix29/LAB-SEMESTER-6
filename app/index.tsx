// app/index.tsx (Expo Router entry)
import React, { useState } from 'react';
import { View, Image, TouchableWithoutFeedback, FlatList, Dimensions, StyleSheet } from 'react-native';

// Grid settings
const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const cellSize = screenWidth / numColumns - 10;

// 9 main + 9 alternate images from Unsplash
const imagePairs = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  main: `https://source.unsplash.com/300x300/?nature,${i + 1}`,
  alt: `https://source.unsplash.com/300x300/?forest,${i + 1}`
}));

export default function Home() {
  const [images, setImages] = useState(
    imagePairs.map(pair => ({ ...pair, useAlt: false, scale: 1 }))
  );

  const handlePress = (id: number) => {
    setImages(prev =>
      prev.map(img => {
        if (img.id === id) {
          const newScale = Math.min(img.scale * 1.2, 2);
          return { ...img, useAlt: !img.useAlt, scale: newScale };
        }
        return img;
      })
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => handlePress(item.id)}>
            <Image
              source={{ uri: item.useAlt ? item.alt : item.main }}
              style={[styles.image, { transform: [{ scale: item.scale }] }]} 
            />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, backgroundColor: '#fff' },
  image: {
    width: cellSize,
    height: cellSize,
    margin: 5,
    borderRadius: 8,
  },
});
