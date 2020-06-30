/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

const FormSwitch = (props) => {
  return (
    <View style={styles.containerInput}>
      <Text style={styles.textoInput}>{props.title}:</Text>
      <View style={styles.containerSwitch}>
        <Switch
          trackColor={{false: 'gray', true: 'gray'}}
          thumbColor={props.value ? '#48C2C2' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={props.onValueChange}
          value={props.value}
        />
        <Text style={{color: props.value ? '#48C2C2' : 'tomato'}}>
          {props.title2}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 10,
    paddingRight: 10,
  },
  input2: {
    backgroundColor: '#EEF7F7',
    height: 38,
    minWidth: 70,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginLeft: 5,
  },
  textoInput: {color: '#616161'},
  containerSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default FormSwitch;
