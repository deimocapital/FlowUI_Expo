import React, {useState, useContext} from 'react';
import {View, Text, Pressable, ScrollView, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { UserContext } from '../../context/UserContext';
import { addReservation } from '../../utils/ReservationApi';
import styles from './styles';
import Button from '../../components/Button';

const RentalSpecs = ({route}) => {
  const user = useContext(UserContext);
  const navigation = useNavigation();
  const[arrivalDate, setArrivalDate] = useState('');
  const[departureDate, setDepartureDate] = useState('');
  const[guests, setGuests] = useState('1');

  const onPress = () => {
    navigation.navigate('Explore');
  };

  const visitor = user.user;
  
 const {title, country, address, image, price, owner, description, instructions, rules} = route.params;

 //const dates = {arrivalDat:'Tuesday, July 30, 2023', departureDat:'Wedenesday, July 31, 2023'};
 const dates = {arrivalDate, departureDate};

  const reservation = {dates, owner, title, country, address, image, price, description, guests, instructions, rules, visitor};

  return (
    <ScrollView style={styles.root}>
      <View style={{flexDirection:'row', marginBottom:20}}>
        <View style={styles.prevButtonContainer}>
          <Pressable onPress={onPress}>
            <Text style={{color: '#fff'}}>←</Text>
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
      {/* <ImageCarousel images={image} /> */}
      <Image source={{uri:image}} style={{margin: 10, height: 250, borderRadius: 15}} />

      <View
        style={{
          marginVertical: 15,
          width: '100%',
          height: 1,
          backgroundColor: '#fff',
        }}
      />
      <View style={{margin: 5}}>
        <View style={{marginVertical:10}}>
          <Text style={styles.lastTitles}>Cost</Text>
          <Text style={styles.lastTexts}>${price} FLOW / night</Text>
        </View>
        <View style={{marginVertical:10}}>
          <Text style={styles.lastTitles}>Location</Text>
          <Text style={styles.lastTexts}>{address}</Text>
        </View>

        <View style={{marginVertical:10}}>
          <Text style={styles.lastTitles}>Rules</Text>
          <Text style={styles.lastTexts}>{rules}</Text>
        </View>

        <View style={{marginVertical:10}}>
          <Text style={styles.lastTitles}>Instructions</Text>
          <Text style={styles.lastTexts}>{instructions}</Text>
        </View>

        <View style={{marginVertical:10}}>
          <Text style={styles.lastTitles}>Arrival Date</Text>
          <TextInput 
            placeholder="July 20, 2023" 
            value={arrivalDate}
            onChangeText={setArrivalDate}
            style={[styles.input, {marginTop: 10}]} 
            keyboardType="default" 
            placeholderTextColor="#7e7f80" 
            selectionColor="#fff"  
          />
          <Text style={styles.lastTitles}>Departure Date</Text>
          <TextInput 
            placeholder="July 25, 2023" 
            value={departureDate}
            onChangeText={setDepartureDate}
            style={[styles.input, {marginTop: 10}]} 
            keyboardType="default"
            placeholderTextColor="#7e7f80" 
            selectionColor="#fff"  
          />
        </View>

        <Text style={styles.lastTitles}>Number of Guests</Text>
        <TextInput 
          placeholder="Enter # of guests" 
          value={guests}
          onChangeText={setGuests}
          style={[styles.input, {marginTop: 10}]} 
          keyboardType="number-pad" 
          placeholderTextColor="#7e7f80" 
          selectionColor="#fff"  
        />

      </View>
      <Button
        text="Make reservation"
        type="make-reservation"
        onPress={()=> {
          addReservation(reservation);
          navigation.navigate('Explore');
        }}
        containerStyles={{
          width: '100%',
          borderRadius: 6,
          marginVertical: 15,
        }}
      />
    </ScrollView>
  );
};

export default RentalSpecs;
