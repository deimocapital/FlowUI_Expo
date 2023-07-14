import React, {useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import { getUser } from '../../utils/UserApi';
import ReservationCard from '../../components/ReservationCard';
import styles from './styles';
import images from '../../assets';

const Reservations = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState({
    username: '',
    walletID: '',
    rewardCounter:0
  });

  useEffect(() => {
    getUser('kC7AaPtlUi3dZmBZ2ni4').then((user) => {
      setIsConnected(true);
      setUser(user);
    });
  }, []);

  console.log(user);
  
  return (
    <View style={styles.root}>
      <Text style={styles.title}>My Reservations</Text>
      {isConnected && (
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
      )}
    </View>
  );
};

export default Reservations;
