import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function MapBanner() {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.topOverlay}>Il y a X aventuriers…</Text>
      <MapView style={styles.map} />
      <Text style={styles.bottomOverlay}>Votre terrain de jeu…</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 160,
    width: 360,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 24,
  },
  map: {
    height: 100,
    width: '100%',
    borderRadius: 8,
  },
  topOverlay: {
    position: 'absolute',
    top: 8,
    left: 16,
    zIndex: 2,
    fontWeight: '600',
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 8,
    left: 16,
    zIndex: 2,
    fontWeight: '600',
  },
});