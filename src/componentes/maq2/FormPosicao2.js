import React, {useRef} from 'react';

import {StyleSheet, View, TextInput, Text} from 'react-native';

const FormPosicao2 = (props) => {
  const inicioInjecao = useRef(null);
  const inicioRecalque = useRef(null);
  const limiteCarga = useRef(null);
  const limDescompressao = useRef(null);
  const inicioAbertura2 = useRef(null);
  const inicioAbertura3 = useRef(null);
  const limiteAbertura = useRef(null);
  const inicProtMolde = useRef(null);
  const iniciotravamento = useRef(null);
  const posExtrair = useRef(null);
  const inicioDesrosquear = useRef(null);
  const inicioTiraMacho = useRef(null);
  const inicioColocaMacho = useRef(null);
  const limExtracao1 = useRef(null);
  const limExtracao2 = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Posição:</Text>
      <View style={styles.ficha}>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Início da Injeção:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.inicioInjecao}
            onChangeText={props.setInicioInjecao}
            returnKeyType="next"
            onSubmitEditing={() => {
              inicioInjecao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Início de Recalque:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.inicioRecalque}
            onChangeText={props.setInicioRecalque}
            ref={inicioInjecao}
            returnKeyType="next"
            onSubmitEditing={() => {
              inicioRecalque.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Limite de Carga:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.limiteCarga}
            onChangeText={props.setLimiteCarga}
            ref={inicioRecalque}
            returnKeyType="next"
            onSubmitEditing={() => {
              limiteCarga.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Limite Descompressão:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.limDescompressao}
            onChangeText={props.setLimDescompressao}
            ref={limiteCarga}
            returnKeyType="next"
            onSubmitEditing={() => {
              limDescompressao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Início Abertura 2:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.inicioAbertura2}
            onChangeText={props.setInicioAbertura2}
            ref={limDescompressao}
            returnKeyType="next"
            onSubmitEditing={() => {
              inicioAbertura2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Início Abertura 3:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.inicioAbertura3}
            onChangeText={props.setInicioAbertura3}
            ref={inicioAbertura2}
            returnKeyType="next"
            onSubmitEditing={() => {
              inicioAbertura3.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Limite Abertura:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.limiteAbertura}
            onChangeText={props.setLimiteAbertura}
            ref={inicioAbertura3}
            returnKeyType="next"
            onSubmitEditing={() => {
              limiteAbertura.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Início Prot. Molde:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.inicProtMolde}
            onChangeText={props.setInicProtMolde}
            ref={limiteAbertura}
            returnKeyType="next"
            onSubmitEditing={() => {
              inicProtMolde.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Início Travamento:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.iniciotravamento}
            onChangeText={props.setIniciotravamento}
            ref={inicProtMolde}
            returnKeyType="next"
            onSubmitEditing={() => {
              iniciotravamento.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Posição para Extrair:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.posExtrair}
            onChangeText={props.setPosExtrair}
            ref={iniciotravamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              posExtrair.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Início Desrosquear:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.inicioDesrosquear}
            onChangeText={props.setInicioDesrosquear}
            ref={posExtrair}
            returnKeyType="next"
            onSubmitEditing={() => {
              inicioDesrosquear.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Início Tira Macho:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.inicioTiraMacho}
            onChangeText={props.setInicioTiraMacho}
            ref={inicioDesrosquear}
            returnKeyType="next"
            onSubmitEditing={() => {
              inicioTiraMacho.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Início Coloca Macho:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.inicioColocaMacho}
            onChangeText={props.setInicioColocaMacho}
            ref={inicioTiraMacho}
            returnKeyType="next"
            onSubmitEditing={() => {
              inicioColocaMacho.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Limite Extração 1:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.limExtracao1}
            onChangeText={props.setLimExtracao1}
            ref={inicioColocaMacho}
            returnKeyType="next"
            onSubmitEditing={() => {
              limExtracao1.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Limite Extração 2:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.limExtracao2}
            onChangeText={props.setLimExtracao2}
            ref={limExtracao1}
            returnKeyType="next"
            onSubmitEditing={() => {
              limExtracao2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Limite Retorno Extração:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.limRetornoExtr}
            onChangeText={props.setlimRetornoExtr}
            ref={limExtracao2}
          />
        </View>
      </View>
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
    maxHeight: 840,
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
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginBottom: 10,
    paddingRight: 10,
  },
  input2: {
    backgroundColor: '#EEF7F7',
    height: 38,
    minWidth: 70,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginLeft: 5,
  },
  textoInput: {color: '#616161'},
});

export default FormPosicao2;
