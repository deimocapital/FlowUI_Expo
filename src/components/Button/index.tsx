import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

interface ButtonProps {
  text: string;
  type: string;
  onPress: () => void;
  containerStyles?: object;
}

const Button = ({text, type, onPress, containerStyles}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#3bff86',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderColor: '#a15e1b',
  },
  text: {
    fontSize: 17,
    color: '#000',
    fontWeight: '300',
    padding: 3,
  },
});

export default Button;
