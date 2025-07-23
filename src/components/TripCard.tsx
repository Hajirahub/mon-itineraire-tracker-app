// src/components/TripCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Trip } from './TripCarousel';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8; // un peu moins que la largeur de l'écran
const CARD_HEIGHT = CARD_WIDTH * 9 / 16; // ratio 16:9

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: trip.coverImage }}
        style={styles.image}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>{trip.title}</Text>
        <Text style={styles.subtitle}>
          📅 {trip.days} jours   •   🗺️ {trip.steps} étapes
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 12,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  title: {
    fontFamily: 'CormorantGaramond-Bold', // ou le nom exact dans ton projet
    fontSize: 20,
    color: '#000',
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: 'rgba(60,60,67,0.6)',
    marginTop: 4,
  },
});
