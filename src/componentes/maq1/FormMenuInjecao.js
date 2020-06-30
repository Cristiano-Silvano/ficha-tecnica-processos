import React, {useRef} from 'react';
import {StyleSheet, View, TextInput, Text, ScrollView} from 'react-native';

const FormMenuInjecao1 = (props) => {
  const pProcInjecao = useRef(null);
  const vProcInjecao = useRef(null);
  const pAvancoCJ = useRef(null);
  const pRetornoCJ = useRef(null);
  const pRetornoCJ2 = useRef(null);
  const vRetorno = useRef(null);
  const tempoRecuo = useRef(null);
  const cComutacao = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Menu Injecão:</Text>
      <ScrollView style={styles.ficha}>
        <Text>Opção 1 - Proc. de Injecão:</Text>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.pProcInjecao}
              onChangeText={props.setPProcInjecao}
              placeholder="Pressão"
              returnKeyType="next"
              onSubmitEditing={() => {
                pProcInjecao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.vProcInjecao}
              onChangeText={props.setVProcInjecao}
              placeholder="Velocidade"
              ref={pProcInjecao}
              returnKeyType="next"
              onSubmitEditing={() => {
                vProcInjecao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>

        <Text>Opção 3 - CJ Injetor:</Text>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.pAvancoCJ}
              onChangeText={props.setPAvancoCJ}
              placeholder="P. Avanço"
              ref={vProcInjecao}
              returnKeyType="next"
              onSubmitEditing={() => {
                pAvancoCJ.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.pRetornoCJ}
              onChangeText={props.setPRetornoCJ}
              placeholder="P. Retorno"
              ref={pAvancoCJ}
              returnKeyType="next"
              onSubmitEditing={() => {
                pRetornoCJ.current.focus();
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
              value={props.pRetornoCJ2}
              onChangeText={props.setPRetornoCJ2}
              placeholder="P. Retorno2"
              ref={pRetornoCJ}
              returnKeyType="next"
              onSubmitEditing={() => {
                pRetornoCJ2.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.vRetorno}
              onChangeText={props.setVRetorno}
              placeholder="Vel. Retorno"
              ref={pRetornoCJ2}
              returnKeyType="next"
              onSubmitEditing={() => {
                vRetorno.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.tempoRecuo}
            onChangeText={props.setTempoRecuo}
            placeholder="Tempo Recuo"
            ref={vRetorno}
            returnKeyType="next"
            onSubmitEditing={() => {
              tempoRecuo.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <Text>Opção 5 - Comutação:</Text>
        <View style={styles.inputRow}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.cComutacao}
              onChangeText={props.setCComutacao}
              placeholder="Curso"
              ref={tempoRecuo}
              returnKeyType="next"
              onSubmitEditing={() => {
                cComutacao.current.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input2}
              keyboardType="number-pad"
              value={props.tComutacao}
              onChangeText={props.setTComutacao}
              placeholder="Tempo"
              ref={cComutacao}
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
    maxHeight: 500,
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

export default FormMenuInjecao1;
