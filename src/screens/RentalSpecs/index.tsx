import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import styles from './styles';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

import places from '../../data/places';

const RentalSpecs = ({route}) => {
  const navigation = useNavigation();
  
  const onPress = () => {
    navigation.navigate('Explore');
  };

 const {title, country, address, image, price, description} = route.params;

 

  return (
    <View style={styles.root}>
      <View style={{flexDirection:'row', marginBottom:20}}>
        <View style={styles.prevButton}>
          <Pressable onPress={onPress}>
            <Text>←</Text>
          </Pressable>
        </View>
        <View style={styles.headingContainer}>

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.location}>{country}</Text>
        </View>
      </View>
      <Text style={styles.description}>
        {description}
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
        <Text style={styles.lastTexts}>${price} FLOW / night</Text>

        <Text style={styles.lastTitles}>Location</Text>
        <Text style={styles.lastTexts}>{address}</Text>

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
