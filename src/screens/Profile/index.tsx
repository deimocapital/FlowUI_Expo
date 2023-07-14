import React from 'react';
import { View, Text } from 'react-native';
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import {useNavigation} from '@react-navigation/native';
import "../../../flow/config";
import styles from './styles';
import Button from '../../components/Button';

const Profile= ({route}) => {
  const navigation = useNavigation();
  const {userDB} = route.params;
  const{username, walletID} = userDB;
  
  const logout = () => {
    fcl.unauthenticate();
    navigation.navigate('LogIn');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Profile</Text>
      <View>
        <Text style={[styles.title, {fontSize: 19}]}>Address</Text>
        <View style={styles.flowInfoContainer}>
          <View style={styles.innerFlowInfoContainer}>
            <Text style={styles.titleFlowContainer}>{walletID}</Text>
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
    </View>
  )
}

export default Profile;