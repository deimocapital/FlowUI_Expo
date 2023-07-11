import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './styles';

const RewardsCard = ({level, rewards, image}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.level}>Level {level}</Text>

        <Text style={styles.levelText}>
          Missing {level} more reserves for next level
        </Text>

        <View style={styles.outerProgressionBar}>
          <View style={styles.innerProgressionBar} />
          <Text style={styles.progression}>2/5</Text>
        </View>

        <View style={styles.rewardsContainer}>
          <Text style={styles.rewardTitle}>Your current rewards</Text>
          <Text style={styles.rewards}>
            5% discount on all future reservations
          </Text>
          <Text style={styles.rewards}>24/7 priority customer support</Text>
          <Text style={styles.rewards}>
            Access to exclusive homes and discounts
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RewardsCard;
