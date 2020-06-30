import React, {useRef} from 'react';

import {StyleSheet, View, TextInput, Text} from 'react-native';

const FormTempo2 = (props) => {
  const tempInjecao = useRef(null);
  const tempRecalque = useRef(null);
  const preCargaIntrucao = useRef(null);
  const tempResfriamento = useRef(null);
  const tempProtMolde = useRef(null);
  const tempReciclo = useRef(null);
  const tempRecuoBico = useRef(null);
  const retarInjecao = useRef(null);
  const retardoCarga2 = useRef(null);
  const supervisaoCiclo = useRef(null);
  const supervisaoCarga = useRef(null);
  const extAvancado = useRef(null);
  const visualizaCiclo = useRef(null);
  const tempDesrosquear = useRef(null);
  const tempTiraMacho = useRef(null);
  const tempColocaMacho = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Tempos:</Text>
      <View style={styles.ficha}>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Tempo Injeção:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.tempInjecao}
            onChangeText={props.setTempInjecao}
            returnKeyType="next"
            onSubmitEditing={() => {
              tempInjecao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Tempo Recalque:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.tempRecalque}
            onChangeText={props.setTempRecalque}
            ref={tempInjecao}
            returnKeyType="next"
            onSubmitEditing={() => {
              tempRecalque.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Pré-Carga *Intrusão*:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.preCargaIntrucao}
            onChangeText={props.setPreCargaIntrucao}
            ref={tempRecalque}
            returnKeyType="next"
            onSubmitEditing={() => {
              preCargaIntrucao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Tempo Resfriamento:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.tempResfriamento}
            onChangeText={props.setTempResfriamento}
            ref={preCargaIntrucao}
            returnKeyType="next"
            onSubmitEditing={() => {
              tempResfriamento.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Tempo Prot. Molde:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.tempProtMolde}
            onChangeText={props.setTempProtMolde}
            ref={tempResfriamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              tempProtMolde.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Tempo Reciclo:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.tempReciclo}
            onChangeText={props.setTempReciclo}
            ref={tempProtMolde}
            returnKeyType="next"
            onSubmitEditing={() => {
              tempReciclo.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Tempo Recuo de Bico:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.tempRecuoBico}
            onChangeText={props.setTempRecuoBico}
            ref={tempReciclo}
            returnKeyType="next"
            onSubmitEditing={() => {
              tempRecuoBico.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Retardo de Injeção:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.retarInjecao}
            onChangeText={props.setRetarInjecao}
            ref={tempRecuoBico}
            returnKeyType="next"
            onSubmitEditing={() => {
              retarInjecao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Retardo de Carga:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.retardoCarga2}
            onChangeText={props.setRetardoCarga2}
            ref={retarInjecao}
            returnKeyType="next"
            onSubmitEditing={() => {
              retardoCarga2.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Supervisão de Ciclo:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.supervisaoCiclo}
            onChangeText={props.setSupervisaoCiclo}
            ref={retardoCarga2}
            returnKeyType="next"
            onSubmitEditing={() => {
              supervisaoCiclo.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Supervisão de Carga:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.supervisaoCarga}
            onChangeText={props.setSupervisaoCarga}
            ref={supervisaoCiclo}
            returnKeyType="next"
            onSubmitEditing={() => {
              supervisaoCarga.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Extrator Avançado:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.extAvancado}
            onChangeText={props.setExtAvancado}
            ref={supervisaoCarga}
            returnKeyType="next"
            onSubmitEditing={() => {
              extAvancado.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Só Visualiza o ciclo:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.visualizaCiclo}
            onChangeText={props.setVisualizaCiclo}
            ref={extAvancado}
            returnKeyType="next"
            onSubmitEditing={() => {
              visualizaCiclo.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Tempo Desrosquear:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.tempDesrosquear}
            onChangeText={props.setTempDesrosquear}
            ref={visualizaCiclo}
            returnKeyType="next"
            onSubmitEditing={() => {
              tempDesrosquear.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Tempo Tira Macho:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.tempTiraMacho}
            onChangeText={props.setTempTiraMacho}
            ref={tempDesrosquear}
            returnKeyType="next"
            onSubmitEditing={() => {
              tempTiraMacho.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Tempo Coloca Macho:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.tempColocaMacho}
            onChangeText={props.setTempColocaMacho}
            ref={tempTiraMacho}
            returnKeyType="next"
            onSubmitEditing={() => {
              tempColocaMacho.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Tempo Dosagem:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.tempDosagem}
            onChangeText={props.setTempDosagem}
            ref={tempColocaMacho}
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

export default FormTempo2;
