import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

const FormCaracInspecao = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Características de Inspeção :</Text>
      <View style={styles.ficha}>
        <Text style={styles.subTitulo}>Visual:</Text>
        <TextInput
          style={styles.input2}
          multiline
          minHeight={100}
          numberOfLines={40}
          value={props.visual}
          onChangeText={props.setVisual}
        />
        <Text style={styles.subTitulo}>Dimensional:</Text>
        <TextInput
          style={styles.input2}
          multiline
          minHeight={100}
          numberOfLines={40}
          value={props.dimensional}
          onChangeText={props.setDimensional}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  ficha: {
    width: '95%',
    minHeight: 270,
    paddingTop: 7,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 4,
    alignSelf: 'flex-start',
    paddingLeft: 2,
    color: '#484848',
  },
  containerInput: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  inputRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input2: {
    backgroundColor: '#EEF7F7',
    height: 35,
    width: '97%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginLeft: 5,
  },
  subTitulo: {
    paddingLeft: 5,
    paddingTop: 5,
  },
});

export default FormCaracInspecao;
