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

import FormDescricao2 from '../componentes/maq2/FormDescricao2';
import FormVazao2 from '../componentes/maq2/FormVazao2';
import FormCaracInspecao2 from '../componentes/maq2/FormCaracInspecao2';
import FormTempo2 from '../componentes/maq2/FormTempo2';
import FormPressao2 from '../componentes/maq2/FormPressao2';
import FormPosicao2 from '../componentes/maq2/FormPosicao2';
import FormContadores2 from '../componentes/maq2/FormContadores2';
import FormSeletoras2 from '../componentes/maq2/FormSeletoras2';
import FormTemperaturas2 from '../componentes/maq2/FormTemperaturas2';

const FichaTecnica2 = () => {
  //Estados
  //descrição peça/molde
  const [filePath, setFilePath] = useState('');
  const [nome2, setNome2] = useState('');
  const [codigo2, setCodigo2] = useState(0);
  const [numMolde2, setNumMolde2] = useState(0);
  const [quantCav2, setQuantCav2] = useState(0);
  const [tipo2, setTipo2] = useState('Direto');
  const [refrigeracao2, setRefrigeracao2] = useState('');
  const [maxAbertura2, setMaxAbertura2] = useState(0);
  const [materiaPrima2, setMateriaPrima2] = useState('');
  const [alturaMolde2, setAlturaMolde2] = useState(0);
  const [aberturaMaq2, setAberturaMaq2] = useState(0);
  const [extracao2, setExtracao2] = useState(0);
  const [cicloTotal2, setCicloTotal2] = useState('');
  //tempos
  const [tempInjecao, setTempInjecao] = useState(0);
  const [tempRecalque, setTempRecalque] = useState(0);
  const [preCargaIntrucao, setPreCargaIntrucao] = useState(0);
  const [tempResfriamento, setTempResfriamento] = useState(0);
  const [tempProtMolde, setTempProtMolde] = useState(0);
  const [tempReciclo, setTempReciclo] = useState(0);
  const [tempRecuoBico, setTempRecuoBico] = useState(0);
  const [retarInjecao, setRetarInjecao] = useState(0);
  const [retardoCarga2, setRetardoCarga2] = useState(0);
  const [supervisaoCiclo, setSupervisaoCiclo] = useState(0);
  const [supervisaoCarga, setSupervisaoCarga] = useState(0);
  const [extAvancado, setExtAvancado] = useState(0);
  const [visualizaCiclo, setVisualizaCiclo] = useState(0);
  const [tempDesrosquear, setTempDesrosquear] = useState(0);
  const [tempTiraMacho, setTempTiraMacho] = useState(0);
  const [tempColocaMacho, setTempColocaMacho] = useState(0);
  const [tempDosagem, setTempDosagem] = useState(0);
  //pressão
  const [pInjecao1, setPInjecao1] = useState(0);
  const [pInjecao2, setPInjecao2] = useState(0);
  const [pRecalque, setPRecalque] = useState(0);
  const [descompressaoPressao, setDescompressaoPressao] = useState(0);
  const [pAbertura1, setPAbertura1] = useState(0);
  const [pAbertura2, setPAbertura2] = useState(0);
  const [pFechamento, setPFechamento] = useState(0);
  const [protecaoMolde, setProtecaoMolde] = useState(0);
  const [pTrancamento, setPTrancamento] = useState(0);
  const [avancaInjetor, setAvancaInjetor] = useState(0);
  const [recuaInjetor, setRecuaInjetor] = useState(0);
  const [avancoExtHidraulico, setAvancoExtHidraulico] = useState(0);
  const [recuoExtHidraulico, setRecuoExtHidraulico] = useState(0);
  const [rpmRoscaCarga, setRpmRoscaCarga] = useState(0);
  const [pTiraMacho, setPTiraMacho] = useState(0);
  const [pColocaMacho, setPColocaMacho] = useState(0);
  //posição
  const [inicioInjecao, setInicioInjecao] = useState(0);
  const [inicioRecalque, setInicioRecalque] = useState(0);
  const [limiteCarga, setLimiteCarga] = useState(0);
  const [limDescompressao, setLimDescompressao] = useState(0);
  const [inicioAbertura2, setInicioAbertura2] = useState(0);
  const [inicioAbertura3, setInicioAbertura3] = useState(0);
  const [limiteAbertura, setLimiteAbertura] = useState(0);
  const [inicProtMolde, setInicProtMolde] = useState(0);
  const [iniciotravamento, setIniciotravamento] = useState(0);
  const [posExtrair, setPosExtrair] = useState(0);
  const [inicioDesrosquear, setInicioDesrosquear] = useState(0);
  const [inicioTiraMacho, setInicioTiraMacho] = useState(0);
  const [inicioColocaMacho, setInicioColocaMacho] = useState(0);
  const [limExtracao1, setLimExtracao1] = useState(0);
  const [limExtracao2, setLimExtracao2] = useState(0);
  const [limRetornoExtr, setlimRetornoExtr] = useState(0);
  //contadores
  const [quantExtracao, setQuantExtracao] = useState(0);
  const [cicloLubrificar, setCicloLubrificar] = useState(0);
  //Vazão
  const [vInjecao1, setVInjecao1] = useState(0);
  const [vInjecao2, setVInjecao2] = useState(0);
  const [vRecalque, setVRecalque] = useState(0);
  const [vDescompressao, setVDescompressao] = useState(0);
  const [vAbertura1, setVAbertura1] = useState(0);
  const [vAbertura2, setVAbertura2] = useState(0);
  const [vFechamento, setVFechamento] = useState(0);
  const [vProtMolde, setVProtMolde] = useState(0);
  const [vTrancamento, setVTrancamento] = useState(0);
  const [avancaInjetorVazao, setAvancaInjetorVazao] = useState(0);
  const [recuaInjetorvazao, setRecuaInjetorvazao] = useState(0);
  const [avancoExtHidraulicoVazao, setAvancoExtHidraulicoVazao] = useState(0);
  const [recuoExtHidraulicoVazao, setRecuoExtHidraulicoVazao] = useState(0);
  const [rpmRoscaCargaVazao, setRpmRoscaCargaVazao] = useState(0);
  const [pTiraMachoVazao, setPTiraMachoVazao] = useState(0);
  const [pColocaMachoVazao, setPColocaMachoVazao] = useState(0);
  //seletoras
  const [aquecimento, setAquecimento] = useState('');
  const [pecasProduzidas, setPecasProduzidas] = useState(0);
  const [prodProgramada, setProdProgramada] = useState(0);
  const [preCargaIntrusao, setPreCargaIntrusao] = useState(0);
  const [ligaRecuoBico, setLigaRecuoBico] = useState(0);
  const [ligaTrocaMolde, setLigaTrocaMolde] = useState(0);
  const [extrHidrCentral, setExtrHidrCentral] = useState(0);
  const [descompressaoSeletoras, setDescompressaoSeletoras] = useState(0);
  const [selecionaSemiAuto, setSelecionaSemiAuto] = useState(0);
  const [ligaDesrosqueador, setLigaDesrosqueador] = useState(0);
  const [selecionaMacho, setSelecionaMacho] = useState(0);
  //temperaturas
  const [bico2, setBico2] = useState(0);
  const [zona12, setZona12] = useState(0);
  const [zona22, setZona22] = useState(0);
  const [zona32, setZona32] = useState(0);
  const [zona42, setZona42] = useState(0);
  //características inspeção
  const [visual, setVisual] = useState(
    'A peça deve estar livre de rechupes, deformações, sujeiras, rebarbas, manchas',
  );
  const [dimensional, setDimensional] = useState('');

  const navigation = useNavigation();

  //Função(pedir permissão do usuário)
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
    //resetar inputs Descrição
    setNome2('');
    setCodigo2(0);
    setNumMolde2(0);
    setQuantCav2(0);
    setTipo2('');
    setRefrigeracao2('');
    setMaxAbertura2(0);
    setMateriaPrima2('');
    setAlturaMolde2(0);
    setAberturaMaq2(0);
    setExtracao2(0);
    setCicloTotal2(0);
    //Temperatura
    setBico2(0);
    setZona12(0);
    setZona22(0);
    setZona32(0);
    setZona42(0);
    setDimensional('');
    //Tempos
    setTempInjecao(0);
    setTempRecalque(0);
    setPreCargaIntrucao(0);
    setTempResfriamento(0);
    setTempProtMolde(0);
    setTempReciclo(0);
    setTempRecuoBico(0);
    setRetarInjecao(0);
    setRetardoCarga2(0);
    setSupervisaoCiclo(0);
    setSupervisaoCarga(0);
    setExtAvancado(0);
    setVisualizaCiclo(0);
    setTempDesrosquear(0);
    setTempTiraMacho(0);
    setTempColocaMacho(0);
    setTempDosagem(0);
    //Pressão
    setPInjecao1(0);
    setPInjecao2(0);
    setPRecalque(0);
    setDescompressaoPressao(0);
    setPAbertura1(0);
    setPAbertura2(0);
    setPFechamento(0);
    setProtecaoMolde(0);
    setPTrancamento(0);
    setAvancaInjetor(0);
    setRecuaInjetor(0);
    setAvancoExtHidraulico(0);
    setRecuoExtHidraulico(0);
    setRpmRoscaCarga(0);
    setPTiraMacho(0);
    setPColocaMacho(0);
    //Posição
    setInicioInjecao(0);
    setInicioRecalque(0);
    setLimiteCarga(0);
    setLimDescompressao(0);
    setInicioAbertura2(0);
    setInicioAbertura3(0);
    setLimiteAbertura(0);
    setInicProtMolde(0);
    setIniciotravamento(0);
    setPosExtrair(0);
    setInicioDesrosquear(0);
    setInicioTiraMacho(0);
    setInicioColocaMacho(0);
    setLimExtracao1(0);
    setLimExtracao2(0);
    setlimRetornoExtr(0);
    //Contadores
    setQuantExtracao(0);
    setCicloLubrificar(0);
    //Vazão
    setVInjecao1(0);
    setVInjecao2(0);
    setVRecalque(0);
    setVDescompressao(0);
    setVAbertura1(0);
    setVAbertura2(0);
    setVFechamento(0);
    setVProtMolde(0);
    setVTrancamento(0);
    setAvancaInjetorVazao(0);
    setRecuaInjetorvazao(0);
    setAvancoExtHidraulicoVazao(0);
    setRecuoExtHidraulicoVazao(0);
    setRpmRoscaCargaVazao(0);
    setPTiraMachoVazao(0);
    setPColocaMachoVazao(0);
    //Seletoras
    setAquecimento(0);
    setPecasProduzidas(0);
    setProdProgramada(0);
    setPreCargaIntrusao(0);
    setLigaRecuoBico(0);
    setLigaTrocaMolde(0);
    setExtrHidrCentral(0);
    setDescompressaoSeletoras(0);
    setSelecionaSemiAuto(0);
    setLigaDesrosqueador(0);
    setSelecionaMacho(0);
  };

  const html2 = `
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
            padding-left: 5px;
          }
        </style>
    </head>
    <body>
      
      <div style="width: 100%;border: 1px solid black;border-collapse: collapse;">
        <div style="width: 100%; flex-direction: row;display: flex;" >
          <img src="logo.png" width="20%" height= 235 style="border: 2px solid white;"/>

        <table style="align-self: flex-start;padding-left: 20px;font-size: small;width: 100%;">
          <tr>
            <th style="font-size: medium;">FICHA TÉCNICA DE PROCESSO - MAQ.2</td>
          </tr>
          
          <tr>
            <td>NOME DA PEÇA: ${nome2}</td>
          </tr>
          <tr>
            <td>CÓDIGO: ${codigo2}</td>
          </tr>
          <tr>
            <td>Nº DO MOLDE: ${numMolde2}</td>
          </tr>
          <tr>
            <td>QUANTIDADE DE CAVIDADES: ${quantCav2}</td>
          </tr>
          <tr>
            <td>TIPO DE BICO: ${tipo2}</td>
          </tr>
          <tr>
            <td>REFRIGERAÇÃO: ${refrigeracao2}</td>
          </tr>
          <tr>
            <td>LIMITE MAX. DE ABERTURA DA MAQUINA: ${maxAbertura2}</td>
          </tr>
          <tr>
            <td>MATÉRIA PRIMA: ${materiaPrima2}</td>
          </tr>
          <tr>
            <td>ALTURA DO MOLDE: ${alturaMolde2}</td>
          </tr>
          <tr>
            <td>ABERTURA DA MÁQUINA: ${aberturaMaq2}</td>
          </tr>
          <tr>
            <td>EXTRAÇÃO: ${extracao2}</td>
          </tr>
          <tr>
            <td>CICLO TOTAL: ${cicloTotal2}</td>
          </tr>
        </table>
      </div>

        <table style="clear: both;width: 33.3%;float: left;font-size: small;">
          <tr style="background-color: gray;">
            <th colspan="2">TEMPOS</th>
          </tr>
          <tr>
            <td>T. INJEÇÃO</td>
            <td style="width: 15%;">&nbsp; ${tempInjecao}</td>
          </tr>
          <tr>
            <td>T. RECALQUE</td>
            <td>&nbsp; ${tempRecalque}</td>
          </tr>
          <tr>
            <td>PRÉ-CARGA *INTRUSÃO</td>
            <td>&nbsp; ${preCargaIntrucao}</td>
          </tr>
          <tr>
            <td>T.RESFRIAMENTO</td>
            <td>&nbsp; ${tempResfriamento}</td>
          </tr>      
          <tr>
            <td>T. PROT. MOLDE</td>
            <td>&nbsp; ${tempProtMolde}</td>
          </tr>
          <tr>
            <td>T. RECICLO</td>
            <td>&nbsp; ${tempReciclo}</td>
          </tr>
          <tr>
            <td>T. RECUO DE BICO</td>
            <td>&nbsp; ${tempRecuoBico}</td>
          </tr>
          <tr>
            <td>RETARDO DE INJEÇÃO</td>
            <td>&nbsp; ${retarInjecao}</td>
          </tr>
          <tr>
            <td>RETARDO DE CARGA</td>
            <td>&nbsp; ${retardoCarga2}</td>
          </tr>
          <tr>
            <td>SUPERVISÃO DE CICLO</td>
            <td>&nbsp; ${supervisaoCiclo}</td>
          </tr>
          <tr>
            <td>SUPERVISÃO DE CARGA</td>
            <td>&nbsp; ${supervisaoCarga}</td>
          </tr>
          <tr>
            <td>EXTRATOR AVANÇADO</td>
            <td>&nbsp; ${extAvancado}</td>
          </tr>
          <tr>
            <td>SÓ VISUALIZA O CICLO</td>
            <td>&nbsp; ${visualizaCiclo}</td>
          </tr>
          <tr>
            <td>T. DESROSQUEAR</td>
            <td>&nbsp; ${tempDesrosquear}</td>
          </tr>
          <tr>
            <td>T. TIRA MACHO</td>
            <td>&nbsp; ${tempTiraMacho}</td>
          </tr>      
          <tr>
            <td>T. COLOCA MACHO</td>
            <td>&nbsp; ${tempColocaMacho}</td>
          </tr>
          <tr>
            <td>T. DOSAGEM</td>
            <td>&nbsp; ${tempDosagem}</td>
          </tr>
        </table>

        <table style="float: left;width: 33.3%;font-size: small;margin-left: 1px;">
          <tr style="background-color: gray;">
            <th colspan="2">PRESSÃO</th>
          </tr>
          <tr>
            <td>P. INJEÇÃO 1</td>
            <td style="width: 15%;">&nbsp; ${pInjecao1}</td>
          </tr>
          <tr>
            <td>P. INJEÇÃO 2</td>
            <td>&nbsp; ${pInjecao2}</td>
          </tr>
          <tr>
            <td>P. DE RECALQUE</td>
            <td>&nbsp; ${pRecalque}</td>
          </tr>
          <tr>
            <td>DESCOMPRESSÃO</td>
            <td>&nbsp; ${descompressaoPressao}</td>
          </tr>
          <tr>
            <td>P. DE ABERTURA 1</td>
            <td>&nbsp; ${pAbertura1}</td>
          </tr>
          <tr>
            <td>P.DE ABERTURA 2</td>
            <td>&nbsp; ${pAbertura2}</td>
          </tr>
          <tr>
            <td>P. DE FECHAMENTO</td>
            <td>&nbsp; ${pFechamento}</td>
          </tr>
          <tr>
            <td>PROTEÇÃO DE MOLDE</td>
            <td>&nbsp; ${protecaoMolde}</td>
          </tr>
          <tr>
            <td>P. DE TRANCAMENTO</td>
            <td>&nbsp; ${pTrancamento}</td>
          </tr>
          <tr>
            <td>AVANÇA CJ. INJETOR</td>
            <td>&nbsp; ${avancaInjetor}</td>
          </tr>
          <tr>
            <td>RECUA CJ. INJETOR</td>
            <td>&nbsp; ${recuaInjetor}</td>
          </tr>
          <tr>
            <td>AVANÇO EXTR. HIDRÁULICO</td>
            <td>&nbsp; ${avancoExtHidraulico}</td>
          </tr>
          <tr>
            <td>RECUO EXTR. HIDRÁULICO</td>
            <td>&nbsp; ${recuoExtHidraulico}</td>
          </tr>
          <tr>
            <td>RPM DA ROSCA *CARGA*</td>
            <td>&nbsp; ${rpmRoscaCarga}</td>
          </tr>
          <tr>
            <td>P. TIRA MACHO</td>
            <td>&nbsp; ${pTiraMacho}</td>
          </tr>
          <tr>
            <td>P. COLOCA MACHO</td>
            <td>&nbsp; ${pColocaMacho}</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>

        <table style="float: right;width: 33.3%;font-size: small;">
          <tr style="background-color: gray;">
            <th colspan="2">POSIÇÃO</th>
          </tr>
          <tr>
            <td>INÍCIO DA INJEÇÃO</td>
            <td style="width: 15%;">&nbsp; ${inicioInjecao}</td>
          </tr>
          <tr>
            <td>INÍCIO DE RECALQUE</td>
            <td>&nbsp; ${inicioRecalque}</td>
          </tr>
          <tr>
            <td>LIMITE DE CARGA</td>
            <td>&nbsp; ${limiteCarga}</td>
          </tr>
          <tr>
            <td>LIM. DESCOMPRESSÃO</td>
            <td>&nbsp; ${limDescompressao}</td>
          </tr>
          <tr>
            <td>INÍCIO ABERTURA 2</td>
            <td>&nbsp; ${inicioAbertura2}</td>
          </tr>
          <tr>
            <td>INÍCIO ABERTURA 3</td>
            <td>&nbsp; ${inicioAbertura3}</td>
          </tr>
          <tr>
            <td>LIMITE DE ABERTURA</td>
            <td>&nbsp; ${limiteAbertura}</td>
          </tr>
          <tr>
            <td>INÍCIO PROT. MOLDE</td>
            <td>&nbsp; ${inicProtMolde}</td>
          </tr>
          <tr>
            <td>INÍCIO TRAVAMENTO</td>
            <td>&nbsp; ${iniciotravamento}</td>
          </tr>
          <tr>
            <td>POSIÇÃO PARA EXTRAIR</td>
            <td>&nbsp; ${posExtrair}</td>
          </tr>
          <tr>
            <td>INÍCIO DESROSQUEAR</td>
            <td>&nbsp; ${inicioDesrosquear}</td>
          </tr>
          <tr>
            <td>INÍCIO TIRA MACHO</td>
            <td>&nbsp; ${inicioTiraMacho}</td>
          </tr>
          <tr>
            <td>INÍCIO COLOCA MACHO</td>
            <td>&nbsp; ${inicioColocaMacho}</td>
          </tr>
          <tr>
            <td>LIMITE EXTRAÇÃO 1</td>
            <td>&nbsp; ${limExtracao1}</td>
          </tr>
          <tr>
            <td>LIMITE EXTRAÇÃO 2</td>
            <td>&nbsp; ${limExtracao2}</td>
          </tr>
          <tr>
            <td>LIMITE RETORNO EXTR.</td>
            <td>&nbsp; ${limRetornoExtr}</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>


        <table style="clear: both;width: 33.3%;float: left;font-size: small;">
          <tr style="background-color: gray;">
            <th colspan="2">CONTADORES</th>
          </tr>
          <tr>
            <td>QUANT. DE EXTRAÇÃO</td>
            <td style="width: 15%;">&nbsp; ${quantExtracao}</td>
          </tr>
          <tr>
            <td>CICLO P/ LUBRIFICAR</td>
            <td>&nbsp; ${cicloLubrificar}</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>

        <table style="width: 33.3%;float: left;font-size: small;margin-left: 1px;">
          <tr style="background-color: gray;">
            <th colspan="2">VAZÃO</th>
          </tr>
          <tr>
            <td>V. DE INJEÇÃO 1</td>
            <td style="width: 15%;">&nbsp; ${vInjecao1}</td>
          </tr>
          <tr>
            <td>V. DE INJEÇÃO 2</td>
            <td>&nbsp; ${vInjecao2}</td>
          </tr>
          <tr>
            <td>V. RECALQUE</td>
            <td>&nbsp; ${vRecalque}</td>
          </tr>
          <tr>
            <td>V. DESCOMPRESSÃO</td>
            <td>&nbsp; ${vDescompressao}</td>
          </tr>
          <tr>
            <td>V. DE ABERTURA 1</td>
            <td>&nbsp; ${vAbertura1}</td>
          </tr>
          <tr>
            <td>V. DE ABERTURA 2</td>
            <td>&nbsp; ${vAbertura2}</td>
          </tr>
          <tr>
            <td>V. DE FECHAMENTO</td>
            <td>&nbsp; ${vFechamento}</td>
          </tr>
          <tr>
            <td>V. PROT. MOLDE</td>
            <td>&nbsp; ${vProtMolde}</td>
          </tr>
          <tr>
            <td>V. DE TRANCAMENTO</td>
            <td>&nbsp; ${vTrancamento}</td>
          </tr>
          <tr>
            <td>AVANÇA CJ. INJETOR</td>
            <td>&nbsp; ${avancaInjetorVazao}</td>
          </tr>
          <tr>
            <td>RECUA CJ. INJETOR</td>
            <td>&nbsp; ${recuaInjetorvazao}</td>
          </tr>
          <tr>
            <td>AVANÇO EXTR. HIDRÁULICO</td>
            <td>&nbsp; ${avancoExtHidraulicoVazao}</td>
          </tr>
          <tr>
            <td>RECUO EXTR. HIDRÁULICO</td>
            <td>&nbsp; ${recuoExtHidraulicoVazao}</td>
          </tr>
          <tr>
            <td>RPM ROSCA *CARGA*</td>
            <td>&nbsp; ${rpmRoscaCargaVazao}</td>
          </tr>
          <tr>
            <td>V. TIRA MACHO</td>
            <td>&nbsp; ${pTiraMachoVazao}</td>
          </tr>
          <tr>
            <td>V. COLOCA MACHO</td>
            <td>&nbsp; ${pColocaMachoVazao}</td>
          </tr>
        </table>

        <table style="float: right;width: 33.3%;font-size: small;">
          <tr style="background-color: gray;">
            <th colspan="2">SELETORAS</th>
          </tr>
          <tr>
            <td>AQUECIMENTO</td>
            <td style="width: 15%;">&nbsp; ${aquecimento}</td>
          </tr>
          <tr>
            <td>PEÇAS PRODUZIDAS</td>
            <td>&nbsp; ${pecasProduzidas}</td>
          </tr>
          <tr>
            <td>PROD. PROGRAMADA</td>
            <td>&nbsp; ${prodProgramada}</td>
          </tr>
          <tr>
            <td>PRÉ-CARGA *INTRUSÃO*</td>
            <td>&nbsp; ${preCargaIntrusao}</td>
          </tr>
          <tr>
            <td>LIGA RECUO DE BICO</td>
            <td>&nbsp; ${ligaRecuoBico}</td>
          </tr>
          <tr>
            <td>LIGA TROCA DE MOLDE</td>
            <td>&nbsp; ${ligaTrocaMolde}</td>
          </tr>
          <tr>
            <td>EXTR. HIDRÁUL. CENTRAL</td>
            <td>&nbsp; ${extrHidrCentral}</td>
          </tr>
          <tr>
            <td>DESCOMPRESSÃO</td>
            <td>&nbsp; ${descompressaoSeletoras}</td>
          </tr>
          <tr>
            <td>SELECIONA SEMI/AUTO</td>
            <td>&nbsp; ${selecionaSemiAuto}</td>
          </tr>
          <tr>
            <td>LIGA DESROSQUEADOR</td>
            <td>&nbsp; ${ligaDesrosqueador}</td>
          </tr>
          <tr>
            <td>SELECIONA MACHO</td>
            <td>&nbsp; ${selecionaMacho}</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>

        <table style="width: 100%;font-size: small;clear: both;">
          <tr style="background-color: gray;">
            <th colspan="5">TEMPERTAURAS</th>
          </tr>
          <tr style="background-color: gray;">
            <th>BICO</th>
            <th>ZONA 1</th>
            <th>ZONA 2</th>
            <th>ZONA 3</th>
            <th>ZONA 4</th>
          </tr>
          <tr>
            <td>&nbsp; ${bico2}</td>
            <td>&nbsp; ${zona12}</td>
            <td>&nbsp; ${zona22}</td>
            <td>&nbsp; ${zona32}</td>
            <td>&nbsp; ${zona42}</td>
          </tr>
        </table>

        <table style="width: 100%;font-size: small;">
          <tr style="background-color: gray;">
            <th colspan="2">CARACTERÍSTICAS DE INSPEÇÃO</th>
          </tr>

          <tr>
            <td>VISUAL: A peça deve estar livre de rechupes, deformações, sujeiras, rebarbas, manchas.</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>DIMENSIONAL: ${dimensional}</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>

        </table>
      </div>  
    </body>
    </html>
 
    `;

  //Função criar Pdf
  const createPDF_File = async () => {
    let options = {
      // conteudo HTML
      html: html2,
      // Setting UP File Name for PDF File.
      fileName: `${nome2.replace(/ /g, '')}_maq_2`,

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
        <Text style={styles.textMaq}>MÁQ. 2</Text>
        <FormDescricao2
          nome2={nome2}
          setNome2={setNome2}
          codigo2={codigo2}
          setCodigo2={setCodigo2}
          numMolde2={numMolde2}
          setNumMolde2={setNumMolde2}
          quantCav2={quantCav2}
          setQuantCav2={setQuantCav2}
          tipo2={tipo2}
          setTipo2={setTipo2}
          refrigeracao2={refrigeracao2}
          setRefrigeracao2={setRefrigeracao2}
          maxAbertura2={maxAbertura2}
          setMaxAbertura2={setMaxAbertura2}
          materiaPrima2={materiaPrima2}
          setMateriaPrima2={setMateriaPrima2}
          alturaMolde2={alturaMolde2}
          setAlturaMolde2={setAlturaMolde2}
          aberturaMaq2={aberturaMaq2}
          setAberturaMaq2={setAberturaMaq2}
          extracao2={extracao2}
          setExtracao2={setExtracao2}
          cicloTotal2={cicloTotal2}
          setCicloTotal2={setCicloTotal2}
        />
        <FormTempo2
          tempInjecao={tempInjecao}
          setTempInjecao={setTempInjecao}
          tempRecalque={tempRecalque}
          setTempRecalque={setTempRecalque}
          preCargaIntrucao={preCargaIntrucao}
          setPreCargaIntrucao={setPreCargaIntrucao}
          tempResfriamento={tempResfriamento}
          setTempResfriamento={setTempResfriamento}
          tempProtMolde={tempProtMolde}
          setTempProtMolde={setTempProtMolde}
          tempReciclo={tempReciclo}
          setTempReciclo={setTempReciclo}
          tempRecuoBico={tempRecuoBico}
          setTempRecuoBico={setTempRecuoBico}
          retarInjecao={retarInjecao}
          setRetarInjecao={setRetarInjecao}
          retardoCarga2={retardoCarga2}
          setRetardoCarga2={setRetardoCarga2}
          supervisaoCiclo={supervisaoCiclo}
          setSupervisaoCiclo={setSupervisaoCiclo}
          supervisaoCarga={supervisaoCarga}
          setSupervisaoCarga={setSupervisaoCarga}
          extAvancado={extAvancado}
          setExtAvancado={setExtAvancado}
          visualizaCiclo={visualizaCiclo}
          setVisualizaCiclo={setVisualizaCiclo}
          tempDesrosquear={tempDesrosquear}
          setTempDesrosquear={setTempDesrosquear}
          tempTiraMacho={tempTiraMacho}
          setTempTiraMacho={setTempTiraMacho}
          tempColocaMacho={tempColocaMacho}
          setTempColocaMacho={setTempColocaMacho}
          tempDosagem={tempDosagem}
          setTempDosagem={setTempDosagem}
        />
        <FormPressao2
          pInjecao1={pInjecao1}
          setPInjecao1={setPInjecao1}
          pInjecao2={pInjecao2}
          setPInjecao2={setPInjecao2}
          pRecalque={pRecalque}
          setPRecalque={setPRecalque}
          descompressaoPressao={descompressaoPressao}
          setDescompressaoPressao={setDescompressaoPressao}
          pAbertura1={pAbertura1}
          setPAbertura1={setPAbertura1}
          pAbertura2={pAbertura2}
          setPAbertura2={setPAbertura2}
          pFechamento={pFechamento}
          setPFechamento={setPFechamento}
          protecaoMolde={protecaoMolde}
          setProtecaoMolde={setProtecaoMolde}
          pTrancamento={pTrancamento}
          setPTrancamento={setPTrancamento}
          avancaInjetor={avancaInjetor}
          setAvancaInjetor={setAvancaInjetor}
          recuaInjetor={recuaInjetor}
          setRecuaInjetor={setRecuaInjetor}
          avancoExtHidraulico={avancoExtHidraulico}
          setAvancoExtHidraulico={setAvancoExtHidraulico}
          recuoExtHidraulico={recuoExtHidraulico}
          setRecuoExtHidraulico={setRecuoExtHidraulico}
          rpmRoscaCarga={rpmRoscaCarga}
          setRpmRoscaCarga={setRpmRoscaCarga}
          pTiraMacho={pTiraMacho}
          setPTiraMacho={setPTiraMacho}
          pColocaMacho={pColocaMacho}
          setPColocaMacho={setPColocaMacho}
        />
        <FormPosicao2
          inicioInjecao={inicioInjecao}
          setInicioInjecao={setInicioInjecao}
          inicioRecalque={inicioRecalque}
          setInicioRecalque={setInicioRecalque}
          limiteCarga={limiteCarga}
          setLimiteCarga={setLimiteCarga}
          limDescompressao={limDescompressao}
          setLimDescompressao={setLimDescompressao}
          inicioAbertura2={inicioAbertura2}
          setInicioAbertura2={setInicioAbertura2}
          inicioAbertura3={inicioAbertura3}
          setInicioAbertura3={setInicioAbertura3}
          limiteAbertura={limiteAbertura}
          setLimiteAbertura={setLimiteAbertura}
          inicProtMolde={inicProtMolde}
          setInicProtMolde={setInicProtMolde}
          iniciotravamento={iniciotravamento}
          setIniciotravamento={setIniciotravamento}
          posExtrair={posExtrair}
          setPosExtrair={setPosExtrair}
          inicioDesrosquear={inicioDesrosquear}
          setInicioDesrosquear={setInicioDesrosquear}
          inicioTiraMacho={inicioTiraMacho}
          setInicioTiraMacho={setInicioTiraMacho}
          inicioColocaMacho={inicioColocaMacho}
          setInicioColocaMacho={setInicioColocaMacho}
          limExtracao1={limExtracao1}
          setLimExtracao1={setLimExtracao1}
          limExtracao2={limExtracao2}
          setLimExtracao2={setLimExtracao2}
          limRetornoExtr={limRetornoExtr}
          setlimRetornoExtr={setlimRetornoExtr}
        />
        <FormContadores2
          quantExtracao={quantExtracao}
          setQuantExtracao={setQuantExtracao}
          cicloLubrificar={cicloLubrificar}
          setCicloLubrificar={setCicloLubrificar}
        />
        <FormVazao2
          vInjecao1={vInjecao1}
          setVInjecao1={setVInjecao1}
          vInjecao2={vInjecao2}
          setVInjecao2={setVInjecao2}
          vRecalque={vRecalque}
          setVRecalque={setVRecalque}
          vDescompressao={vDescompressao}
          setVDescompressao={setVDescompressao}
          vAbertura1={vAbertura1}
          setVAbertura1={setVAbertura1}
          vAbertura2={vAbertura2}
          setVAbertura2={setVAbertura2}
          vFechamento={vFechamento}
          setVFechamento={setVFechamento}
          vProtMolde={vProtMolde}
          setVProtMolde={setVProtMolde}
          vTrancamento={vTrancamento}
          setVTrancamento={setVTrancamento}
          avancaInjetorVazao={avancaInjetorVazao}
          setAvancaInjetorVazao={setAvancaInjetorVazao}
          recuaInjetorvazao={recuaInjetorvazao}
          setRecuaInjetorvazao={setRecuaInjetorvazao}
          avancoExtHidraulicoVazao={avancoExtHidraulicoVazao}
          setAvancoExtHidraulicoVazao={setAvancoExtHidraulicoVazao}
          recuoExtHidraulicoVazao={recuoExtHidraulicoVazao}
          setRecuoExtHidraulicoVazao={setRecuoExtHidraulicoVazao}
          rpmRoscaCargaVazao={rpmRoscaCargaVazao}
          setRpmRoscaCargaVazao={setRpmRoscaCargaVazao}
          pTiraMachoVazao={pTiraMachoVazao}
          setPTiraMachoVazao={setPTiraMachoVazao}
          pColocaMachoVazao={pColocaMachoVazao}
          setPColocaMachoVazao={setPColocaMachoVazao}
        />
        <FormSeletoras2
          aquecimento={aquecimento}
          setAquecimento={setAquecimento}
          pecasProduzidas={pecasProduzidas}
          setPecasProduzidas={setPecasProduzidas}
          prodProgramada={prodProgramada}
          setProdProgramada={setProdProgramada}
          preCargaIntrusao={preCargaIntrusao}
          setPreCargaIntrusao={setPreCargaIntrusao}
          ligaRecuoBico={ligaRecuoBico}
          setLigaRecuoBico={setLigaRecuoBico}
          ligaTrocaMolde={ligaTrocaMolde}
          setLigaTrocaMolde={setLigaTrocaMolde}
          extrHidrCentral={extrHidrCentral}
          setExtrHidrCentral={setExtrHidrCentral}
          descompressaoSeletoras={descompressaoSeletoras}
          setDescompressaoSeletoras={setDescompressaoSeletoras}
          selecionaSemiAuto={selecionaSemiAuto}
          setSelecionaSemiAuto={setSelecionaSemiAuto}
          ligaDesrosqueador={ligaDesrosqueador}
          setLigaDesrosqueador={setLigaDesrosqueador}
          selecionaMacho={selecionaMacho}
          setSelecionaMacho={setSelecionaMacho}
        />
        <FormTemperaturas2
          bico2={bico2}
          setBico2={setBico2}
          zona12={zona12}
          setZona12={setZona12}
          zona22={zona22}
          setZona22={setZona22}
          zona32={zona32}
          setZona32={setZona32}
          zona42={zona42}
          setZona42={setZona42}
        />

        <FormCaracInspecao2
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
    paddingTop: 20,
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

export default FichaTecnica2;
