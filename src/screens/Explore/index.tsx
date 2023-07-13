import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import PlaceCard from '../../components/PlaceCard';
import styles from './styles';

import images from '../../assets';

const Explore = () => {
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>
        Find your next destination, pay with $FLOW
      </Text>
      <View style={styles.cardsContainer}>
        <PlaceCard
          title="Country Road House"
          country="Dallas,USA"
          image={images.house1}
          price="220"
        />
        <PlaceCard
          title="Goo Lagoon Escape"
          country="Puerto Escondido, México"
          image={images.house2}
          price="350"
        />
        <PlaceCard
          title="Ice Skii House"
          country="Mont-Tremblant, Canada"
          image={images.house3}
          price="475"
        />
      </View>
    </ScrollView>
  );
};

export default Explore;
