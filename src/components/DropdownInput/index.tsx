import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import countryList from 'country-list';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const countries = countryList.getNames();
const data = countries.map((country: String) => ({ label: country, value: country }));


const DropdownInput = ({location, setLocation}) => {
    
    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        labelField="label"
        containerStyle={styles.containerStyle}
        itemTextStyle={{color:'blue'}}
        itemContainerStyle={{backgroundColor:'#fff'}}
        valueField="value"
        placeholder="Country"
        searchPlaceholder="Search..."
        value={location}
        onChange={item => {
          setLocation(item.value);
        }}
      />
    );
};

export default DropdownInput;