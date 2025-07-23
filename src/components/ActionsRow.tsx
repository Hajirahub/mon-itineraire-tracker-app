// src/components/ActionsRow.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

interface ActionsRowProps {
  hasActiveTrip?: boolean; // plus tard, pour basculer le label
}

export default function ActionsRow({ hasActiveTrip = false }: ActionsRowProps) {
  return (
    <View style={styles.row}>
      <Button
        mode="contained"
        onPress={() => console.log(hasActiveTrip ? 'Ajouter étape' : 'Nouvelle aventure')}
        style={styles.button}
        labelStyle={styles.label}
      >
        {hasActiveTrip ? '+ Ajouter une étape' : '+ Nouvelle aventure'}
      </Button>

      <Button
        mode="outlined"
        onPress={() => console.log('Partager escapade')}
        style={styles.button}
        labelStyle={styles.label}
      >
        Partager mon escapade
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#EFEFF4',  // pour le contained
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: '#007AFF',
  },
});
