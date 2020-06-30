import React, {useRef} from 'react';

import {StyleSheet, View, TextInput, Text} from 'react-native';

const FormPressao2 = (props) => {
  const pInjecao1 = useRef(null);
  const pInjecao2 = useRef(null);
  const pRecalque = useRef(null);
  const descompressaoPressao = useRef(null);
  const pAbertura1 = useRef(null);
  const pAbertura2 = useRef(null);
  const pFechamento = useRef(null);
  const protecaoMolde = useRef(null);
  const pTrancamento = useRef(null);
  const avancaInjetor = useRef(null);
  const recuaInjetor = useRef(null);
  const avancoExtHidraulico = useRef(null);
  const recuoExtHidraulico = useRef(null);
  const rpmRoscaCarga = useRef(null);
  const pTiraMacho = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Pressão:</Text>
      <View style={styles.ficha}>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Pressão Injeção1:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.pInjecao1}
            onChangeText={props.setPInjecao1}
            returnKeyType="next"
            onSubmitEditing={() => {
              pInjecao1.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Pressão Injeção2:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.pInjecao2}
            onChangeText={props.setPInjecao2}
            ref={pInjecao1}
            returnKeyType="next"
            onSubmitEditing={() => {
              pInjecao2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Pressão de Recalque:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.pRecalque}
            onChangeText={props.setPRecalque}
            ref={pInjecao2}
            returnKeyType="next"
            onSubmitEditing={() => {
              pRecalque.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Descompressão:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.descompressaoPressao}
            onChangeText={props.setDescompressaoPressao}
            ref={pRecalque}
            returnKeyType="next"
            onSubmitEditing={() => {
              descompressaoPressao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Pressão de Abertura1:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.pAbertura1}
            onChangeText={props.setPAbertura1}
            ref={descompressaoPressao}
            returnKeyType="next"
            onSubmitEditing={() => {
              pAbertura1.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Pressão de Abertura2:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.pAbertura2}
            onChangeText={props.setPAbertura2}
            ref={pAbertura1}
            returnKeyType="next"
            onSubmitEditing={() => {
              pAbertura2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Pressão de Fechamento:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.pFechamento}
            onChangeText={props.setPFechamento}
            ref={pAbertura2}
            returnKeyType="next"
            onSubmitEditing={() => {
              pFechamento.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Proteção de Molde:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.protecaoMolde}
            onChangeText={props.setProtecaoMolde}
            ref={pFechamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              protecaoMolde.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Pressão de Trancamento:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.pTrancamento}
            onChangeText={props.setPTrancamento}
            ref={protecaoMolde}
            returnKeyType="next"
            onSubmitEditing={() => {
              pTrancamento.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Avança CJ. Injetor:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.avancaInjetor}
            onChangeText={props.setAvancaInjetor}
            ref={pTrancamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              avancaInjetor.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Recua CJ. Injetor:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.recuaInjetor}
            onChangeText={props.setRecuaInjetor}
            ref={avancaInjetor}
            returnKeyType="next"
            onSubmitEditing={() => {
              recuaInjetor.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Avanço Extr. Hidráulico:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.avancoExtHidraulico}
            onChangeText={props.setAvancoExtHidraulico}
            ref={recuaInjetor}
            returnKeyType="next"
            onSubmitEditing={() => {
              avancoExtHidraulico.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Recuo Extr. Hidráulico:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.recuoExtHidraulico}
            onChangeText={props.setRecuoExtHidraulico}
            ref={avancoExtHidraulico}
            returnKeyType="next"
            onSubmitEditing={() => {
              recuoExtHidraulico.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>RPM da Rosca *Carga*:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.rpmRoscaCarga}
            onChangeText={props.setRpmRoscaCarga}
            ref={recuoExtHidraulico}
            returnKeyType="next"
            onSubmitEditing={() => {
              rpmRoscaCarga.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Pressão Tira Macho:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.pTiraMacho}
            onChangeText={props.setPTiraMacho}
            ref={rpmRoscaCarga}
            returnKeyType="next"
            onSubmitEditing={() => {
              pTiraMacho.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Pressão Coloca Macho:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.pColocaMacho}
            onChangeText={props.setPColocaMacho}
            ref={pTiraMacho}
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

export default FormPressao2;
