import React, {useState} from 'react';
import { View, Text, Pressable, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';

const DatePicker = ({date, setDate}) => {
  const [fecha, setFecha] = useState(new Date());  
  
  const [showPicker, setShowPicker] = useState(false);


  const toogleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({type}, selectedDate) => {
    if(type === 'set') {
      const currentDate = selectedDate;
      setFecha(currentDate);

      if(Platform.OS === 'android') {
        toogleDatePicker();
        setDate(currentDate.toDateString());
      }
    } else {
        toogleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setDate(date.toDateString());
    toogleDatePicker();
  };

  return (
    <View>
    {showPicker && (
      <DateTimePicker
       mode="date"
       display='spinner'
       value={fecha}
       onChange={onChange}
       style={styles.datePicker}
       maximumDate={new Date(2024, 12, 31)}
      />
    )}

    {showPicker && Platform.OS === 'ios' && (
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <TouchableOpacity style={[styles.button, styles.pickerButton, {backgroundColor:'#fff'}]} onPress={toogleDatePicker}>

          <Text style={[styles.buttonText,{color: '#075985'}]}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.pickerButton]} onPress={confirmIOSDate}>

          <Text style={[styles.buttonText,]}>Confirm</Text>
        </TouchableOpacity>
      </View>
    )}

    {!showPicker && (
      <View style={{flexDirection:'col', marginTop:10}}>
          <Pressable style={{}} onPress={toogleDatePicker}>
              <TextInput 
              placeholder='Select Date'
              value={date}
              onChangeText={setDate}
              editable={false}
              onPressIn={toogleDatePicker}
              style={styles.input}
              placeholderTextColor="#7e7f80" 
              selectionColor="#fff"  
              />
          </Pressable>
      </View>
    )}
    </View>
  )
}

const styles = StyleSheet.create({
  datePicker: {
    height: 120,
    marginTop: -10,
    backgroundColor: 'transparent',
    color: '#fff',
  },
  pickerButton:{
    paddingHorizontal:20,
  },
  input:{
    color: '#fff',
    height: 40,
    width: '100%',
    alignSelf:'center',
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  button:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: '#075985',
  },
  buttonText:{
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
});
export default DatePicker;