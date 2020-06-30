import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';

const FormDescCilindro = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Descarga do Cilindro:</Text>
      <View style={styles.ficha}>
        <Picker
          selectedValue={props.selectedValue}
          style={styles.inputPicker}
          onValueChange={(itemValue, itemIndex) =>
            props.setSelectedValue(itemValue)
          }>
          <Picker.Item label="Com Retorno" value="COM RETORNO" />
          <Picker.Item label="Sem Retorno" value="SEM RETORNO" />
        </Picker>
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
    marginBottom: 20,
  },
  ficha: {
    width: '95%',
    minHeight: 55,
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
  inputPicker: {
    flex: 1,
    height: 35,
    width: '100%',
  },
  containerInput: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginBottom: 10,
  },
});

export default FormDescCilindro;
