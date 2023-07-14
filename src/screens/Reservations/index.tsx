import React, {useState,useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import { UserContext } from '../../context/UserContext';

import { getReservationById } from '../../utils/ReservationApi';
import ReservationCard from '../../components/ReservationCard';
import styles from './styles';
import images from '../../assets';


const Reservations = () => {
  const user = useContext(UserContext);
  const [reservations, setReservations] = useState([{
    address: '',
    confirmationCode: '',
    creator: '',
    currentUser: '',
    dates: {
      arrivalDate:'',
      departureDate:'',
    },
    guests: '',
    houseTitle: '',
    images: '',
    instructions: '',
    rules:'',
  }]);

  useEffect(() => {
    getReservationById(user.user).then((reservations) => {
      setReservations(reservations);
    });
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>My Reservations</Text>
      {(user.user !== '') ? (
        <View style={styles.cardsContainer}>
          {reservations.map((reservation, i) => (
            <ReservationCard
              title={reservation.houseTitle}
              place={reservation.address}
              dates={reservation.dates.arrivalDate}
              image={reservation.images}
            />
          ))}
        </View>
      ): (
        <View style={styles.logInPrompt}>
          <Text style={[styles.title, {fontSize:18}]}>No current reservations</Text>
        </View>
      )}
    </View>
  );
};

export default Reservations;
