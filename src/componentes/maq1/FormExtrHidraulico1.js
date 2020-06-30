import React, {useState, useRef} from 'react';
import {StyleSheet, View, Text, TextInput, CheckBox} from 'react-native';

const FormExtrHidraulico1 = (props) => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const pRetorno = useRef(null);
  const pAvanco = useRef(null);
  const tRetorno = useRef(null);

  const toggle = (num) => {
    if (num === 1) {
      setActive1(!active1);
      setActive2(false);
      setActive3(false);
      if (!active1) {
        props.setTipoExtrator('Inativo');
      } else {
        props.setTipoExtrator(null);
      }
    }

    if (num === 2) {
      setActive2(!active2);
      setActive1(false);
      setActive3(false);
      if (!active2) {
        props.setTipoExtrator('Repetido');
      } else {
        props.setTipoExtrator(null);
      }
    }
    if (num === 3) {
      setActive3(!active3);
      setActive1(false);
      setActive2(false);
      if (!active3) {
        props.setTipoExtrator('Sem Retorno');
      } else {
        props.setTipoExtrator(null);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>Extrator Hidráulico:</Text>
      <View style={styles.ficha}>
        <View style={styles.containerInput}>
          <View style={styles.containerTitulo}>
            <Text>Retorno</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Pressão Retorno"
            value={props.pRetorno}
            keyboardType="numeric"
            onChangeText={props.setPRetorno}
            returnKeyType="next"
            onSubmitEditing={() => {
              pRetorno.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Tempo Retorno"
            value={props.tRetorno}
            keyboardType="numeric"
            onChangeText={props.setTRetorno}
            ref={pAvanco}
            returnKeyType="next"
            onSubmitEditing={() => {
              tRetorno.current.focus();
            }}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.containerInput}>
          <View style={styles.containerTitulo}>
            <Text>Avanço</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Pressão Avanço"
            value={props.pAvanco}
            keyboardType="numeric"
            onChangeText={props.setPAvanco}
            ref={pRetorno}
            returnKeyType="next"
            onSubmitEditing={() => {
              pAvanco.current.focus();
            }}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Tempo Avanço"
            value={props.tAvanco}
            keyboardType="numeric"
            onChangeText={props.setTAvanco}
            ref={tRetorno}
          />
        </View>

        <View style={styles.containerInput}>
          <View style={styles.checkbox}>
            <CheckBox value={active1} onValueChange={() => toggle(1)} />
            <Text>Inativo</Text>
          </View>
          <View style={styles.checkbox}>
            <CheckBox value={active2} onValueChange={() => toggle(2)} />
            <Text>Repetido</Text>
          </View>
          <View style={styles.checkbox}>
            <CheckBox value={active3} onValueChange={() => toggle(3)} />
            <Text>Sem Retorno</Text>
          </View>
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
    width: '95%',
    height: 126,
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
  containerInput: {
    height: 120,
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
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
});

export default FormExtrHidraulico1;
