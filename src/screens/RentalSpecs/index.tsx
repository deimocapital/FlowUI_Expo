import {View, Text} from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

import places from '../../data/places';

const RentalSpecs = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Mazatlan Tree House</Text>
        <Text style={styles.location}>Mazatlan, Mexico</Text>
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>

      {/* Image Carousel */}
      <ImageCarousel images={places[0].images} />

      <View
        style={{
          marginVertical: 15,
          width: '100%',
          height: 1,
          backgroundColor: '#fff',
        }}
      />
      <View style={{margin: 5}}>
        <Text style={styles.lastTitles}>Cost</Text>
        <Text style={styles.lastTexts}>$400 FLOW / night</Text>

        <Text style={styles.lastTitles}>Location</Text>
        <Text style={styles.lastTexts}>Lerdo 16, Col. Barranca Seca</Text>

        <Text style={styles.lastTitles}>Choose Dates</Text>
      </View>
      <Button
        text="Make reservation"
        type="make-reservation"
        onPress={() => {}}
        containerStyles={{
          width: '100%',
          borderRadius: 6,
          marginVertical: 15,
        }}
      />
    </View>
  );
};

export default RentalSpecs;
