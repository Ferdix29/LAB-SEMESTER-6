import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import {
  MaterialCommunityIcons,
  Octicons,
  AntDesign,
  SimpleLineIcons,
  Zocial
} from '@expo/vector-icons';

export default function IconScreen() {
  const icons = [
    { name: 'abacus', icon: MaterialCommunityIcons },
    { name: 'octoface', icon: Octicons },
    { name: 'rocket1', icon: AntDesign },
    { name: 'game-controller', icon: SimpleLineIcons },
    { name: 'spotify', icon: Zocial },
    { name: 'robot-happy', icon: MaterialCommunityIcons },
    { name: 'broadcast', icon: Octicons },
    { name: 'aliwangwang', icon: AntDesign },
    { name: 'globe', icon: SimpleLineIcons },
    { name: 'stackoverflow', icon: Zocial },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ikon Unik</Text>
      <View style={styles.grid}>
        {icons.map((item, index) => {
          const IconComponent = item.icon as React.ComponentType<{
            name: string;
            size?: number;
            color?: string;
          }>;
          const isHovered = hoverIndex === index;

          return (
            <Pressable
              key={index}
              onPressIn={() => setHoverIndex(index)}
              onPressOut={() => setHoverIndex(null)}
              style={[
                styles.card,
                isHovered && { backgroundColor: '#007bff' },
              ]}
            >
              <IconComponent
                name={item.name}
                size={50}
                color={isHovered ? '#fff' : '#495057'}
              />
              <Text style={[styles.label, isHovered && { color: '#fff' }]}>
                {item.name}
              </Text>
            </Pressable>
          );
        })}
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
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '600',
    color: '#495057',
    textAlign: 'center',
  },
});
