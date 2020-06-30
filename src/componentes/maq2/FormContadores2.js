import React, {useRef} from 'react';

import {StyleSheet, View, TextInput, Text} from 'react-native';

const FormContadores2 = (props) => {
  const quantExtracao = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Contadores:</Text>
      <View style={styles.ficha}>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Quantidade de Extração:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.quantExtracao}
            onChangeText={props.setQuantExtracao}
            returnKeyType="next"
            onSubmitEditing={() => {
              quantExtracao.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textoInput}>Ciclo para Lubrificar:</Text>
          <TextInput
            style={styles.input2}
            keyboardType="number-pad"
            value={props.cicloLubrificar}
            onChangeText={props.setCicloLubrificar}
            ref={quantExtracao}
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

export default FormContadores2;
