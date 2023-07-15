import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';

const Reserve = () => {
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>Reserve</Text>
      <Text style={styles.title}>Reservation resume</Text>

    </ScrollView>
  )
}

export default Reserve;