import React, {useRef} from 'react';

import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const FormVazao = (props) => {
  const dosagemCursos = useRef(null);
  const descompressaoCursos = useRef(null);
  const aberturaCursos = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Cursos:</Text>
      <ScrollView style={styles.ficha}>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.dosagemCursos}
              onChangeText={props.setDosagemCursos}
              placeholder="Dosagem"
              returnKeyType="next"
              onSubmitEditing={() => {
                dosagemCursos.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.descompressaoCursos}
              onChangeText={props.setDescompressaoCursos}
              placeholder="Descompressão"
              ref={dosagemCursos}
              returnKeyType="next"
              onSubmitEditing={() => {
                descompressaoCursos.current.focus();
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
              value={props.aberturaCursos}
              onChangeText={props.setAberturaCursos}
              placeholder="Abertura"
              ref={descompressaoCursos}
              returnKeyType="next"
              onSubmitEditing={() => {
                aberturaCursos.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.extHidraulicoCursos}
              onChangeText={props.setExtHidraulicoCursos}
              placeholder="Extrato Hidráulico"
              ref={aberturaCursos}
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
  input: {
    backgroundColor: '#EEF7F7',
    flex: 1,
    height: 35,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginLeft: 5,
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

export default FormVazao;
