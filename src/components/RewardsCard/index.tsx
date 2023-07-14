import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const RewardsCard = ({level, rewards, image}) => {
  const [progression, setProgression] = useState(0);
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.level}>Make {level} more reservations for prime badge</Text>

        <Text style={styles.levelText}>
          Missing {level} more reserves for next level
        </Text>

        <View style={styles.outerProgressionBar}>
          <View style={styles.innerProgressionBar} />
          <Text style={styles.progression}>2/5</Text>
        </View>
        {!progression ? <Text style={styles.levelText}> Keep grinding Bro</Text>:
        
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
        }
      </View>
    </View>
  );
};

export default RewardsCard;
