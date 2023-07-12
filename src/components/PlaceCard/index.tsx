import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

import Button from '../Button';

const PlaceCard = ({title, country, image, price}) => {
  return (
    <View style={[styles.card, styles.cardElevated]}>
      <Image source={image} style={styles.cardImage} />

      <View style={styles.cardBody}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.country}>{country}</Text>
        </View>

        <Button
          text="View property"
          type="view-property"
          onPress={() => {}}
          containerStyles={{
            padding: 4,
          }}
        />
      </View>

      <Text style={styles.price}>${price} FLOW / night</Text>
    </View>
  );
};

export default PlaceCard;