import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { addUser } from '../../utils/UserApi';
import styles from './styles';
import Button from '../../components/Button';
import "../../../flow/config";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";

const LogIn = () => {
  const [user, setUser] = useState({loggedIn: null});
  const imageAddress = 'https://classicalarchitectures.weebly.com/uploads/1/2/6/8/126890479/sculptural-home-plays-volumes-curvy-roofline-1-exterior_orig.jpg';

  useEffect(() => fcl.currentUser.subscribe(setUser), []);
  const { services, isLoading, authenticateService } = fcl.useServiceDiscovery({ fcl });

  if(user.loggedIn) addUser(user.addr);
  console.log(user.addr);
  

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
              <Text style={styles.titleFlowContainer}>{user.addr}</Text>
              <TouchableOpacity onPress={() => Clipboard.setStringAsync(user.addr)}>
                <Text style={styles.message}>Copy wallet address</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonFlowContainer}>
              <Button text='Log out' type='log-out-button' onPress={logout} textStyles={{padding:8}} containerStyles={{borderRadius: 10}} />
            </View>
          </View>
          <View style={styles.flowInfoContainer}>
            <View style={styles.innerFlowInfoContainer}>
              <Text style={styles.titleFlowContainer}>Flow Balance</Text>
              <View style={{flexDirection:'row', marginTop:8}}>
                {services.map((service, index) => (
                  <Image style={styles.imageProviders} source={{ uri: service?.provider?.icon }} />
                ))}
               <Text style={[styles.message, {alignSelf:'center'}]}>500.00</Text>
              </View>
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
              {!isLoading && services.map((service, index) => (
                <TouchableOpacity key={index} style={styles.blocto}  onPress={() => authenticateService(service)}>
                  <View style={styles.providersContainer}>
                    <Image style={styles.imageProviders} source={{ uri: service?.provider?.icon }} />
                    <Text style={{color:'#000', fontWeight:'bold'}}>{service?.provider?.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
                
            </View>
        </>
      )}
    </View>
  );
};

export default LogIn;