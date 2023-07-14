import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Button from '../../components/Button';

const Profile= () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Profile</Text>
      <View>
        <Text style={[styles.title, {fontSize: 19}]}>Address</Text>
        <View style={styles.flowInfoContainer}>
          <View style={styles.innerFlowInfoContainer}>
            <Text style={styles.titleFlowContainer}>0x43ADJ2</Text>
            <Text style={styles.message}>Copy wallet address</Text>
          </View>
          <View style={styles.buttonFlowContainer}>
            <Button text='Log out' type='log-out-button' onPress={() => console.warn('Log out')} textStyles={{padding:8}} containerStyles={{borderRadius: 10}} />
          </View>
        </View>

        <View style={styles.flowInfoContainer}>
          <View style={styles.innerFlowInfoContainer}>
            <Text style={styles.titleFlowContainer}>Flow Balance</Text>
            <Text style={styles.message}>150.00</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Profile;