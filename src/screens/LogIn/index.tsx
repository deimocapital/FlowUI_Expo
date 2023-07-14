import React, {useState, useEffect} from 'react';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import "../../../flow/config";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import Button from '../../components/Button';
import { addUser } from '../../utils/UserApi';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({loggedIn: null});
  const [isLogin, setIsLogin] = useState(false);
  const navigation = useNavigation();

  const imageAddress = 'https://classicalarchitectures.weebly.com/uploads/1/2/6/8/126890479/sculptural-home-plays-volumes-curvy-roofline-1-exterior_orig.jpg';

  
    const connectUser = () => {
      const userDB = {username, walletID:user.addr};
      addUser(userDB);
      navigation.navigate('Profile', {userDB});
    };

  useEffect(() => {
    setIsLogin(!isLogin);
    fcl.currentUser.subscribe(setUser); 
  }, []);
  
  const logout = () => {
    setIsLogin(false);
    fcl.unauthenticate();
  };

  return (
    <View style={styles.root}>
        <View style={styles.imageContainer}>
          <Image source={{uri:imageAddress}} style={styles.cardImage} />
        </View>
        {!isLogin ? (
          <View style={styles.headingContainer}>
          <Text style={styles.title}>Set up your username</Text>
          <View style={{width:'70%'}}>
          <TextInput 
            placeholder="Write your username..." 
            value={username}
            onChangeText={setUsername}
            style={styles.input} 
            keyboardType="default" 
            placeholderTextColor="#7e7f80" 
            selectionColor="#fff"  
          />
          <Button text="Continue" onPress={connectUser} containerStyles={{borderRadius: 10}} />
          <Button text="Cancel" onPress={logout} containerStyles={{borderRadius: 10, backgroundColor:'red'}} />
          </View>
          
      </View>
        ) : (
          <>
            <View style={styles.headingContainer}>
                <Text style={styles.title}>Welcome to FlowAirBnB!</Text>
                <View style={{width:'70%'}}>
                  <Text style={styles.message}>The decentralized house reservation platform built on Flow Blockchain.</Text>
                </View>
            </View>
            <View style={{marginTop: 40, width:'95%', alignSelf: 'center'}}>
                <Pressable style={styles.blocto}>
                <Text>Login with </Text>
                  <fcl.ServiceDiscovery fcl={fcl} />
                </Pressable>
            </View>
         </>
        )}
    </View>
  );
};

export default LogIn;