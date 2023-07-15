import {View, Text, useContext} from 'react-native';

import React from 'react';

import RewardsCard from '../../components/RewardsCard';

import images from '../../assets';
import styles from './styles';

const Rewards = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Rewards</Text>
      <RewardsCard
        level="1"
        image={images.space}
      />
    </View>
  );
};

export default Rewards;
