import React, {useState} from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Button from '../../components/Button';
import { getUser } from '../../utils/UserApi';

const User = () => {
  const [isUserConnected, setIsUserConnected] = useState(false);
  const [user, setUser] = useState({
    username: '',
    walletAddress: '',
  });

  return (
    <View style={styles.root}>
        <Text style={styles.title}>Connect your FLOW account to live the full experience!</Text>
        <View style={styles.walletContainer}>
            <Text style={{color:"#fff"}}>User</Text>
        </View>
            <Button text='Connect' type='wallet-connect' onPress={getUser} containerStyles={{borderRadius: 5}} />
    </View>
  );
};

export default User;