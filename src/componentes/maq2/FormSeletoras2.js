/* eslint-disable no-lone-blocks */
import React, {useState} from 'react';

import {StyleSheet, View, Text} from 'react-native';
import FormSwitch from './FormSwitch';

const FormSeletoras2 = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);
  const [isEnabled6, setIsEnabled6] = useState(false);
  const [isEnabled7, setIsEnabled7] = useState(false);
  const [isEnabled8, setIsEnabled8] = useState(false);
  const [isEnabled9, setIsEnabled9] = useState(false);
  const [isEnabled10, setIsEnabled10] = useState(false);
  const [isEnabled11, setIsEnabled11] = useState(false);

  const toggle = (num) => {
    if (num === 1) {
      setIsEnabled((previousState) => !previousState);
      {
        !isEnabled ? props.setAquecimento('ON') : props.setAquecimento('OFF');
      }
    }
    if (num === 2) {
      setIsEnabled2((previousState) => !previousState);
      {
        !isEnabled2
          ? props.setPecasProduzidas('ON')
          : props.setPecasProduzidas('OFF');
      }
    }
    if (num === 3) {
      setIsEnabled3((previousState) => !previousState);
      {
        !isEnabled3
          ? props.setProdProgramada('ON')
          : props.setProdProgramada('OFF');
      }
    }
    if (num === 4) {
      setIsEnabled4((previousState) => !previousState);
      {
        !isEnabled4
          ? props.setPreCargaIntrusao('ON')
          : props.setPreCargaIntrusao('OFF');
      }
    }
    if (num === 5) {
      setIsEnabled5((previousState) => !previousState);
      {
        !isEnabled5
          ? props.setLigaRecuoBico('ON')
          : props.setLigaRecuoBico('OFF');
      }
    }
    if (num === 6) {
      setIsEnabled6((previousState) => !previousState);
      {
        !isEnabled6
          ? props.setLigaTrocaMolde('ON')
          : props.setLigaTrocaMolde('OFF');
      }
    }
    if (num === 7) {
      setIsEnabled7((previousState) => !previousState);
      {
        !isEnabled7
          ? props.setExtrHidrCentral('ON')
          : props.setExtrHidrCentral('OFF');
      }
    }
    if (num === 8) {
      setIsEnabled8((previousState) => !previousState);
      {
        !isEnabled8
          ? props.setDescompressaoSeletoras('ON')
          : props.setDescompressaoSeletoras('OFF');
      }
    }
    if (num === 9) {
      setIsEnabled9((previousState) => !previousState);
      {
        !isEnabled9
          ? props.setSelecionaSemiAuto('Auto')
          : props.setSelecionaSemiAuto('Semi');
      }
    }
    if (num === 10) {
      setIsEnabled10((previousState) => !previousState);
      {
        !isEnabled10
          ? props.setLigaDesrosqueador('Ligado')
          : props.setLigaDesrosqueador('Desligado');
      }
    }
    if (num === 11) {
      setIsEnabled11((previousState) => !previousState);
      {
        !isEnabled11
          ? props.setSelecionaMacho('Ligado')
          : props.setSelecionaMacho('Desligado');
      }
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.descricao}>Seletoras:</Text>
        <View style={styles.ficha}>
          <FormSwitch
            title={'Aquecimento'}
            value={isEnabled}
            onValueChange={() => toggle(1)}
            title2={isEnabled ? 'ON' : 'OFF'}
          />
          <FormSwitch
            title={'Peças Produzidas'}
            value={isEnabled2}
            onValueChange={() => toggle(2)}
            title2={isEnabled2 ? 'ON' : 'OFF'}
          />
          <FormSwitch
            title={'Prod. Programada'}
            value={isEnabled3}
            onValueChange={() => toggle(3)}
            title2={isEnabled3 ? 'ON' : 'OFF'}
          />
          <FormSwitch
            title={'Pré-Carga *Intrusão*'}
            value={isEnabled4}
            onValueChange={() => toggle(4)}
            title2={isEnabled4 ? 'ON' : 'OFF'}
          />
          <FormSwitch
            title={'Liga Recuo de Bico'}
            value={isEnabled5}
            onValueChange={() => toggle(5)}
            title2={isEnabled5 ? 'ON' : 'OFF'}
          />
          <FormSwitch
            title={'Liga Troca de Molde'}
            value={isEnabled6}
            onValueChange={() => toggle(6)}
            title2={isEnabled6 ? 'ON' : 'OFF'}
          />
          <FormSwitch
            title={'Extr. Hidr. Central'}
            value={isEnabled7}
            onValueChange={() => toggle(7)}
            title2={isEnabled7 ? 'ON' : 'OFF'}
          />
          <FormSwitch
            title={'Descompressão'}
            value={isEnabled8}
            onValueChange={() => toggle(8)}
            title2={isEnabled8 ? 'ON' : 'OFF'}
          />
          <FormSwitch
            title={'Seleciona Semi/Auto'}
            value={isEnabled9}
            onValueChange={() => toggle(9)}
            title2={isEnabled9 ? 'Auto' : 'Semi'}
          />
          <FormSwitch
            title={'Liga Desrosqueador'}
            value={isEnabled10}
            onValueChange={() => toggle(10)}
            title2={isEnabled10 ? 'Ligado' : 'Desligado'}
          />
          <FormSwitch
            title={'Seleciona Macho'}
            value={isEnabled11}
            onValueChange={() => toggle(11)}
            title2={isEnabled11 ? 'Ligado' : 'Desligado'}
          />
        </View>
      </View>
    </>
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
});

export default FormSeletoras2;
