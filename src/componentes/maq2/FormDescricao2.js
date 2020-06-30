import React, {useRef} from 'react';

import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const FormDescricao2 = (props) => {
  const nome2 = useRef(null);
  const codigo2 = useRef(null);
  const numMolde2 = useRef(null);
  const quantCav2 = useRef(null);
  const tipoBico2 = useRef(null);
  const refrigeracao2 = useRef(null);
  const maxAbertura2 = useRef(null);
  const materiaPrima2 = useRef(null);
  const alturaMolde2 = useRef(null);
  const aberturaMaq2 = useRef(null);
  const extracao2 = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Descrição Molde/Peça:</Text>
      <ScrollView style={styles.ficha}>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            value={props.nome2}
            onChangeText={props.setNome2}
            placeholder="Nome da peça"
            returnKeyType="next"
            onSubmitEditing={() => {
              nome2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              value={props.codigo2}
              keyboardType="numeric"
              onChangeText={props.setCodigo2}
              placeholder="Código"
              ref={nome2}
              returnKeyType="next"
              onSubmitEditing={() => {
                codigo2.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              value={props.numMolde2}
              keyboardType="numeric"
              onChangeText={props.setNumMolde2}
              placeholder="Número do Molde"
              ref={codigo2}
              returnKeyType="next"
              onSubmitEditing={() => {
                numMolde2.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input2}
            value={props.quantCav2}
            keyboardType="numeric"
            onChangeText={props.setQuantCav2}
            placeholder="Quantidade de Cavidades"
            ref={numMolde2}
            returnKeyType="next"
            onSubmitEditing={() => {
              quantCav2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            value={props.tipo2}
            onChangeText={props.setTipo2}
            placeholder="Tipo de Bico"
            ref={quantCav2}
            returnKeyType="next"
            onSubmitEditing={() => {
              tipoBico2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            value={props.refrigeracao2}
            onChangeText={props.setRefrigeracao2}
            placeholder="Refrigeração"
            ref={tipoBico2}
            returnKeyType="next"
            onSubmitEditing={() => {
              refrigeracao2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input2}
            value={props.maxAbertura2}
            keyboardType="numeric"
            onChangeText={props.setMaxAbertura2}
            placeholder="Limite Max. de Abertura da Maq."
            ref={refrigeracao2}
            returnKeyType="next"
            onSubmitEditing={() => {
              maxAbertura2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            value={props.materiaPrima2}
            onChangeText={props.setMateriaPrima2}
            placeholder="Matéria Prima"
            ref={maxAbertura2}
            returnKeyType="next"
            onSubmitEditing={() => {
              materiaPrima2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              value={props.alturaMolde2}
              keyboardType="numeric"
              onChangeText={props.setAlturaMolde2}
              placeholder="Altura do Molde"
              ref={materiaPrima2}
              returnKeyType="next"
              onSubmitEditing={() => {
                alturaMolde2.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              value={props.aberturaMaq2}
              keyboardType="numeric"
              onChangeText={props.setAberturaMaq2}
              placeholder="Abertura da Máquina"
              ref={alturaMolde2}
              returnKeyType="next"
              onSubmitEditing={() => {
                aberturaMaq2.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              value={props.extracao2}
              keyboardType="numeric"
              onChangeText={props.setExtracao2}
              placeholder="Extração"
              ref={aberturaMaq2}
              returnKeyType="next"
              onSubmitEditing={() => {
                extracao2.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              value={props.cicloTotal2}
              keyboardType="numeric"
              onChangeText={props.setCicloTotal2}
              placeholder="Ciclo Total"
              ref={extracao2}
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

export default FormDescricao2;
