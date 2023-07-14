import React, {useState,useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import { UserContext } from '../../context/UserContext';

import ReservationCard from '../../components/ReservationCard';
import styles from './styles';
import images from '../../assets';



const Reservations = () => {
  
  const [isConnected, setIsConnected] = useState(false);

  const user = useContext(UserContext);
  console.log('Reserv ' + user.user);
  

  // useEffect(() => {
  //   getUser('0xea059bf1b1bb030b').then((user) => {
  //     setIsConnected(true);
  //     setUser(user);
  //   });
  // }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>My Reservations</Text>
      {isConnected ? (
        <View style={styles.cardsContainer}>
          <ReservationCard
            title="Puerto Escondido Palm House"
            place="Puerto Escondido, México"
            dates="20-24 Dec 2023"
            image={images.house2}
          />
          <ReservationCard
            title="Photography Session"
            place="Jardines de México, México"
            dates="25 Dec 2023"
            image={images.house2}
          />
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
