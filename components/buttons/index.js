import React from 'react';
import {
  Text, TouchableOpacity,
} from 'react-native';
import styles from './style';

function Chipbutton({ text, customStyle, customText }) {
  return (

    <TouchableOpacity style={[styles.button, { ...customStyle }]}>
      <Text style={[styles.buttonText, { ...customText }]}>{text}</Text>
    </TouchableOpacity>

  );
}

export default Chipbutton;
