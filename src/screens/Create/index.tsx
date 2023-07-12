import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import DropdownInput from '../../components/DropdownInput';
import styles from './styles';

import places from '../../data/places';

const Create = () => {
  const [location, setLocation] = useState("");
  const [houseTitle, setHouseTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImage] = useState(["https://a0.muscache.com/im/pictures/8ac03edc-283d-4b11-9420-0ddc8349be7e.jpg?im_w=960", "https://a0.muscache.com/im/pictures/eaecc202-4b98-405a-8102-085fa7da2871.jpg?im_w=480"]);
  const [price, setPrice] = useState("");
  const [dates, setDates] = useState(["23/05/2021", "24/05/2021"]);

  const information ={location,houseTitle,address,description,images,price,dates}

  console.log(information);
  

  return (
    <View style={styles.root}>
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

        <Text style={styles.inputTitle}>Event images</Text>
        
        

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

        <Text style={styles.inputTitle}>Dates Available</Text>

      </View>
    </View>
  );
};

export default Create;
