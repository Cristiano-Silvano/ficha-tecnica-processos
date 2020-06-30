import React, {useRef} from 'react';
import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const FormTemperaturas1 = (props) => {
  const bico1 = useRef(null);
  const zona11 = useRef(null);
  const zona21 = useRef(null);
  const zona31 = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>
        Temperaturas: Opção 3 - Ajuste Manual
      </Text>
      <ScrollView style={styles.ficha}>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.bico1}
              onChangeText={props.setBico1}
              placeholder="Bico"
              returnKeyType="next"
              onSubmitEditing={() => {
                bico1.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.zona11}
              onChangeText={props.setZona11}
              placeholder="Zona 1"
              ref={bico1}
              returnKeyType="next"
              onSubmitEditing={() => {
                zona11.current.focus();
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
              value={props.zona21}
              onChangeText={props.setZona21}
              placeholder="Zona 2"
              ref={zona11}
              returnKeyType="next"
              onSubmitEditing={() => {
                zona21.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.zona31}
              onChangeText={props.setZona31}
              placeholder="Zona 3"
              ref={zona21}
              returnKeyType="next"
              onSubmitEditing={() => {
                zona31.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.zona41}
            onChangeText={props.setZona41}
            placeholder="Zona 4"
            ref={zona31}
          />
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
    maxHeight: 145,
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

export default FormTemperaturas1;
