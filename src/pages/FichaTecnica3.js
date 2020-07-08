import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  PermissionsAndroid,
  Platform,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import Descricao from '../componentes/maq3/Descricao';

/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';

const FichaTecnica3 = () => {
  const [data, setData] = useState({});
  const [filePath, setFilePath] = useState('');

  console.log(data);

  const navigation = useNavigation();

  const requestRunTimePermission = () => {
    async function externalStoragePermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'O App precisa de permissão para salvar dados no Storage!',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          createPDF_File();
        } else {
          Alert.alert('WRITE_EXTERNAL_STORAGE permissão negada');
        }
      } catch (err) {
        Alert.alert('Write permission err', err);
        console.warn(err);
      }
    }

    if (Platform.OS === 'android') {
      externalStoragePermission();
    } else {
      createPDF_File();
    }
  };

  const html = `
  <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>

          <style>
            table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
            }
          </style>
      </head>
      <body>
        <div style="width: 100%;margin: auto;border: 1px solid black;border-collapse: collapse;">
          <header style="align-items: center;justify-content: center;">
            <img style="float: left;" src="file:/storage/emulated/0/docs/logo.png" height=110 width=100/>
            <div style="align-items: center; justify-content: center;display: flex;flex-direction: column;">
              <h4>FICHA TÉCNICA DE PROCESSO - MAQ.4</h4>
            </div>
          </header>
          <table style="align-self: flex-start;padding-left: 20px;font-size: small;width: 100%;">
            <tr>
              <td>NOME DA PEÇA: ${data.nome}</td>
            </tr>
            <tr >
              <td>CÓDIGO: ${data.codigo}</td>
            </tr>
            <tr>
              <td>Nº DO MOLDE: ${data.numMolde}</td>
            </tr>
            <tr>
              <td>QUANTIDADE DE CAVIDADES ${data.quantCav}:</td>
            </tr>
            <tr>
              <td>TIPO DE BICO: ${data.tipoBico}</td>
            </tr>
            <tr>
              <td>REFRIGERAÇÃO: ${data.refrigeracao}</td>
            </tr>
            <tr>
              <td>LIMITE MAX. DE ABERTURA DA MAQUINA: ${data.maxAbertura}mm</td>
            </tr>
            <tr>
              <td>MATÉRIA PRIMA: ${data.materiaPrima}</td>
            </tr>
            <tr>
              <td>ALTURA DO MOLDE: ${data.altMolde}mm</td>
            </tr>
            <tr>
              <td>ABERTURA DA MÁQUINA: ${data.abertMaq}mm</td>
            </tr>
            <tr>
              <td>EXTRAÇÃO: ${data.extracao}mm</td>
            </tr>
            <tr>
              <td>CICLO TOTAL: ${data.cicloTotal}s</td>
            </tr>
          </table>
          <table style="clear: both;width: 50%;float: left;border: 1px solid black;font-size: small;
          border-collapse: collapse;">
      
            <tr style="background-color: gray;">
              <th colspan="3">TEMPO</th>
            </tr>
            <tr>
              <td style="width: 10%;" align="center" >1</td>
              <td>FECHAMENTO</td>
              <td style="width: 15%;">&nbsp; ${data.fechamento}</td>
            </tr>
            <tr>
              <td align="center">2</td>
              <td>INJEÇÃO</td>
              <td>&nbsp; ${data.injecao}</td>
            </tr>
            <tr>
              <td align="center">3</td>
              <td>RECALQUE</td>
              <td>&nbsp; ${data.recalque}</td>
            </tr>
            <tr>
              <td align="center">4</td>
              <td>SECAGEM</td>
              <td>&nbsp; ${data.secagem}</td>
            </tr>      
            <tr>
              <td align="center">5</td>
              <td>EXTRATOR PNEUMÁTICO</td>
              <td>&nbsp; ${data.extPneumatico}</td>
            </tr>
            <tr>
              <td align="center">6</td>
              <td>EXTRATOR COM ROSCA SEM FIM</td>
              <td>&nbsp; ${data.extRoscaSemFim}</td>
            </tr>
            <tr>
              <td align="center">7</td>
              <td>RETARDO DE DOSAGEM</td>
              <td>&nbsp; ${data.retDosagem}</td>
            </tr>
            <tr>
              <td align="center">8</td>
              <td>INTERRUPÇÃO DE CICLO DA MÁQUINA</td>
              <td>&nbsp; ${data.intCicloMaq}</td>
            </tr>
            <tr>
              <td align="center">9</td>
              <td>INTRUSÃO</td>
              <td>&nbsp; ${data.intrusao}</td>
            </tr>
            <tr>
              <td align="center">10</td>
              <td>EXTRATOR HIDRÁULICO</td>
              <td>&nbsp; ${data.extHidraulico}</td>
            </tr>
            <tr>
              <td align="center">11</td>
              <td>EXTRATOR DE MACHOS - EXTRAI</td>
              <td>&nbsp; ${data.extMachoExtrai}</td>
            </tr>
            <tr>
              <td align="center">12</td>
              <td>EXTRATOR DE MACHOS - COLOCA</td>
              <td>&nbsp; ${data.extMachoColoca}</td>
            </tr>
            <tr>
              <td align="center">13</td>
              <td>PACK PRESSURE</td>
              <td>&nbsp; ${data.packPressure}</td>
            </tr>

          </table>

          <table style="float: right;width: 50%;border: 1px solid black;font-size: small;
          border-collapse: collapse;">
            <tr style="background-color: gray;">
              <th colspan="3">PRESSÃO</th>
            </tr>
            <tr>
              <td style="width: 10%;" align="center">14</td>
              <td>INCIO FECHAMENTO</td>
              <td style="width: 15%;">&nbsp; ${data.inicioFechamento}</td>
            </tr>
            <tr>
              <td align="center">15</td>
              <td>SEGURANÇA DE MOLDE</td>
              <td>&nbsp; ${data.segMolde}</td>
            </tr>
            <tr>
              <td align="center">16</td>
              <td>TRANCAMENTO</td>
              <td>&nbsp; ${data.trancamento}</td>
            </tr>
            <tr>
              <td align="center">17</td>
              <td>ENCOSTE/RETORNO</td>
              <td>&nbsp; ${data.encosteRetorno}</td>
            </tr>
            <tr>
              <td align="center">18</td>
              <td>INJEÇÃO</td>
              <td>&nbsp; ${data.injecaoPressao}</td>
            </tr>
            <tr>
              <td align="center">19</td>
              <td>PACK PRESSURE</td>
              <td>&nbsp; ${data.packPressurePressao}</td>
            </tr>
            <tr>
              <td align="center">20</td>
              <td>RECALQUE</td>
              <td>&nbsp; ${data.recalquePressao}</td>
            </tr>
            <tr>
              <td align="center">21</td>
              <td>DOSAGEM</td>
              <td>&nbsp; ${data.dosagem}</td>
            </tr>
            <tr>
              <td align="center">22</td>
              <td>DESCOMPRESSÃO</td>
              <td>&nbsp; ${data.descompressao}</td>
            </tr>
            <tr>
              <td align="center">23</td>
              <td>ABERTURA</td>
              <td>&nbsp; ${data.abertura}</td>
            </tr>
            <tr>
              <td align="center">24</td>
              <td>EXTRATOR HIDRÁULICO</td>
              <td>&nbsp; ${data.extHidraulicoPressao}</td>
            </tr>
            <tr>
              <td align="center">25</td>
              <td>EXTRATOR DE MACHOS</td>
              <td>&nbsp; ${data.extMachos}</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>

          <table style="clear: both;width: 50%;float: left;border: 1px solid black;font-size: small;
          border-collapse: collapse;">
            <tr style="background-color: gray;">
              <th colspan="3">VAZÃO</th>
            </tr>
            <tr>
              <td style="width: 10%;" align="center">26</td>
              <td>FECHAMENTO</td>
              <td style="width: 15%;">&nbsp; ${data.fechamentoVazao}</td>
            </tr>
            <tr>
              <td align="center">27</td>
              <td>FREIO PARCIAL DE FECHAMENTO</td>
              <td>&nbsp; ${data.freioParcFechamento}</td>
            </tr>
            <tr>
              <td align="center">28</td>
              <td>ENCOSTE</td>
              <td>&nbsp; ${data.encoste}</td>
            </tr>
            <tr>
              <td align="center">29</td>
              <td>INJEÇÃO</td>
              <td>&nbsp; ${data.injecaoVazao}</td>
            </tr>
            <tr>
              <td align="center">30</td>
              <td>PACK PRESSURE</td>
              <td>&nbsp; ${data.packPressureVazao}</td>
            </tr>
            <tr>
              <td align="center">31</td>
              <td>RECALQUE</td>
              <td>&nbsp; ${data.recalqueVazao}</td>
              <tr>
                <td align="center">32</td>
                <td>DOSAGEM</td>
                <td>&nbsp; ${data.dosagemVazao}</td>
              </tr>
              <tr>
                <td align="center">33</td>
                <td>DESCOMPRESSÃO</td>
                <td>&nbsp; ${data.descompressaoVazao}</td>
              </tr>
              <tr>
                <td align="center">34</td>
                <td>RETORNO</td>
                <td>&nbsp; ${data.retorno}</td>
              </tr>
              <tr>
                <td align="center">35</td>
                <td>ABERTURA</td>
                <td>&nbsp; ${data.aberturaVazao}</td>
              </tr>
              <tr>
                <td align="center">36</td>
                <td>FREIO PARCIAL DE ABERTURA</td>
                <td>&nbsp; ${data.freioParcAbertura}</td>
              </tr>
            </tr>
          </table>

          <table style="float: right;width: 50%;border: 1px solid black;font-size: small;
          border-collapse: collapse;">
            <tr style="background-color: gray;">
              <th colspan="3">CURSOS</th>
            </tr>
            <tr>
              <td style="width: 10%;" align="center">37</td>
              <td>DOSAGEM</td>
              <td style="width: 15%;">&nbsp; ${data.dosagemCursos}</td>
            </tr>
            <tr>
              <td align="center">38</td>
              <td>DESCOMPRESSÃO</td>
              <td>&nbsp; ${data.descompressaoCursos}</td>
            </tr>
            <tr>
              <td align="center">39</td>
              <td>ABERTURA</td>
              <td>&nbsp; ${data.aberturaCursos}</td>
            </tr>
            <tr>
              <td align="center">40</td>
              <td>EXTRATOR HIDRÁULICO</td>
              <td>&nbsp; ${data.extHidraulicoCursos}</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>

          <table style="width: 100%;border: 1px solid black;font-size: small;
          border-collapse: collapse;clear: both;">
            <tr style="background-color: gray;">
              <th colspan="4">TEMPERTAURAS</th>
            </tr>
            <tr style="background-color: gray;">
              <th>BICO</th>
              <th>ZONA 1</th>
              <th>ZONA 2</th>
              <th>ZONA 3</th>
            </tr>
            <tr>
              <td>&nbsp; ${data.bico}%</td>
              <td>&nbsp; ${data.zona1}</td>
              <td>&nbsp; ${data.zona2}</td>
              <td>&nbsp; ${data.zona3}</td>
            </tr>
          </table>

          <table style="width: 100%;border: 1px solid black;font-size: small;
          border-collapse: collapse;">
            <tr style="background-color: gray;">
              <th colspan="2">DESCARGA DO CILINDRO</th>
            </tr>

            <tr>
              <td>${data.selectedValue}</td>
            </tr>
          </table>

          <table style="width: 100%;border: 1px solid black;font-size: small;
          border-collapse: collapse;">
            <tr style="background-color: gray;">
              <th colspan="2">CARACTERÍSTICAS DE INSPEÇÃO</th>
            </tr>

            <tr>
              <td>VISUAL: ${data.visual}</td>
            </tr>
            <tr>
              <td>DIMENSIONAL: ${data.dimensional}</td>
            </tr>
          </table>
        </div>  
      </body>
    </html>
    `;

  const createPDF_File = async () => {
    let options = {
      // conteudo HTML
      html: html,
      // Setting UP File Name for PDF File.
      fileName: `${data.nome.replace(/ /g, '')}_maq_3`,

      //File directory in which the PDF File Will Store.
      directory: 'docs',
    };

    let file = await RNHTMLtoPDF.convert(options);

    console.log(file.filePath);

    Alert.alert(file.filePath);

    setFilePath(file.filePath);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack('Home');
          }}
          style={{alignSelf: 'flex-end', paddingRight: 20, paddingTop: 10}}>
          <Text style={{fontSize: 20, color: '#AF9800'}}>X</Text>
        </TouchableOpacity>
        <Text style={styles.title}>FICHA TÉCNICA DE PROCESSO</Text>
        <Text style={styles.textMaq}>MÁQ. 3</Text>
        <Formik
          initialValues={{
            nome: '',
            codigo: '',
            numMolde: '',
            quantCav: '',
            tipoBico: '',
            refrigeracao: '',
            maxAbertura: '',
            materiaPrima: '',
            altMolde: '',
            abertMaquina: '',
            extracao: '',
            cicloTotal: '',
          }}
          onSubmit={(values, actions) => {
            setData(values);
            alert(JSON.stringify(values));
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}>
          {(formikProps) => (
            <React.Fragment>
              <Descricao values="values" formikProps={formikProps} />
              {formikProps.isSubmitting ? (
                <ActivityIndicator />
              ) : (
                <Button title="Submit" onPress={formikProps.handleSubmit} />
              )}
            </React.Fragment>
          )}
        </Formik>

        <TouchableOpacity
          onPress={requestRunTimePermission}
          style={styles.button}>
          <Text>gerar pdf</Text>
        </TouchableOpacity>
        <Text>{`Arquivo salvo em: ${filePath}`}</Text>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D8E3E3',
  },
  title: {
    paddingTop: 10,
    fontSize: 19,
  },
  textMaq: {
    color: '#ED3B3B',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    paddingRight: 55,
    marginBottom: 30,
  },
  containerNext: {
    alignItems: 'flex-end',
    width: '100%',
    marginRight: 60,
  },
  textButton: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ED3B3B',
  },
  button: {
    backgroundColor: '#ED3B3B',
    height: 40,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default FichaTecnica3;
