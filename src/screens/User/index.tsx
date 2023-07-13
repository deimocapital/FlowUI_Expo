import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Button from '../../components/Button';
import { getUser } from '../../utils/UserApi';

const User = () => {
  const [isUserConnected, setIsUserConnected] = useState(false);
  const [user, setUser] = useState({
    id: '',
    username: '',
    walletAddress: '',
  });

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
        <Text style={styles.title}>Connect your FLOW account to live the full experience!</Text>
        <View style={styles.walletContainer}>
            <Text style={{color:"#fff"}}>{isUserConnected ? user.walletAddress: 'Please connect to your address'}</Text>
        </View>
            {isUserConnected ? 
            <Button text='Disconnect' type='wallet-disconnect' onPress={disconnectUser} containerStyles={{borderRadius: 5, backgroundColor:'red'}} /> :
            <Button text='Conect' type='wallet-connect' onPress={connectUser} containerStyles={{borderRadius: 5}} />
            }
    </View>
  );
};

export default User;