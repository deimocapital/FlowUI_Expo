import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Pressable, ScrollView, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {mutate, tx} from "@onflow/fcl"

import { UserContext } from '../../context/UserContext';
import { addReservation } from '../../utils/ReservationApi';
import styles from './styles';
import Button from '../../components/Button';
import { getUser } from '../../utils/UserApi';


import * as fcl from "@onflow/fcl/dist/fcl-react-native"; 

const RentalSpecs = ({route}) => {
  const user = useContext(UserContext);
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState({
    rewardCounter: 0,
    isPrimeUser: false,
    walletID: ''
  });

  const[arrivalDate, setArrivalDate] = useState('');
  const[departureDate, setDepartureDate] = useState('');
  const[guests, setGuests] = useState('1');

  const onPress = () => {
    navigation.navigate('Explore');
  };

  useEffect(() => {
    getUser(user.user).then((user) => {
      setUsuario(user);
    });
  }, []);


  const visitor = user.user;
  
 const {title, country, address, image, price, owner, description, instructions, rules} = route.params;

 //const dates = {arrivalDat:'Tuesday, July 30, 2023', departureDat:'Wedenesday, July 31, 2023'};
 const dates = {arrivalDate, departureDate};

  const reservation = {dates, owner, title, country, address, image, price, description, guests, instructions, rules, visitor};

  const finalPrice = Number(price) + 10;
  const finalPriceDiscount = (Number(price) + 10) - (Number(price) * 0.05);

  var flowPrice = ''

  if(usuario.isPrimeUser) {
    reservation.price = finalPriceDiscount;
    flowPrice = ''+finalPriceDiscount
  } else{
    reservation.price = finalPrice;
    flowPrice = ''+finalPrice
  }

  if (!flowPrice.includes('.')) {
    flowPrice += '.0'; // Append '.0' for decimal
}

  const Pay = async () => { 
  
    let amount = flowPrice;
    let recepient = owner
    var txId = await mutate({
        cadence: `
        import FungibleToken from 0x9a0766d93b6608b7
        import FlowToken from 0x7e60df042a9c0868

        transaction(recepient: Address, amount: UFix64){
          prepare(signer: AuthAccount){
            let sender = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)
              ?? panic("Could not borrow Provider reference to the Vault")
    
            let receiverAccount = getAccount(recepient)
    
            let receiver = receiverAccount.getCapability(/public/flowTokenReceiver)
              .borrow<&FlowToken.Vault{FungibleToken.Receiver}>()
              ?? panic("Could not borrow Receiver reference to the Vault")
    
                    let tempVault <- sender.withdraw(amount: amount)
            receiver.deposit(from: <- tempVault)
          }
        }
        `,
        args: (arg, t) => [
          arg(recepient, t.Address), // to "0x16fd204f231e5ac4"
          arg(amount, t.UFix64),               // amount  
        ],
        payer: fcl.authz,
                proposer: fcl.authz,
                authorizations: [fcl.authz],
                limit: 500,
      })

}

  return (
    <ScrollView style={styles.root}>
      <View style={{flexDirection:'row', marginBottom:20}}>
        <View style={styles.prevButtonContainer}>
          <Pressable onPress={onPress}>
            <Text style={{color: '#fff'}}>←</Text>
          </Pressable>
        </View>
        <View style={styles.headingContainer}>

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.location}>{country}</Text>
        </View>
      </View>
      <Text style={styles.description}>
        {description}
      </Text>

      {/* Image Carousel */}
      {/* <ImageCarousel images={image} /> */}
      <Image source={{uri:image}} style={{margin: 10, height: 250, borderRadius: 15}} />

      <View
        style={{
          marginVertical: 15,
          width: '100%',
          height: 1,
          backgroundColor: '#fff',
        }}
      />
      <View style={{margin: 5}}>
        <View style={{marginVertical:10}}>
          <Text style={styles.lastTitles}>Cost</Text>
          <Text style={styles.lastTexts}>${price} FLOW / night</Text>
        </View>
        <View style={{marginVertical:10}}>
          <Text style={styles.lastTitles}>Location</Text>
          <Text style={styles.lastTexts}>{address}</Text>
        </View>

        <View style={{marginVertical:10}}>
          <Text style={styles.lastTitles}>Rules</Text>
          <Text style={styles.lastTexts}>{rules}</Text>
        </View>

        <View style={{marginVertical:10}}>
          <Text style={styles.lastTitles}>Instructions</Text>
          <Text style={styles.lastTexts}>{instructions}</Text>
        </View>

        <View style={{marginVertical:10}}>
          <Text style={styles.lastTitles}>Arrival Date</Text>
          <TextInput 
            placeholder="July 20, 2023" 
            value={arrivalDate}
            onChangeText={setArrivalDate}
            style={[styles.input, {marginTop: 10}]} 
            keyboardType="default" 
            placeholderTextColor="#7e7f80" 
            selectionColor="#fff"  
          />
          <Text style={styles.lastTitles}>Departure Date</Text>
          <TextInput 
            placeholder="July 25, 2023" 
            value={departureDate}
            onChangeText={setDepartureDate}
            style={[styles.input, {marginTop: 10}]} 
            keyboardType="default"
            placeholderTextColor="#7e7f80" 
            selectionColor="#fff"  
          />

        </View>

        <Text style={styles.lastTitles}>Number of Guests</Text>
        <TextInput 
          placeholder="Enter # of guests" 
          value={guests}
          onChangeText={setGuests}
          style={[styles.input, {marginTop: 10}]} 
          keyboardType="number-pad" 
          placeholderTextColor="#7e7f80" 
          selectionColor="#fff"  
        />
        <Text style={[styles.lastTitles, {marginBottom:5}]}>Payment</Text>

        <View style={{marginVertical: 5 ,flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style={styles.description}>price</Text>
          <Text style={styles.description}>$ {price}</Text>
        </View>

        <View style={{marginBottom: 5 ,flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style={styles.description}>Floway fee</Text>
          <Text style={styles.description}>$10</Text>
        </View>

        <View style={{marginBottom: 5 ,flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style={styles.description}>Total</Text>
          <Text style={styles.description}>$ {finalPrice}</Text>
        </View>

        <View style={{marginBottom: 5 ,flexDirection: 'row', justifyContent:'space-between'}}>

          {usuario.isPrimeUser && (
            <>
            <Text style={styles.description}>Total - <Text style={{color:'#3bff86'}}>5% reward</Text> </Text>
            <Text style={[styles.description , {color:'#3bff86'}]}>$ {finalPriceDiscount}</Text>
            </>
          )}
        </View>

      </View>
      <Button
        text="Make reservation"
        type="make-reservation"
        onPress={()=> {
          addReservation(reservation);
          Pay();
          console.log(reservation);
          console.log(flowPrice);
          
          //makeReservationAndPay();
          navigation.navigate('Explore');
        }}
        containerStyles={{
          width: '97%',
          alignSelf: 'center',
          borderRadius: 6,
          marginVertical: 15,
        }}
      />
    </ScrollView>
  );
};

export default RentalSpecs;
