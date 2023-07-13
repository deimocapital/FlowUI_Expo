import React, {useState,useEffect} from 'react';
import {View, ScrollView, Text, Image} from 'react-native';

import PlaceCard from '../../components/PlaceCard';
import { getAccomodations } from '../../utils/AccomodationApi';
import styles from './styles';
import images from '../../assets';


const Explore = () => {

  const [accomodations, setAccomodations] = useState([{
    location:'',
    houseTitle:'',
    address:'',
    description:'',
    images:'',
    price:'',
    owner:'',
    isReserved:'',
  }]);

  useEffect(() => {
    getAccomodations().then((airbnb) => {
      console.log(airbnb[0].images);
      
      setAccomodations(airbnb);
    });
  },[]);
  
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>
        Find your next destination, pay with $FLOW
      </Text>
      <View style={styles.cardsContainer}>

          {accomodations.map((item) => (
              <PlaceCard
              title={item.houseTitle}
              country={item.location}
              image={item.images}
              price={item.price}
            />
          ))}
      </View>
    </ScrollView>
  );
};

export default Explore;
