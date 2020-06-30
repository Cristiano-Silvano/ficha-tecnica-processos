/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  PermissionsAndroid,
  Platform,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';

import FormDescricao from '../componentes/maq4/FormDescricao';
import FormTempo from '../componentes/maq4/FormTempo';
import FormPressao from '../componentes/maq4/FormPressao';
import FormVazao from '../componentes/maq4/FormVazao';
import FormCursos from '../componentes/maq4/FormCursos';
import FormTemperaturas from '../componentes/maq4/FormTemperaturas';
import FormDescCilindro from '../componentes/maq4/FormDescCilindro';
import FormCaracInspecao from '../componentes/maq4/FormCaracInspecao';

const FichaTecnica4 = () => {
  //descrição peça/molde
  const [filePath, setFilePath] = useState('');
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState(0);
  const [numMolde, setNumMolde] = useState(0);
  const [quantCav, setQuantCav] = useState(0);
  const [tipo, setTipo] = useState('Direto');
  const [refrigeracao, setRefrigeracao] = useState('');
  const [maxAbertura, setMaxAbertura] = useState(0);
  const [materiaPrima, setMateriaPrima] = useState('');
  const [alturaMolde, setAlturaMolde] = useState(0);
  const [aberturaMaq, setAberturaMaq] = useState(0);
  const [extracao, setExtracao] = useState(0);
  const [cicloTotal, setCicloTotal] = useState('');
  //tempo
  const [fechamento, setFechamento] = useState(0);
  const [injecao, setInjecao] = useState(0);
  const [recalque, setRecalque] = useState(0);
  const [secagem, setSecagem] = useState(0);
  const [extPneumatico, setExtPneumatico] = useState(0);
  const [extRoscaSemFim, setExtRoscaSemFim] = useState(0);
  const [retDosagem, setRetDosagem] = useState(0);
  const [intCicloMaq, setIntCicloMaq] = useState(0);
  const [intrusao, setIntrusao] = useState(0);
  const [extHidraulico, setExtHidraulico] = useState(0);
  const [extMachoExtrai, setExtMachoExtrai] = useState(0);
  const [extMachoColoca, setExtMachoColoca] = useState(0);
  const [packPressure, setPackPressure] = useState(0);
  //pressão
  const [inicioFechamento, setInicioFechamento] = useState(0);
  const [segMolde, setSegMolde] = useState(0);
  const [trancamento, setTrancamento] = useState(0);
  const [encosteRetorno, setEncosteRetorno] = useState(0);
  const [injecaoPressao, setInjecaoPressao] = useState(0);
  const [packPressurePressao, setPackPressurePressao] = useState(0);
  const [recalquePressao, setRecalquePressao] = useState(0);
  const [dosagem, setDosagem] = useState(0);
  const [descompressao, setDescompressao] = useState(0);
  const [abertura, setAbertura] = useState(0);
  const [extHidraulicoPressao, setExtHidraulicoPressao] = useState(0);
  const [extMachos, setExtMachos] = useState(0);
  //vazão
  const [fechamentoVazao, setFechamentoVazao] = useState(0);
  const [freioParcFechamento, setFreioParcFechamento] = useState(0);
  const [encoste, setEncoste] = useState(0);
  const [injecaoVazao, setInjecaoVazao] = useState(0);
  const [packPressureVazao, setPackPressureVazao] = useState(0);
  const [recalqueVazao, setRecalqueVazao] = useState(0);
  const [dosagemVazao, setDosagemVazao] = useState(0);
  const [descompressaoVazao, setDescompressaoVazao] = useState(0);
  const [retorno, setRetorno] = useState(0);
  const [aberturaVazao, setAberturaVazao] = useState(0);
  const [freioParcAbertura, setFreioParcAbertura] = useState(0);
  //cursos
  const [dosagemCursos, setDosagemCursos] = useState(0);
  const [descompressaoCursos, setDescompressaoCursos] = useState(0);
  const [aberturaCursos, setAberturaCursos] = useState(0);
  const [extHidraulicoCursos, setExtHidraulicoCursos] = useState(0);
  //temperaturas
  const [bico, setBico] = useState(0);
  const [zona1, setZona1] = useState(0);
  const [zona2, setZona2] = useState(0);
  const [zona3, setZona3] = useState(0);
  //descarga do cilindro
  const [itemValue, setItemValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('com retorno');
  //características inspeção
  const [visual, setVisual] = useState(
    'A peça deve estar livre de rechupes, deformações, sujeiras, rebarbas, manchas',
  );
  const [dimensional, setDimensional] = useState('');

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

    setNome('');
    setCodigo(0);
    setNumMolde(0);
    setQuantCav(0);
    setTipo('');
    setRefrigeracao('');
    setMaxAbertura(0);
    setMateriaPrima('');
    setAlturaMolde(0);
    setAberturaMaq(0);
    setExtracao(0);
    setCicloTotal(0);
    setFechamento(0);
    setInjecao(0);
    setSecagem(0);
    setExtRoscaSemFim(0);
    setRetDosagem(0);
    setIntCicloMaq(0);
    setIntrusao(0);
    setExtHidraulico(0);
    setExtMachoExtrai(0);
    setExtMachoColoca(0);
    setPackPressure(0);
    setInicioFechamento(0);
    setSegMolde(0);
    setTrancamento(0);
    setEncosteRetorno(0);
    setInjecaoPressao(0);
    setPackPressurePressao(0);
    setRecalquePressao(0);
    setDosagem(0);
    setAbertura(0);
    setExtHidraulicoPressao(0);
    setExtMachos(0);
    setFechamentoVazao(0);
    setFreioParcFechamento(0);
    setEncoste(0);
    setPackPressureVazao(0);
    setRecalqueVazao(0);
    setDosagemVazao(0);
    setDescompressaoVazao(0);
    setRetorno(0);
    setFreioParcAbertura(0);
    setDosagemCursos(0);
    setDescompressaoCursos(0);
    setAberturaCursos(0);
    setExtHidraulicoCursos(0);
    setBico(0);
    setZona1(0);
    setZona2(0);
    setZona3(0);
    setSelectedValue('');
    setDimensional('');
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
              <td>NOME DA PEÇA: ${nome}</td>
            </tr>
            <tr >
              <td>CÓDIGO: ${codigo}</td>
            </tr>
            <tr>
              <td>Nº DO MOLDE: ${numMolde}</td>
            </tr>
            <tr>
              <td>QUANTIDADE DE CAVIDADES ${quantCav}:</td>
            </tr>
            <tr>
              <td>TIPO DE BICO: ${tipo}</td>
            </tr>
            <tr>
              <td>REFRIGERAÇÃO: ${refrigeracao}</td>
            </tr>
            <tr>
              <td>LIMITE MAX. DE ABERTURA DA MAQUINA: ${maxAbertura}mm</td>
            </tr>
            <tr>
              <td>MATÉRIA PRIMA: ${materiaPrima}</td>
            </tr>
            <tr>
              <td>ALTURA DO MOLDE: ${alturaMolde}mm</td>
            </tr>
            <tr>
              <td>ABERTURA DA MÁQUINA: ${aberturaMaq}mm</td>
            </tr>
            <tr>
              <td>EXTRAÇÃO: ${extracao}mm</td>
            </tr>
            <tr>
              <td>CICLO TOTAL: ${cicloTotal}s</td>
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
              <td style="width: 15%;">&nbsp; ${fechamento}</td>
            </tr>
            <tr>
              <td align="center">2</td>
              <td>INJEÇÃO</td>
              <td>&nbsp; ${injecao}</td>
            </tr>
            <tr>
              <td align="center">3</td>
              <td>RECALQUE</td>
              <td>&nbsp; ${recalque}</td>
            </tr>
            <tr>
              <td align="center">4</td>
              <td>SECAGEM</td>
              <td>&nbsp; ${secagem}</td>
            </tr>      
            <tr>
              <td align="center">5</td>
              <td>EXTRATOR PNEUMÁTICO</td>
              <td>&nbsp; ${extPneumatico}</td>
            </tr>
            <tr>
              <td align="center">6</td>
              <td>EXTRATOR COM ROSCA SEM FIM</td>
              <td>&nbsp; ${extRoscaSemFim}</td>
            </tr>
            <tr>
              <td align="center">7</td>
              <td>RETARDO DE DOSAGEM</td>
              <td>&nbsp; ${retDosagem}</td>
            </tr>
            <tr>
              <td align="center">8</td>
              <td>INTERRUPÇÃO DE CICLO DA MÁQUINA</td>
              <td>&nbsp; ${intCicloMaq}</td>
            </tr>
            <tr>
              <td align="center">9</td>
              <td>INTRUSÃO</td>
              <td>&nbsp; ${intrusao}</td>
            </tr>
            <tr>
              <td align="center">10</td>
              <td>EXTRATOR HIDRÁULICO</td>
              <td>&nbsp; ${extHidraulico}</td>
            </tr>
            <tr>
              <td align="center">11</td>
              <td>EXTRATOR DE MACHOS - EXTRAI</td>
              <td>&nbsp; ${extMachoExtrai}</td>
            </tr>
            <tr>
              <td align="center">12</td>
              <td>EXTRATOR DE MACHOS - COLOCA</td>
              <td>&nbsp; ${extMachoColoca}</td>
            </tr>
            <tr>
              <td align="center">13</td>
              <td>PACK PRESSURE</td>
              <td>&nbsp; ${packPressure}</td>
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
              <td style="width: 15%;">&nbsp; ${inicioFechamento}</td>
            </tr>
            <tr>
              <td align="center">15</td>
              <td>SEGURANÇA DE MOLDE</td>
              <td>&nbsp; ${segMolde}</td>
            </tr>
            <tr>
              <td align="center">16</td>
              <td>TRANCAMENTO</td>
              <td>&nbsp; ${trancamento}</td>
            </tr>
            <tr>
              <td align="center">17</td>
              <td>ENCOSTE/RETORNO</td>
              <td>&nbsp; ${encosteRetorno}</td>
            </tr>
            <tr>
              <td align="center">18</td>
              <td>INJEÇÃO</td>
              <td>&nbsp; ${injecaoPressao}</td>
            </tr>
            <tr>
              <td align="center">19</td>
              <td>PACK PRESSURE</td>
              <td>&nbsp; ${packPressurePressao}</td>
            </tr>
            <tr>
              <td align="center">20</td>
              <td>RECALQUE</td>
              <td>&nbsp; ${recalquePressao}</td>
            </tr>
            <tr>
              <td align="center">21</td>
              <td>DOSAGEM</td>
              <td>&nbsp; ${dosagem}</td>
            </tr>
            <tr>
              <td align="center">22</td>
              <td>DESCOMPRESSÃO</td>
              <td>&nbsp; ${descompressao}</td>
            </tr>
            <tr>
              <td align="center">23</td>
              <td>ABERTURA</td>
              <td>&nbsp; ${abertura}</td>
            </tr>
            <tr>
              <td align="center">24</td>
              <td>EXTRATOR HIDRÁULICO</td>
              <td>&nbsp; ${extHidraulicoPressao}</td>
            </tr>
            <tr>
              <td align="center">25</td>
              <td>EXTRATOR DE MACHOS</td>
              <td>&nbsp; ${extMachos}</td>
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
              <td style="width: 15%;">&nbsp; ${fechamentoVazao}</td>
            </tr>
            <tr>
              <td align="center">27</td>
              <td>FREIO PARCIAL DE FECHAMENTO</td>
              <td>&nbsp; ${freioParcFechamento}</td>
            </tr>
            <tr>
              <td align="center">28</td>
              <td>ENCOSTE</td>
              <td>&nbsp; ${encoste}</td>
            </tr>
            <tr>
              <td align="center">29</td>
              <td>INJEÇÃO</td>
              <td>&nbsp; ${injecaoVazao}</td>
            </tr>
            <tr>
              <td align="center">30</td>
              <td>PACK PRESSURE</td>
              <td>&nbsp; ${packPressureVazao}</td>
            </tr>
            <tr>
              <td align="center">31</td>
              <td>RECALQUE</td>
              <td>&nbsp; ${recalqueVazao}</td>
              <tr>
                <td align="center">32</td>
                <td>DOSAGEM</td>
                <td>&nbsp; ${dosagemVazao}</td>
              </tr>
              <tr>
                <td align="center">33</td>
                <td>DESCOMPRESSÃO</td>
                <td>&nbsp; ${descompressaoVazao}</td>
              </tr>
              <tr>
                <td align="center">34</td>
                <td>RETORNO</td>
                <td>&nbsp; ${retorno}</td>
              </tr>
              <tr>
                <td align="center">35</td>
                <td>ABERTURA</td>
                <td>&nbsp; ${aberturaVazao}</td>
              </tr>
              <tr>
                <td align="center">36</td>
                <td>FREIO PARCIAL DE ABERTURA</td>
                <td>&nbsp; ${freioParcAbertura}</td>
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
              <td style="width: 15%;">&nbsp; ${dosagemCursos}</td>
            </tr>
            <tr>
              <td align="center">38</td>
              <td>DESCOMPRESSÃO</td>
              <td>&nbsp; ${descompressaoCursos}</td>
            </tr>
            <tr>
              <td align="center">39</td>
              <td>ABERTURA</td>
              <td>&nbsp; ${aberturaCursos}</td>
            </tr>
            <tr>
              <td align="center">40</td>
              <td>EXTRATOR HIDRÁULICO</td>
              <td>&nbsp; ${extHidraulicoCursos}</td>
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
              <td>&nbsp; ${bico}%</td>
              <td>&nbsp; ${zona1}</td>
              <td>&nbsp; ${zona2}</td>
              <td>&nbsp; ${zona3}</td>
            </tr>
          </table>

          <table style="width: 100%;border: 1px solid black;font-size: small;
          border-collapse: collapse;">
            <tr style="background-color: gray;">
              <th colspan="2">DESCARGA DO CILINDRO</th>
            </tr>

            <tr>
              <td>${selectedValue}</td>
            </tr>
          </table>

          <table style="width: 100%;border: 1px solid black;font-size: small;
          border-collapse: collapse;">
            <tr style="background-color: gray;">
              <th colspan="2">CARACTERÍSTICAS DE INSPEÇÃO</th>
            </tr>

            <tr>
              <td>VISUAL: ${visual}</td>
            </tr>
            <tr>
              <td>DIMENSIONAL: ${dimensional}</td>
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
      fileName: `${nome.replace(/ /g, '')}_maq_4`,

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
        <Text style={styles.textMaq}>MÁQ. 4</Text>
        <FormDescricao
          nome={nome}
          setNome={setNome}
          codigo={codigo}
          setCodigo={setCodigo}
          numMolde={numMolde}
          setNumMolde={setNumMolde}
          quantCav={quantCav}
          setQuantCav={setQuantCav}
          tipo={tipo}
          setTipo={setTipo}
          refrigeracao={refrigeracao}
          setRefrigeracao={setRefrigeracao}
          maxAbertura={maxAbertura}
          setMaxAbertura={setMaxAbertura}
          materiaPrima={materiaPrima}
          setMateriaPrima={setMateriaPrima}
          alturaMolde={alturaMolde}
          setAlturaMolde={setAlturaMolde}
          aberturaMaq={aberturaMaq}
          setAberturaMaq={setAberturaMaq}
          extracao={extracao}
          setExtracao={setExtracao}
          cicloTotal={cicloTotal}
          setCicloTotal={setCicloTotal}
        />
        <FormTempo
          fechamento={fechamento}
          setFechamento={setFechamento}
          injecao={injecao}
          setInjecao={setInjecao}
          recalque={recalque}
          setRecalque={setRecalque}
          secagem={secagem}
          setSecagem={setSecagem}
          extPneumatico={extPneumatico}
          setExtPneumatico={setExtPneumatico}
          extRoscaSemFim={extRoscaSemFim}
          setExtRoscaSemFim={setExtRoscaSemFim}
          retDosagem={retDosagem}
          setRetDosagem={setRetDosagem}
          intCicloMaq={intCicloMaq}
          setIntCicloMaq={setIntCicloMaq}
          intrusao={intrusao}
          setIntrusao={setIntrusao}
          extHidraulico={extHidraulico}
          setExtHidraulico={setExtHidraulico}
          extMachoExtrai={extMachoExtrai}
          setExtMachoExtrai={setExtMachoExtrai}
          extMachoColoca={extMachoColoca}
          setExtMachoColoca={setExtMachoColoca}
          packPressure={packPressure}
          setPackPressure={setPackPressure}
        />
        <FormPressao
          inicioFechamento={inicioFechamento}
          setInicioFechamento={setInicioFechamento}
          segMolde={segMolde}
          setSegMolde={setSegMolde}
          trancamento={trancamento}
          setTrancamento={setTrancamento}
          encosteRetorno={encosteRetorno}
          setEncosteRetorno={setEncosteRetorno}
          injecaoPressao={injecaoPressao}
          setInjecaoPressao={setInjecaoPressao}
          packPressurePressao={packPressurePressao}
          setPackPressurePressao={setPackPressurePressao}
          recalquePressao={recalquePressao}
          setRecalquePressao={setRecalquePressao}
          dosagem={dosagem}
          setDosagem={setDosagem}
          descompressao={descompressao}
          setDescompressao={setDescompressao}
          abertura={abertura}
          setAbertura={setAbertura}
          extHidraulicoPressao={extHidraulicoPressao}
          setExtHidraulicoPressao={setExtHidraulicoPressao}
          extMachos={extMachos}
          setExtMachos={setExtMachos}
        />
        <FormVazao
          fechamentoVazao={fechamentoVazao}
          setFechamentoVazao={setFechamentoVazao}
          freioParcFechamento={freioParcFechamento}
          setFreioParcFechamento={setFreioParcFechamento}
          encoste={encoste}
          setEncoste={setEncoste}
          injecaoVazao={injecaoVazao}
          setInjecaoVazao={setInjecaoVazao}
          packPressureVazao={packPressureVazao}
          setPackPressureVazao={setPackPressureVazao}
          recalqueVazao={recalqueVazao}
          setRecalqueVazao={setRecalqueVazao}
          dosagemVazao={dosagemVazao}
          setDosagemVazao={setDosagemVazao}
          descompressaoVazao={descompressaoVazao}
          setDescompressaoVazao={setDescompressaoVazao}
          retorno={retorno}
          setRetorno={setRetorno}
          aberturaVazao={aberturaVazao}
          setAberturaVazao={setAberturaVazao}
          freioParcAbertura={freioParcAbertura}
          setFreioParcAbertura={setFreioParcAbertura}
        />
        <FormCursos
          dosagemCursos={dosagemCursos}
          setDosagemCursos={setDosagemCursos}
          descompressaoCursos={descompressaoCursos}
          setDescompressaoCursos={setDescompressaoCursos}
          aberturaCursos={aberturaCursos}
          setAberturaCursos={setAberturaCursos}
          extHidraulicoCursos={extHidraulicoCursos}
          setExtHidraulicoCursos={setExtHidraulicoCursos}
        />
        <FormTemperaturas
          bico={bico}
          setBico={setBico}
          zona1={zona1}
          setZona1={setZona1}
          zona2={zona2}
          setZona2={setZona2}
          zona3={zona3}
          setZona3={setZona3}
        />
        <FormDescCilindro
          itemValue={itemValue}
          setItemValue={setItemValue}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <FormCaracInspecao
          visual={visual}
          setVisual={setVisual}
          dimensional={dimensional}
          setDimensional={setDimensional}
        />
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

export default FichaTecnica4;
