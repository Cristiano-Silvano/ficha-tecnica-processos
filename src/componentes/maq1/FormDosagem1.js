import React, {useRef} from 'react';
import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const FormDosagem1 = (props) => {
  const cpDosagem = useRef(null);
  const vDosagem = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Dosagem:</Text>
      <ScrollView style={styles.ficha}>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.cPDosagem}
              onChangeText={props.setCPDosagem}
              placeholder="Contra Pressão"
              returnKeyType="next"
              onSubmitEditing={() => {
                cpDosagem.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.vDosagem}
              onChangeText={props.setVDosagem}
              placeholder="Velocidade"
              ref={cpDosagem}
              returnKeyType="next"
              onSubmitEditing={() => {
                vDosagem.current.focus();
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
              value={props.cDosagem}
              onChangeText={props.setCDosagem}
              placeholder="Curso"
              ref={vDosagem}
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

export default FormDosagem1;
