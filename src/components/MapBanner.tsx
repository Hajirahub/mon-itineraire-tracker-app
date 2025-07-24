import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapBanner() {
  const [region, setRegion] = useState<Region>({
    latitude: 48.8566,
    longitude: 2.3522,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      const places = await Location.reverseGeocodeAsync({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
      if (places.length > 0) {
        const { city, country } = places[0];
        if (city && country) {
          setAddress(`${city}, ${country}`);
        }
      }
    })();
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.countContainer}>
        <Text style={styles.topOverlay}>
          Il y a{' '}
          <Text style={[styles.highlight, { color: 'rgba(0,0,0,0.8)' }]}>3 aventuriers</Text>{' '}
          autour de vous
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <MapView style={styles.map} region={region} />
        <Text style={styles.bottomOverlay}>
          Votre terrain de jeu :{' '}
          {address && <Text style={styles.highlight}>{address}</Text>}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    position: 'relative',
    paddingHorizontal: 15,
  },
  countContainer: {
    position: 'absolute',
    top: 5,
    alignSelf: 'center',
    zIndex: 10,
    elevation: 10,
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },  // Décalage vertical positif
    shadowOpacity: 0.1,                     // Opacité raisonnable
    shadowRadius: 6, 
  },
  cardContainer: {
    height: 160,
    paddingTop: 8,
    paddingBottom: 24,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgb(226, 226, 226)',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginHorizontal: 16,
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
    left: 0,
    right: 0,
    zIndex: 2,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    fontWeight: '400',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.35)',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    zIndex: 2,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',    fontWeight: '400',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.35)',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  highlight: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    fontWeight: '500',
    color: '#000',
  },
});