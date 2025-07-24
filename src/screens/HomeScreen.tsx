// src/screens/HomeScreen.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapBanner from '../components/MapBanner';
import TripCarousel, { Trip } from '../components/TripCarousel';
import ActionsRow from '../components/ActionsRow';

// Stub de données pour le carousel
const mockTrips: Trip[] = [
  {
    id: '1',
    title: 'Évasion à Paris',
    coverImage: 'https://example.com/paris.jpg',
    days: 5,
    steps: 8,
  },
  {
    id: '2',
    title: 'Week‑end Montagne',
    coverImage: 'https://example.com/montagne.jpg',
    days: 3,
    steps: 5,
  },
];

// Hook temporaire pour récupérer les voyages
function useTrips() {
  return mockTrips;
}

export default function HomeScreen() {
  const trips = useTrips();

  return (
    <SafeAreaView style={styles.container}>
      {/* Bandeau Mini‑map */}
      <MapBanner />

      {/* Carousel de voyages/aventures */}
      <TripCarousel trips={trips} />

      {/* Row d’actions */}
      <ActionsRow />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 16,
    paddingTop: 16,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 16,
  },
});
