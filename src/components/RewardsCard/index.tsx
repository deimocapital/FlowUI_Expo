import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {UserContext} from '../../context/UserContext';
import {getNFT} from "../../../cadence/scripts/getNFT";
import { getAndUpdatePrimeUser } from '../../utils/UserApi';
import {createNFT} from "../../../cadence/transactions/createNFT";
import { getUser } from '../../utils/UserApi';
import images from '../../assets';
import styles from './styles';
import Button from '../Button';
import '../../../flow/config';
import * as fcl from "@onflow/fcl/dist/fcl-react-native";


const RewardsCard = ({level, image}) => {
  const user = useContext(UserContext);
  const [progression, setProgression] = useState(3);
  const [showPerks, setShowPerks] = useState(false);
  const [nftURL, setNftUrl] = useState('');

  const ImageURLS = ["https://nftstorage.link/ipfs/bafkreicjwcniqyfkggvljws6lkwtkobdpjmhbeicnohsvskak5qnwie77q"];


  useEffect(() => {
    getUser(user.user).then((data) => {
      // console.log(data);
      setProgression(data.rewardCounter);
    });
  });
  

  const MintNFT =async() =>{
    const transactionID = await fcl.send([
      fcl.transaction(createNFT),
      fcl.args([fcl.arg(ImageURLS[0], fcl.t.String)]),
      fcl.payer(fcl.authz),
      fcl.proposer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.limit(9999)
    ]).then(fcl.decode)

    console.log(transactionID);
  };

  const RevealNFT = async() =>{

    const result = await fcl.send([
      fcl.script(getNFT), fcl.args([fcl.arg(user.user, fcl.t.Address)])
    ]).then(fcl.decode)
    
    console.log(result);
    
    setNftUrl(result[1]);
    setShowPerks(true);
    getAndUpdatePrimeUser(user.user);
  };

  const getPercentage = (progression) => {
    switch (progression) {
      case 1:
        return '33';
      case 2:
        return '66';
      case 3:
        return '100';
    
      default:
        return '0';
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {showPerks ? (
          <Image source={{uri:nftURL}} style={styles.image} />
        ): (
          <Image source={images.bronzeCard} style={[styles.image, {borderColor:'#fff', borderWidth:2}]} />
        )}
        
      </View>

      <View style={styles.infoContainer}>
        {(progression === 3) ? (
          <Text style={[styles.level, {alignSelf:'center', fontSize:20}]}>Mint & Reveal your NFT!</Text>
        ) : (
          <Text style={styles.level}>Make {progression} more reservations for prime badge</Text>
        )}
        
        <View style={styles.outerProgressionBar}>
          <View style={[styles.innerProgressionBar, {width: `${getPercentage(3)} %`}]} />
          <Text style={styles.progression}>{progression}/3</Text>
        </View>
        {(progression === 3 && !showPerks) && (
          <View style={[styles.rewardsContainer, {marginTop: 60}]}>
            <Button
              text="MintNFT"
              onPress={MintNFT}
              containerStyles={{borderRadius:10, backgroundColor:'#fff', borderWidth:2, borderColor:'#3bff86'}} 
            />
            <Button
              text="RevealNFT"
              onPress={RevealNFT}
              containerStyles={{borderRadius:10, backgroundColor:'#fff', borderWidth:2, borderColor:'#3bff86'}} 
            />
          </View>
        )}
        {showPerks && (
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
        )}
      </View>
    </View>
  );
};

export default RewardsCard;
