import React from 'react';
import {View, Text} from 'react-native';

import Button from '../Button';
import styles from './styles';

const ReservationCard = ({title, place, dates, image}) => {
  return (
    <View style={[styles.card, styles.cardElevated]}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.place}>{place}</Text>
          <Text style={styles.date}>{dates}</Text>
        </View>
        <View style={styles.miscContainer}>
          <Button
            text="View reservation"
            type="view-reservation"
            onPress={() => {}}
            containerStyles={{
              width: 140,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ReservationCard;
