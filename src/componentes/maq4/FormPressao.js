import React, {useRef} from 'react';

import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const FormPressao = (props) => {
  const inicioFechamento = useRef(null);
  const segMolde = useRef(null);
  const trancamento = useRef(null);
  const encosteRetorno = useRef(null);
  const injecao = useRef(null);
  const packPressurePressao = useRef(null);
  const recalquePressao = useRef(null);
  const dosagem = useRef(null);
  const descompressao = useRef(null);
  const abertura = useRef(null);
  const extHidraulicoPressao = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Pressão:</Text>
      <ScrollView style={styles.ficha}>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.inicioFechamento}
              onChangeText={props.setInicioFechamento}
              placeholder="Início Fechamento"
              returnKeyType="next"
              onSubmitEditing={() => {
                inicioFechamento.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.segMolde}
              onChangeText={props.setSegMolde}
              placeholder="Segurança de molde"
              ref={inicioFechamento}
              returnKeyType="next"
              onSubmitEditing={() => {
                segMolde.current.focus();
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
              value={props.trancamento}
              onChangeText={props.setTrancamento}
              placeholder="Trancamento"
              ref={segMolde}
              returnKeyType="next"
              onSubmitEditing={() => {
                trancamento.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.encosteRetorno}
              onChangeText={props.setEncosteRetorno}
              placeholder="Encoste/Retorno"
              ref={trancamento}
              returnKeyType="next"
              onSubmitEditing={() => {
                encosteRetorno.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={props.injecao}
            onChangeText={props.setInjecaoPressao}
            placeholder="Injeção"
            ref={encosteRetorno}
            returnKeyType="next"
            onSubmitEditing={() => {
              injecao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={props.packPressurePressao}
            onChangeText={props.setPackPressurePressao}
            placeholder="Pack Pressure"
            ref={injecao}
            returnKeyType="next"
            onSubmitEditing={() => {
              packPressurePressao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.recalquePressao}
            onChangeText={props.setRecalquePressao}
            placeholder="Recalque"
            ref={packPressurePressao}
            returnKeyType="next"
            onSubmitEditing={() => {
              recalquePressao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={props.dosagem}
            onChangeText={props.setDosagem}
            placeholder="Dosagem"
            ref={recalquePressao}
            returnKeyType="next"
            onSubmitEditing={() => {
              dosagem.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.descompressao}
              onChangeText={props.setDescompressao}
              placeholder="Descompressão"
              ref={dosagem}
              returnKeyType="next"
              onSubmitEditing={() => {
                descompressao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.abertura}
              onChangeText={props.setAbertura}
              placeholder="Abertura"
              ref={descompressao}
              returnKeyType="next"
              onSubmitEditing={() => {
                abertura.current.focus();
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
              value={props.extHidraulicoPressao}
              onChangeText={props.setExtHidraulicoPressao}
              placeholder="Extrator Hidráulico"
              ref={abertura}
              returnKeyType="next"
              onSubmitEditing={() => {
                extHidraulicoPressao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.extMachos}
              onChangeText={props.setExtMachos}
              placeholder="Extrator de Machos"
              ref={extHidraulicoPressao}
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
    maxHeight: 380,
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

export default FormPressao;
