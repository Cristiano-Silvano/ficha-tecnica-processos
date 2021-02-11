import React, {useRef} from 'react';

import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const Descricao = ({values, formikProps}) => {
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
            value={values.nome}
            onChangeText={formikProps.handleChange('nome')}
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
              value={values.codigo}
              keyboardType="numeric"
              onChangeText={formikProps.handleChange('codigo')}
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
              value={values.numMolde}
              keyboardType="numeric"
              onChangeText={formikProps.handleChange('numMolde')}
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
            value={values.quantCav}
            keyboardType="number-pad"
            onChangeText={formikProps.handleChange('quantCav')}
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
            value={values.tipoBico}
            onChangeText={formikProps.handleChange('tipoBico')}
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
            value={values.refrigeracao}
            onChangeText={formikProps.handleChange('refrigeracao')}
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
            value={values.maxAbertura}
            keyboardType="number-pad"
            onChangeText={formikProps.handleChange('maxAbertura')}
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
            value={values.materiaPrima}
            onChangeText={formikProps.handleChange('materiaPrima')}
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
              value={values.alturaMolde}
              keyboardType="number-pad"
              onChangeText={formikProps.handleChange('altMolde')}
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
              value={values.aberturaMaq}
              keyboardType="number-pad"
              onChangeText={formikProps.handleChange('abertMaq')}
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
              value={values.extracao}
              keyboardType="number-pad"
              onChangeText={formikProps.handleChange('extracao')}
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
              value={values.cicloTotal}
              keyboardType="number-pad"
              onChangeText={formikProps.handleChange('cicloTotal')}
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

export default Descricao;
