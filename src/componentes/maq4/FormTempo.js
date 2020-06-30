import React, {useRef} from 'react';

import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const FormTempo = (props) => {
  const fechamento = useRef(null);
  const injecao = useRef(null);
  const recalque = useRef(null);
  const secagem = useRef(null);
  const extPneumatico = useRef(null);
  const extRoscaSemFim = useRef(null);
  const retDosagem = useRef(null);
  const intCicloMaq = useRef(null);
  const intrusao = useRef(null);
  const extHidraulico = useRef(null);
  const extMachoExtrai = useRef(null);
  const extMachoColoca = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Tempo:</Text>
      <ScrollView style={styles.ficha}>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.fechamento}
              onChangeText={props.setFechamento}
              placeholder="Fechamento"
              returnKeyType="next"
              onSubmitEditing={() => {
                fechamento.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.injecao}
              onChangeText={props.setInjecao}
              placeholder="Injeção"
              ref={fechamento}
              returnKeyType="next"
              onSubmitEditing={() => {
                injecao.current.focus();
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
              value={props.recalque}
              onChangeText={props.setRecalque}
              placeholder="Recalque"
              ref={injecao}
              returnKeyType="next"
              onSubmitEditing={() => {
                recalque.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.secagem}
              onChangeText={props.setSecagem}
              placeholder="Secagem"
              ref={recalque}
              returnKeyType="next"
              onSubmitEditing={() => {
                secagem.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={props.extPneumatico}
            onChangeText={props.setExtPneumatico}
            placeholder="Extrator Pneumático"
            ref={secagem}
            returnKeyType="next"
            onSubmitEditing={() => {
              extPneumatico.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={props.extRoscaSemFim}
            onChangeText={props.setExtRoscaSemFim}
            placeholder="Extator Com Rosca Sem Fim"
            ref={extPneumatico}
            returnKeyType="next"
            onSubmitEditing={() => {
              extRoscaSemFim.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.retDosagem}
            onChangeText={props.setRetDosagem}
            placeholder="Retardo de Dosagem"
            ref={extRoscaSemFim}
            returnKeyType="next"
            onSubmitEditing={() => {
              retDosagem.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={props.intCicloMaq}
            onChangeText={props.setIntCicloMaq}
            placeholder="Interrupção de Ciclo de Maq."
            ref={retDosagem}
            returnKeyType="next"
            onSubmitEditing={() => {
              intCicloMaq.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.intrusao}
              onChangeText={props.setIntrusao}
              placeholder="Intrusão"
              ref={intCicloMaq}
              returnKeyType="next"
              onSubmitEditing={() => {
                intrusao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.extHidraulico}
              onChangeText={props.setExtHidraulico}
              placeholder="Extrator Hidráulico"
              ref={intrusao}
              returnKeyType="next"
              onSubmitEditing={() => {
                extHidraulico.current.focus();
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
              value={props.extMachoExtrai}
              onChangeText={props.setExtMachoExtrai}
              placeholder="Ext. de Machos - Extrai"
              ref={extHidraulico}
              returnKeyType="next"
              onSubmitEditing={() => {
                extMachoExtrai.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.extMachoColoca}
              onChangeText={props.setExtMachoColoca}
              placeholder="Ext. de Machos - Coloca"
              ref={extMachoExtrai}
              returnKeyType="next"
              onSubmitEditing={() => {
                extMachoColoca.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={props.packPressure}
            onChangeText={props.setPackPressure}
            placeholder="Pack Pressure"
            ref={extMachoColoca}
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
    maxHeight: 440,
    paddingVertical: 5,
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
    height: 38,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginLeft: 5,
  },
  input2: {
    backgroundColor: '#EEF7F7',
    height: 38,
    minWidth: 140,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginLeft: 5,
  },
});

export default FormTempo;
