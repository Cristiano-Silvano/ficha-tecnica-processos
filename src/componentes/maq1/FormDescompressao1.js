import React, {useRef} from 'react';
import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const FormDescompressao1 = (props) => {
  const pDescompressao = useRef(null);
  const vDescompressao = useRef(null);
  const cDescompressao = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Descompressão:</Text>
      <ScrollView style={styles.ficha}>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.pDescompressao}
              onChangeText={props.setPDescompressao}
              placeholder="Pressão"
              returnKeyType="next"
              onSubmitEditing={() => {
                pDescompressao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.vDescompressao}
              onChangeText={props.setVDescompressao}
              placeholder="Velocidade"
              ref={pDescompressao}
              returnKeyType="next"
              onSubmitEditing={() => {
                vDescompressao.current.focus();
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
              value={props.cDescompressao}
              onChangeText={props.setCDescompressao}
              placeholder="Curso"
              ref={vDescompressao}
              returnKeyType="next"
              onSubmitEditing={() => {
                cDescompressao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.rDosagem}
              onChangeText={props.setRDosagem}
              placeholder="Retardo Dosagem"
              ref={cDescompressao}
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

export default FormDescompressao1;
