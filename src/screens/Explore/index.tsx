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
      setAccomodations(airbnb);
    });
  },[]);
  
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>
        Find your next destination, pay with $FLOW
      </Text>
      <View style={styles.cardsContainer}>

          {accomodations.map((item, i) => (
              <PlaceCard
              key={i}
              title={item.houseTitle}
              country={item.location}
              address = {item.address}
              image={item.images}
              price={item.price}
              description={item.description}
            />
          ))}
      </View>
    </ScrollView>
  );
};

export default Explore;
