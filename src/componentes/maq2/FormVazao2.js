import React, {useRef} from 'react';

import {StyleSheet, View, TextInput, Text} from 'react-native';

const FormVazao2 = (props) => {
  const vInjecao1 = useRef(null);
  const vInjecao2 = useRef(null);
  const vRecalque = useRef(null);
  const vDescompressao = useRef(null);
  const vAbertura1 = useRef(null);
  const vAbertura2 = useRef(null);
  const vFechamento = useRef(null);
  const vProtMolde = useRef(null);
  const vTrancamento = useRef(null);
  const avancaInjetorVazao = useRef(null);
  const recuaInjetorvazao = useRef(null);
  const avancoExtHidraulicoVazao = useRef(null);
  const recuoExtHidraulicoVazao = useRef(null);
  const rpmRoscaCargaVazao = useRef(null);
  const vTiraMachoVazao = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Vazão:</Text>
      <View style={styles.ficha}>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>V. Injeção1:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.vInjecao1}
            onChangeText={props.setVInjecao1}
            returnKeyType="next"
            onSubmitEditing={() => {
              vInjecao1.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>V. Injeção2:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.vInjecao2}
            onChangeText={props.setVInjecao2}
            ref={vInjecao1}
            returnKeyType="next"
            onSubmitEditing={() => {
              vInjecao2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>V. de Recalque:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.vRecalque}
            onChangeText={props.setVRecalque}
            ref={vInjecao2}
            returnKeyType="next"
            onSubmitEditing={() => {
              vRecalque.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Descompressão:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.vDescompressao}
            onChangeText={props.setVDescompressao}
            ref={vRecalque}
            returnKeyType="next"
            onSubmitEditing={() => {
              vDescompressao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>V. de Abertura1:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.vAbertura1}
            onChangeText={props.setVAbertura1}
            ref={vDescompressao}
            returnKeyType="next"
            onSubmitEditing={() => {
              vAbertura1.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>V. de Abertura2:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.vAbertura2}
            onChangeText={props.setVAbertura2}
            ref={vAbertura1}
            returnKeyType="next"
            onSubmitEditing={() => {
              vAbertura2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>V. de Fechamento:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.vFechamento}
            onChangeText={props.setVFechamento}
            ref={vAbertura2}
            returnKeyType="next"
            onSubmitEditing={() => {
              vFechamento.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>V. Proteção de Molde:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.vProtMolde}
            onChangeText={props.setVProtMolde}
            ref={vFechamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              vProtMolde.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>V. de Trancamento:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.vTrancamento}
            onChangeText={props.setVTrancamento}
            ref={vProtMolde}
            returnKeyType="next"
            onSubmitEditing={() => {
              vTrancamento.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Avança CJ. Injetor:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.avancaInjetorVazao}
            ref={vTrancamento}
            onChangeText={props.setAvancaInjetorVazao}
            returnKeyType="next"
            onSubmitEditing={() => {
              avancaInjetorVazao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Recua CJ. Injetor:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.recuaInjetorvazao}
            onChangeText={props.setRecuaInjetorvazao}
            ref={avancaInjetorVazao}
            returnKeyType="next"
            onSubmitEditing={() => {
              recuaInjetorvazao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Avanço Extr. Hidráulico:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.avancoExtHidraulicoVazao}
            onChangeText={props.setAvancoExtHidraulicoVazao}
            ref={recuaInjetorvazao}
            returnKeyType="next"
            onSubmitEditing={() => {
              avancoExtHidraulicoVazao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Recuo Extr. Hidráulico:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.recuoExtHidraulicoVazao}
            onChangeText={props.setRecuoExtHidraulicoVazao}
            ref={avancoExtHidraulicoVazao}
            returnKeyType="next"
            onSubmitEditing={() => {
              recuoExtHidraulicoVazao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>RPM da Rosca *Carga*:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.rpmRoscaCargaVazao}
            onChangeText={props.setRpmRoscaCargaVazao}
            ref={recuoExtHidraulicoVazao}
            returnKeyType="next"
            onSubmitEditing={() => {
              rpmRoscaCargaVazao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>V. Tira Macho:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.pTiraMachoVazao}
            onChangeText={props.setPTiraMachoVazao}
            ref={rpmRoscaCargaVazao}
            returnKeyType="next"
            onSubmitEditing={() => {
              vTiraMachoVazao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>V. Coloca Macho:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.pColocaMachoVazao}
            onChangeText={props.setPColocaMachoVazao}
            ref={vTiraMachoVazao}
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

export default FormVazao2;
