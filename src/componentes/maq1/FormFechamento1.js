/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const FormFechamento1 = (props) => {
  const pFechamento = useRef(null);
  const vFechamento1 = useRef(null);
  const vFechamento2 = useRef(null);
  const vFechamento3 = useRef(null);
  const vFechamento4 = useRef(null);
  const cFechamento1 = useRef(null);
  const cFechamento2 = useRef(null);
  const cFechamento3 = useRef(null);
  const cFechamento4 = useRef(null);
  const tFechamento = useRef(null);
  const pSegMolde = useRef(null);
  const vSegMolde = useRef(null);
  const cSegMolde = useRef(null);
  const tSegMolde = useRef(null);
  const pTravamento = useRef(null);
  const vTravamento = useRef(null);
  const cTravamento = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Fechamento:</Text>
      <View style={styles.ficha}>
        <View style={(styles.containerInput, {flex: 1.3})}>
          <View style={styles.containerTitulo}>
            <Text>Fechamento</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Pressão Fecham."
            keyboardType="numeric"
            value={props.pFechamento}
            onChangeText={props.setPFechamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              pFechamento.current.focus();
            }}
            blurOnSubmit={false}
          />

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.inputVelFechamento}
              placeholder="Vel.1"
              keyboardType="numeric"
              value={props.vFechamento1}
              onChangeText={props.setVFechamento1}
              ref={pFechamento}
              returnKeyType="next"
              onSubmitEditing={() => {
                vFechamento1.current.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.inputVelFechamento}
              placeholder="Vel.2"
              keyboardType="numeric"
              value={props.vFechamento2}
              onChangeText={props.setVFechamento2}
              ref={vFechamento1}
              returnKeyType="next"
              onSubmitEditing={() => {
                vFechamento2.current.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.inputVelFechamento}
              placeholder="Vel.3"
              keyboardType="numeric"
              value={props.vFechamento3}
              onChangeText={props.setVFechamento3}
              ref={vFechamento2}
              returnKeyType="next"
              onSubmitEditing={() => {
                vFechamento3.current.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.inputVelFechamento}
              placeholder="Vel.4"
              keyboardType="numeric"
              value={props.vFechamento4}
              onChangeText={props.setVFechamento4}
              ref={vFechamento3}
              returnKeyType="next"
              onSubmitEditing={() => {
                vFechamento4.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.inputVelFechamento}
              placeholder="Curso 1"
              keyboardType="numeric"
              value={props.cFechamento1}
              onChangeText={props.setCFechamento1}
              ref={vFechamento4}
              returnKeyType="next"
              onSubmitEditing={() => {
                cFechamento1.current.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.inputVelFechamento}
              placeholder="Curso 2"
              keyboardType="numeric"
              value={props.cFechamento2}
              onChangeText={props.setCFechamento2}
              ref={cFechamento1}
              returnKeyType="next"
              onSubmitEditing={() => {
                cFechamento2.current.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.inputVelFechamento}
              placeholder="Curso 3"
              keyboardType="numeric"
              value={props.cFechamento3}
              onChangeText={props.setCFechamento3}
              ref={cFechamento2}
              returnKeyType="next"
              onSubmitEditing={() => {
                cFechamento3.current.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.inputVelFechamento}
              placeholder="Curso 4"
              keyboardType="numeric"
              value={props.cFechamento4}
              onChangeText={props.setCFechamento4}
              ref={cFechamento3}
              returnKeyType="next"
              onSubmitEditing={() => {
                cFechamento4.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Tempo Fecham."
            keyboardType="numeric"
            value={props.tFechamento}
            onChangeText={props.setTFechamento}
            ref={cFechamento4}
            returnKeyType="next"
            onSubmitEditing={() => {
              tFechamento.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.containerInput}>
          <View style={styles.containerTitulo}>
            <Text>Seg. Molde</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Pressão Seg. Molde"
            keyboardType="numeric"
            value={props.pSegMolde}
            onChangeText={props.setPSegMolde}
            ref={tFechamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              pSegMolde.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Vel. Seg. Molde"
            keyboardType="numeric"
            value={props.vSegMolde}
            onChangeText={props.setVSegMolde}
            ref={pSegMolde}
            returnKeyType="next"
            onSubmitEditing={() => {
              vSegMolde.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Curso Seg. Molde"
            keyboardType="numeric"
            value={props.cSegMolde}
            onChangeText={props.setCSegMolde}
            ref={vSegMolde}
            returnKeyType="next"
            onSubmitEditing={() => {
              cSegMolde.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Tempo Seg. Molde"
            keyboardType="numeric"
            value={props.tSegMolde}
            onChangeText={props.setTSegMolde}
            ref={cSegMolde}
            returnKeyType="next"
            onSubmitEditing={() => {
              tSegMolde.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.containerInput}>
          <View style={styles.containerTitulo}>
            <Text>Travamento</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Pressão Trav."
            keyboardType="numeric"
            value={props.pTravamento}
            onChangeText={props.setPTravamento}
            ref={tSegMolde}
            returnKeyType="next"
            onSubmitEditing={() => {
              pTravamento.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Vel. Trav."
            keyboardType="numeric"
            value={props.vTravamento}
            onChangeText={props.setVTravamento}
            ref={pTravamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              vTravamento.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Curso Trav."
            keyboardType="numeric"
            value={props.cTravamento}
            onChangeText={props.setCTravamento}
            ref={vTravamento}
            returnKeyType="next"
            onSubmitEditing={() => {
              cTravamento.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Tempo Trav."
            keyboardType="numeric"
            value={props.tTravamento}
            onChangeText={props.setTTravamento}
            ref={cTravamento}
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
  inputVelFechamento: {
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

export default FormFechamento1;
