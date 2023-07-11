import React from 'react';
import {View, Text} from 'react-native';

import RewardsCard from '../../components/RewardsCard';

import images from '../../assets';
import styles from './styles';

const Rewards = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Rewards</Text>
      <RewardsCard
        level="3"
        rewards={{
          reservationDiscounts: '5',
          prioritySupport: true,
          accessToExclusiveHomes: true,
        }}
        image={images.space}
      />
    </View>
  );
};

export default Rewards;
