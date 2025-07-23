// src/components/TripCarousel.tsx
import React from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import TripCard from './TripCard';

export interface Trip {
  id: string;
  title: string;
  coverImage: string;
  days: number;
  steps: number;
}

interface TripCarouselProps {
  trips: Trip[];
}

const { width } = Dimensions.get('window');

export default function TripCarousel({ trips }: TripCarouselProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={trips}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TripCard trip={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: width * 0.6, // ratio 16:9 approximé
    marginBottom: 12,
  },
  list: {
    paddingHorizontal: 16,
  },
});
