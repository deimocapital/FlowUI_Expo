import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());  
  const [arrivalDate, setArrivalDate] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const toogleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({type}, selectedDate) => {
    if(type === 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
    } else {
        toogleDatePicker();
    }
  };

  return (
    <View>
    {showPicker && (
      <DateTimePicker
       mode="date"
       display='spinner'
       value={date}
       onChange={onChange}
      />
    )}
    {!showPicker && (
        <Pressable onPress={toogleDatePicker}>
            <TextInput 
            placeholder='Select Arrival Date'
            editable={false}
            />
        </Pressable>
    )}
    </View>
  )
}

export default DatePicker;