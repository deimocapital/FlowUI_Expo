import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { UserContext } from '../../context/UserContext';
import { CurrentUser } from "@onflow/typedefs";
import { useAccount } from "../../hooks/useAccount";
import { addUser } from '../../utils/UserApi';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import Button from '../../components/Button';

import "../../../flow/config";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import { query } from "@onflow/fcl";

const LogIn = () => {
  const [usuario, setUsuario] = useState<CurrentUser | null>({loggedIn: null});
  const { setUser } = useContext(UserContext);
  const { account, error } = useAccount(usuario?.addr);

  const imageAddress = 'https://classicalarchitectures.weebly.com/uploads/1/2/6/8/126890479/sculptural-home-plays-volumes-curvy-roofline-1-exterior_orig.jpg';

  const [balance, setBalance] = useState(null);
  useEffect(() => fcl.currentUser.subscribe(setUsuario), []);
  const { services, isLoading, authenticateService } = fcl.useServiceDiscovery({ fcl });

  if(usuario.loggedIn){
    
    setUser(usuario.addr);
    addUser(usuario.addr);
  };
  
  
  const logout = () => {
    fcl.unauthenticate();
  };
  

  const getFlowBalance = async () => {
    let address = usuario.addr;
    const cadence = `
    import FungibleToken from 0x9a0766d93b6608b7
    import FlowToken from 0x7e60df042a9c0868
  
      pub fun main(address: Address): UFix64 {
        let account = getAccount(address)
  
        let vaultRef = account.getCapability(/public/flowTokenBalance)
          .borrow<&FlowToken.Vault{FungibleToken.Balance}>()
          ?? panic("Could not borrow Balance reference to the Vault")
  
        return vaultRef.balance
      }
    `;
    const args = (arg, t) => [arg(address, t.Address)];
    const balance = await query({ cadence, args });
    console.log({ balance });
    setBalance(balance);
  };

  return (
     <View style={styles.root}>
      {(usuario.loggedIn) ? (
        <View style={{padding:10}}>
        <Text style={styles.title}>Profile</Text>
          <Text style={[styles.title, {fontSize: 19}]}>Address</Text>
          <View style={styles.flowInfoContainer}>
            <View style={styles.innerFlowInfoContainer}>
              <Text style={styles.titleFlowContainer}>{usuario.addr}</Text>
              <TouchableOpacity onPress={() => Clipboard.setStringAsync(usuario.addr)}>
                <Text style={styles.message}>Copy wallet address</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonFlowContainer}>
              <Button text='Log out' type='log-out-button' onPress={logout} textStyles={{padding:8}} containerStyles={{borderRadius: 10}} />
            </View>
          </View>
          <View style={styles.flowInfoContainer}>
            <View style={styles.innerFlowInfoContainer}>
              <Text style={styles.titleFlowContainer}>Flow Balance</Text>
              <View style={{flexDirection:'row', marginTop:8}}>
                {services.map((service, index) => (
                  <Image key={index} style={styles.imageProviders} source={{ uri: service?.provider?.icon }} />
                ))}
               <Text style={[styles.message, {alignSelf:'center'}]}>{(balance / 1).toFixed(2)} $FLOW</Text>
              </View>
            </View>
            <View style={styles.buttonFlowContainer}>
              <Button text='Reload Balance' type='log-out-button' onPress={getFlowBalance} textStyles={{padding:8}} containerStyles={{borderRadius: 10}} />
            </View>
          </View>

            <Text style={[styles.title, {fontSize: 19}]}>Settings</Text>
            <View style={styles.settingContainer}>
              <View style={styles.personalInformationContainer}>
                  <Text style={styles.message}>Personal Information</Text>
                  <Entypo name='chevron-right' size={20} color='#fff' />
              </View>
            </View>
            <View style={styles.settingContainer}>
              <View style={styles.personalInformationContainer}>
                  <Text style={styles.message}>Send $FLOW</Text>
                  <Entypo name='chevron-right' size={20} color='#fff' />
              </View>
            </View>
        </View>
      ):(
        <>
          <View style={styles.imageContainer}>
            <Image source={{uri:imageAddress}} style={styles.cardImage} />
            </View>
          <View style={styles.headingContainer}>
              <Text style={styles.title}>Welcome to Floway!</Text>
              <View style={{width:'70%'}}>
                <Text style={styles.message}>The decentralized house reservation platform built on Flow Blockchain.</Text>
              </View>
          </View>
            <View style={{marginTop: 40, width:'95%', alignSelf: 'center'}}>
              {!isLoading && services.map((service, index) => (
                <TouchableOpacity key={index} style={styles.blocto}  onPress={() => authenticateService(service)}>
                  <View style={styles.providersContainer}>
                    <Image style={styles.imageProviders} source={{ uri: service?.provider?.icon }} />
                    <Text style={{color:'#000', fontWeight:'bold'}}>{service?.provider?.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
                
            </View>
        </>
      )}
    </View>
  );
};

export default LogIn;