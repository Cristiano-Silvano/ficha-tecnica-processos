/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const FormAbertura1 = (props) => {
  //referencia next input
  const pAbertura = useRef(null);
  const v1Abertura = useRef(null);
  const v2Abertura = useRef(null);
  const v3Abertura = useRef(null);
  const v4Abertura = useRef(null);
  const cAbertura1 = useRef(null);
  const cAbertura2 = useRef(null);
  const cAbertura3 = useRef(null);
  const cAbertura4 = useRef(null);
  const tAbertura = useRef(null);
  const pDestravamento = useRef(null);
  const vDestravamento = useRef(null);
  const cDestravamento = useRef(null);
  const tDestravamento = useRef(null);
  const pExtrHidCurso = useRef(null);
  const vExtrHidCurso = useRef(null);
  const cExtrHidCurso = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Abertura:</Text>
      <View style={styles.ficha}>
        <View style={(styles.containerInput, {flex: 1.3})}>
          <View style={styles.containerTitulo}>
            <Text>Abertura</Text>
          </View>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Pressão Abert."
            value={props.pAbertura}
            onChangeText={props.setPAbertura}
            returnKeyType="next"
            onSubmitEditing={() => {
              pAbertura.current.focus();
            }}
            blurOnSubmit={false}
          />
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.inputVelAbertura}
              keyboardType="numeric"
              placeholder="Vel.1"
              value={props.vAbertura1}
              onChangeText={props.setVAbertura1}
              ref={pAbertura}
              returnKeyType="next"
              onSubmitEditing={() => {
                v1Abertura.current.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.inputVelAbertura}
              keyboardType="numeric"
              placeholder="Vel.2"
              value={props.vAbertura2}
              onChangeText={props.setVAbertura2}
              ref={v1Abertura}
              returnKeyType="next"
              onSubmitEditing={() => {
                v2Abertura.current.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.inputVelAbertura}
              keyboardType="numeric"
              placeholder="Vel.3"
              value={props.vAbertura3}
              onChangeText={props.setVAbertura3}
              ref={v2Abertura}
              returnKeyType="next"
              onSubmitEditing={() => {
                v3Abertura.current.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.inputVelAbertura}
              placeholder="Vel.4"
              keyboardType="numeric"
              value={props.vAbertura4}
              onChangeText={props.setVAbertura4}
              ref={v3Abertura}
              returnKeyType="next"
              onSubmitEditing={() => {
                v4Abertura.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.inputVelAbertura}
              placeholder="Curso 1"
              keyboardType="numeric"
              value={props.cAbertura1}
              onChangeText={props.setCAbertura1}
              ref={v4Abertura}
              returnKeyType="next"
              onSubmitEditing={() => {
                cAbertura1.current.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.inputVelAbertura}
              placeholder="Curso 2"
              keyboardType="numeric"
              value={props.cAbertura2}
              onChangeText={props.setCAbertura2}
              ref={cAbertura1}
              returnKeyType="next"
              onSubmitEditing={() => {
                cAbertura2.current.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.inputVelAbertura}
              placeholder="Curso 3"
              keyboardType="numeric"
              value={props.cAbertura3}
              onChangeText={props.setCAbertura3}
              ref={cAbertura2}
              returnKeyType="next"
              onSubmitEditing={() => {
                cAbertura3.current.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.inputVelAbertura}
              placeholder="Curso 4"
              keyboardType="numeric"
              value={props.cAbertura4}
              onChangeText={props.setCAbertura4}
              ref={cAbertura3}
              returnKeyType="next"
              onSubmitEditing={() => {
                cAbertura4.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="T. Resfr. Abert."
            keyboardType="numeric"
            value={props.tAbertura}
            onChangeText={props.setTAbertura}
            ref={cAbertura4}
            returnKeyType="next"
            onSubmitEditing={() => {
              tAbertura.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.containerInput}>
          <View style={styles.containerTitulo}>
            <Text>Destravamento</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Pressão Destrav."
            keyboardType="numeric"
            value={props.pDestravamento}
            onChangeText={props.setPDestravamento}
            ref={tAbertura}
            returnKeyType="next"
            onSubmitEditing={() => {
              pDestravamento.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Vel. Destrav."
            keyboardType="numeric"
            value={props.vDestravamento}
            onChangeText={props.setVDestravamento}
            ref={pDestravamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              vDestravamento.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Curso Destrav."
            keyboardType="numeric"
            value={props.cDestravamento}
            onChangeText={props.setCDestravamento}
            ref={vDestravamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              cDestravamento.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="T. Resfr. Destrav."
            keyboardType="numeric"
            value={props.tDestravamento}
            onChangeText={props.setTDestravamento}
            ref={cDestravamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              tDestravamento.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.containerInput}>
          <View style={styles.containerTitulo}>
            <Text>Extr. Hid./Curso</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Pressão Extr."
            keyboardType="numeric"
            value={props.pExtrHidCurso}
            onChangeText={props.setPExtrHidCurso}
            ref={tDestravamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              pExtrHidCurso.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Vel. Extr."
            keyboardType="numeric"
            value={props.vExtrHidCurso}
            onChangeText={props.setVExtrHidCurso}
            ref={pExtrHidCurso}
            returnKeyType="next"
            onSubmitEditing={() => {
              vExtrHidCurso.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Curso Extr."
            keyboardType="numeric"
            value={props.cExtrHidCurso}
            onChangeText={props.setCExtrHidCurso}
            ref={vExtrHidCurso}
            returnKeyType="next"
            onSubmitEditing={() => {
              cExtrHidCurso.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="T. Resfr. Extr."
            keyboardType="numeric"
            value={props.tExtrHidCurso}
            onChangeText={props.setTExtrHidCurso}
            ref={cExtrHidCurso}
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
    flexDirection: 'row',
    width: '98%',
    height: 207,

    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 5,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 4,
    alignSelf: 'flex-start',
    paddingLeft: 2,
    color: '#484848',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.3,
    backgroundColor: '#EEF7F7',
  },
  inputVelAbertura: {
    height: 40,
    width: '25%',
    borderColor: 'gray',
    borderWidth: 0.3,
    backgroundColor: '#EEF7F7',
  },
  containerInput: {
    height: 200,
    width: '100%',
    flex: 1.2,
    borderColor: 'gray',
    borderWidth: 0.2,
  },
  containerTitulo: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FormAbertura1;
