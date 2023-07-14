import React, {useState, useEffect} from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import Button from '../../components/Button';
import { getUser } from '../../utils/UserApi';

const LogIn = () => {
  const [isUserConnected, setIsUserConnected] = useState(false);
  const [user, setUser] = useState({
    id: '',
    username: '',
    walletAddress: '',
  });
  const imageAddress = 'https://classicalarchitectures.weebly.com/uploads/1/2/6/8/126890479/sculptural-home-plays-volumes-curvy-roofline-1-exterior_orig.jpg';
    const connectUser = () => {
      getUser('0xbr498nm23409').then((user) => {
      setIsUserConnected(true);
      // console.log(user.data);
      const userData = {id: user.doc, username: user.data.username, walletAddress: user.data.walletAddress};
      
      setUser(userData);
    });
  };

  console.log(user);
  

  const disconnectUser = () => {
    setIsUserConnected(false);
    setUser({
      id: '',
      username: '',
      walletAddress: '',
    });
  };

  return (
    <View style={styles.root}>
        <View style={styles.imageContainer}>
          <Image source={{uri:imageAddress}} style={styles.cardImage} />
        </View>
        <View style={styles.headingContainer}>
            <Text style={styles.title}>Welcome to FlowAirBnB!</Text>
            <View style={{width:'70%'}}>
              <Text style={styles.message}>The decentralized house reservation platform built on Flow Blockchain.</Text>
            </View>
        </View>
        <View style={{marginTop: 40, width:'95%', alignSelf: 'center'}}>
            <Button text='Connect' onPress={() => console.warn('Connect')} containerStyles={{borderRadius: 10}}/>
        </View>
    </View>
  );
};

export default LogIn;