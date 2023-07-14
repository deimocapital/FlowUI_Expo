import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";

import Button from '../../components/Button';
import DropdownInput from '../../components/DropdownInput';
import ImageSelector from '../../components/ImageSelector';
import { addAccomodation } from '../../utils/AccomodationApi';

import places from '../../data/places';
import styles from './styles';

const Create = () => {
  const [location, setLocation] = useState("");
  const [houseTitle, setHouseTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([""]);
  const [price, setPrice] = useState("");
  const [rules, setRules] = useState("");
  const [instructions, setInstructions] = useState("");

  const information ={location,houseTitle,address,description,images,price, rules, instructions};

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>Let's create a FLOW accomodation</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Where is it located?</Text>
        <DropdownInput location={location} setLocation={setLocation} />
        <Text style={styles.inputTitle}>House Title</Text>
        <TextInput 
          placeholder="Mazatlan Tree House..." 
          value={houseTitle}
          onChangeText={setHouseTitle}
          style={styles.input} 
          keyboardType="default" 
          placeholderTextColor="#7e7f80" 
          selectionColor="#fff"  
        />

        <Text style={styles.inputTitle}>Enter Address</Text>
        <GooglePlacesAutocomplete
          placeholder='Search'
          textInputProps={{
            placeholderTextColor: 'grey',
            returnKeyType: "search"
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              backgroundColor: '#000',
              fontSize: 14,
              color: '#fff',
            },
          }}
          onPress={(data, details = null) => {
            setAddress(data.description);
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          enablePoweredByContainer={false}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <Text style={styles.inputTitle}>Description</Text>
        <TextInput 
          multiline = {true}
          numberOfLines = {5} 
          value={description}
          onChangeText={setDescription}
          placeholder="The best experience..."  
          keyboardType="default" 
          placeholderTextColor="#7e7f80" 
          selectionColor="#fff"
          style={[styles.input, {height: 90}]}
        />

        <Text style={styles.inputTitle}>Rules</Text>
        <TextInput 
          multiline = {true}
          numberOfLines = {5} 
          value={rules}
          onChangeText={setRules}
          placeholder="The best experience..."  
          keyboardType="default" 
          placeholderTextColor="#7e7f80" 
          selectionColor="#fff"
          style={[styles.input, {height: 90}]}
        />

        <Text style={styles.inputTitle}>Instructions</Text>
        <TextInput 
          multiline = {true}
          numberOfLines = {5} 
          value={instructions}
          onChangeText={setInstructions}
          placeholder="The best experience..."  
          keyboardType="default" 
          placeholderTextColor="#7e7f80" 
          selectionColor="#fff"
          style={[styles.input, {height: 90}]}
        />

        <Text style={styles.inputTitle}>Event images</Text>
         <ImageSelector images={images} setImages={setImages} />
        
        <Text style={styles.inputTitle}>Price per night ($FLOW)</Text>
        <TextInput 
          placeholder="$130" 
          value={price}
          onChangeText={setPrice}
          style={styles.input} 
          keyboardType="numeric" 
          placeholderTextColor="#7e7f80" 
          selectionColor="#fff"  
        />
      </View>
      <View style={{marginBottom: 35, alignSelf:'flex-end'}}>
        <Button text='Create Accomodation' onPress={()=> addAccomodation(information)} containerStyles={{borderRadius:5, padding:5}} />
      </View>
    </ScrollView>
  );
};

export default Create;
