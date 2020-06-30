import React, {useRef} from 'react';
import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const FormTemperaturas2 = (props) => {
  const bico2 = useRef(null);
  const zona12 = useRef(null);
  const zona22 = useRef(null);
  const zona32 = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Temperaturas:</Text>
      <ScrollView style={styles.ficha}>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.bico2}
              onChangeText={props.setBico2}
              placeholder="Bico"
              returnKeyType="next"
              onSubmitEditing={() => {
                bico2.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.zona12}
              onChangeText={props.setZona12}
              placeholder="Zona 1"
              ref={bico2}
              returnKeyType="next"
              onSubmitEditing={() => {
                zona12.current.focus();
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
              value={props.zona22}
              onChangeText={props.setZona22}
              placeholder="Zona 2"
              ref={zona12}
              returnKeyType="next"
              onSubmitEditing={() => {
                zona22.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.zona32}
              onChangeText={props.setZona32}
              placeholder="Zona 3"
              ref={zona22}
              returnKeyType="next"
              onSubmitEditing={() => {
                zona32.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.zona42}
            onChangeText={props.setZona42}
            placeholder="Zona 4"
            ref={zona32}
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

export default FormTemperaturas2;
