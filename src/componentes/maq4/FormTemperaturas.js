import React, {useRef} from 'react';
import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const FormTemperaturas = (props) => {
  const bico = useRef(null);
  const zona1 = useRef(null);
  const zona2 = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Temperaturas:</Text>
      <ScrollView style={styles.ficha}>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.bico}
              onChangeText={props.setBico}
              placeholder="Bico"
              returnKeyType="next"
              onSubmitEditing={() => {
                bico.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.zona1}
              onChangeText={props.setZona1}
              placeholder="Zona 1"
              ref={bico}
              returnKeyType="next"
              onSubmitEditing={() => {
                zona1.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.zona2}
              onChangeText={props.setZona2}
              placeholder="Zona 2"
              ref={zona1}
              returnKeyType="next"
              onSubmitEditing={() => {
                zona2.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.zona3}
              onChangeText={props.setZona3}
              placeholder="Zona 3"
              ref={zona2}
            />
          </View>
        </View>
      </ScrollView>
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
    maxHeight: 100,
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
    minWidth: 140,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginLeft: 5,
  },
});

export default FormTemperaturas;
