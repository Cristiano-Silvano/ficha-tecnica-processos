import React, {useRef} from 'react';

import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const FormVazao = (props) => {
  const fechamentoVazao = useRef(null);
  const freioParcFechamento = useRef(null);
  const encoste = useRef(null);
  const injecaoVazao = useRef(null);
  const packPressureVazao = useRef(null);
  const recalqueVazao = useRef(null);
  const dosagemVazao = useRef(null);
  const descompressaoVazao = useRef(null);
  const retorno = useRef(null);
  const aberturaVazao = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Vazão:</Text>
      <ScrollView style={styles.ficha}>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.fechamentoVazao}
              onChangeText={props.setFechamentoVazao}
              placeholder="Fechamento"
              returnKeyType="next"
              onSubmitEditing={() => {
                fechamentoVazao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.freioParcFechamento}
              onChangeText={props.setFreioParcFechamento}
              placeholder="Freio Parc. Fechamento"
              ref={fechamentoVazao}
              returnKeyType="next"
              onSubmitEditing={() => {
                freioParcFechamento.current.focus();
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
              value={props.encoste}
              onChangeText={props.setEncoste}
              placeholder="Encoste"
              ref={freioParcFechamento}
              returnKeyType="next"
              onSubmitEditing={() => {
                encoste.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.injecaoVazao}
              onChangeText={props.setInjecaoVazao}
              placeholder="Injeção"
              ref={encoste}
              returnKeyType="next"
              onSubmitEditing={() => {
                injecaoVazao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={props.packPressureVazao}
            onChangeText={props.setPackPressureVazao}
            placeholder="Pack Pressure"
            ref={injecaoVazao}
            returnKeyType="next"
            onSubmitEditing={() => {
              packPressureVazao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={props.recalqueVazao}
            onChangeText={props.setRecalqueVazao}
            placeholder="Recalque"
            ref={packPressureVazao}
            returnKeyType="next"
            onSubmitEditing={() => {
              recalqueVazao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={props.dosagemVazao}
            onChangeText={props.setDosagemVazao}
            placeholder="Dosagem"
            ref={recalqueVazao}
            returnKeyType="next"
            onSubmitEditing={() => {
              dosagemVazao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.descompressaoVazao}
              onChangeText={props.setDescompressaoVazao}
              placeholder="Descompressão"
              ref={dosagemVazao}
              returnKeyType="next"
              onSubmitEditing={() => {
                descompressaoVazao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.retorno}
              onChangeText={props.setRetorno}
              placeholder="Retorno"
              ref={descompressaoVazao}
              returnKeyType="next"
              onSubmitEditing={() => {
                retorno.current.focus();
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
              value={props.aberturaVazao}
              onChangeText={props.setAberturaVazao}
              placeholder="Abertura"
              ref={retorno}
              returnKeyType="next"
              onSubmitEditing={() => {
                aberturaVazao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.freioParcAbertura}
              onChangeText={props.setFreioParcAbertura}
              placeholder="Freio Parcial de Abertura"
              ref={aberturaVazao}
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
