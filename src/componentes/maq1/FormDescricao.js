import React, {useRef} from 'react';

import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const FormDescricao = (props) => {
  const nome = useRef(null);
  const codigo = useRef(null);
  const numMolde = useRef(null);
  const quantCav = useRef(null);
  const tipoBico = useRef(null);
  const refrigeracao = useRef(null);
  const maxAbertura = useRef(null);
  const materiaPrima = useRef(null);
  const alturaMolde = useRef(null);
  const aberturaMaq = useRef(null);
  const extracao = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Descrição Molde/Peça:</Text>
      <ScrollView style={styles.ficha}>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            value={props.nome}
            onChangeText={props.setNome}
            placeholder="Nome da peça"
            returnKeyType="next"
            onSubmitEditing={() => {
              nome.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              value={props.codigo}
              keyboardType="numeric"
              onChangeText={props.setCodigo}
              placeholder="Código"
              ref={nome}
              returnKeyType="next"
              onSubmitEditing={() => {
                codigo.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              value={props.numMolde}
              keyboardType="numeric"
              onChangeText={props.setNumMolde}
              placeholder="Número do Molde"
              ref={codigo}
              returnKeyType="next"
              onSubmitEditing={() => {
                numMolde.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input2}
            value={props.quantCav}
            keyboardType="number-pad"
            onChangeText={props.setQuantCav}
            placeholder="Quantidade de Cavidades"
            ref={numMolde}
            returnKeyType="next"
            onSubmitEditing={() => {
              quantCav.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            value={props.tipo}
            onChangeText={props.setTipo}
            placeholder="Tipo de Bico"
            ref={quantCav}
            returnKeyType="next"
            onSubmitEditing={() => {
              tipoBico.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            value={props.refrigeracao}
            onChangeText={props.setRefrigeracao}
            placeholder="Refrigeração"
            ref={tipoBico}
            returnKeyType="next"
            onSubmitEditing={() => {
              refrigeracao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input2}
            value={props.maxAbertura}
            keyboardType="number-pad"
            onChangeText={props.setMaxAbertura}
            placeholder="Limite Max. de Abertura da Maq."
            ref={refrigeracao}
            returnKeyType="next"
            onSubmitEditing={() => {
              maxAbertura.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            value={props.materiaPrima}
            onChangeText={props.setMateriaPrima}
            placeholder="Matéria Prima"
            ref={maxAbertura}
            returnKeyType="next"
            onSubmitEditing={() => {
              materiaPrima.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              value={props.alturaMolde}
              keyboardType="number-pad"
              onChangeText={props.setAlturaMolde}
              placeholder="Altura do Molde"
              ref={materiaPrima}
              returnKeyType="next"
              onSubmitEditing={() => {
                alturaMolde.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              value={props.aberturaMaq}
              keyboardType="number-pad"
              onChangeText={props.setAberturaMaq}
              placeholder="Abertura da Máquina"
              ref={alturaMolde}
              returnKeyType="next"
              onSubmitEditing={() => {
                aberturaMaq.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              value={props.extracao}
              keyboardType="number-pad"
              onChangeText={props.setExtracao}
              placeholder="Extração"
              ref={aberturaMaq}
              returnKeyType="next"
              onSubmitEditing={() => {
                extracao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              value={props.cicloTotal}
              keyboardType="number-pad"
              onChangeText={props.setCicloTotal}
              placeholder="Ciclo Total"
              ref={extracao}
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

export default FormDescricao;
