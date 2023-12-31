import React from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Button from '../Button';

const PlaceCard = ({title, country, image, address, price, description, owner, isReserved, instructions, rules}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('RentalSpecs', {title,address, country, image, price, description, owner, instructions, rules});
  };

  return (
    <View style={[styles.card, styles.cardElevated]}>
      <Image source={{uri:image}} style={styles.cardImage} />

      <View style={styles.cardBody}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.country}>{country}</Text>
        </View>

        <Button
          text="View property"
          type="view-property"
          onPress={onPress}
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
