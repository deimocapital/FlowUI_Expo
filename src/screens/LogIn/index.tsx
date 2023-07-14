import React, {useState, useEffect} from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import * as fcl from "@onflow/fcl/dist/fcl-react-native";

import { addUser } from '../../utils/UserApi';
import styles from './styles';
import "../../../flow/config";
import Button from '../../components/Button';

const LogIn = () => {
  const [user, setUser] = useState({loggedIn: null});
  const [toggle, setToggle] = useState(false);
  const imageAddress = 'https://classicalarchitectures.weebly.com/uploads/1/2/6/8/126890479/sculptural-home-plays-volumes-curvy-roofline-1-exterior_orig.jpg';

  useEffect(() => fcl.currentUser.subscribe(setUser), []);

  const logout = () => {
    fcl.unauthenticate();
  };

  return (
     <View style={styles.root}>
      {(user.loggedIn) ? (
        <View style={{padding:10}}>
        <Text style={styles.title}>Profile</Text>
          <Text style={[styles.title, {fontSize: 19}]}>Address</Text>
          <View style={styles.flowInfoContainer}>
            <View style={styles.innerFlowInfoContainer}>
              <Text style={styles.titleFlowContainer}>aaa</Text>
              <Text style={styles.message}>Copy wallet address</Text>
            </View>
            <View style={styles.buttonFlowContainer}>
              <Button text='Log out' type='log-out-button' onPress={logout} textStyles={{padding:8}} containerStyles={{borderRadius: 10}} />
            </View>
          </View>
          <View style={styles.flowInfoContainer}>
            <View style={styles.innerFlowInfoContainer}>
              <Text style={styles.titleFlowContainer}>Flow Balance</Text>
              <Text style={styles.message}>500.00</Text>
            </View>
          </View>
        </View>
      ):(
        <>
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
                <Pressable style={styles.blocto}>
                <Text>Login with </Text>
                  <fcl.ServiceDiscovery fcl={fcl}  />
                </Pressable>
            </View>
        </>
      )}
    </View>
  );
};

export default LogIn;