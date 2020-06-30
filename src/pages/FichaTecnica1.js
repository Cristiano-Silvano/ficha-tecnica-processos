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

import FormDescricao from '../componentes/maq1/FormDescricao';
import FormCaracInspecao from '../componentes/maq1/FormCaracInspecao';
import FormAbertura1 from '../componentes/maq1/FormAbertura1';
import FormFechamento1 from '../componentes/maq1/FormFechamento1';
import FormTemperaturas1 from '../componentes/maq1/FormTemperaturas1';
import FormMenuInjecao1 from '../componentes/maq1/FormMenuInjecao';
import FormRecalque1 from '../componentes/maq1/FormRecalque1';
import FormDosagem1 from '../componentes/maq1/FormDosagem1';
import FormDescompressao1 from '../componentes/maq1/FormDescompressao1';
import FormExtrHidraulico1 from '../componentes/maq1/FormExtrHidraulico1';

const FichaTecnica1 = () => {
  //descrição peça/molde
  const [filePath, setFilePath] = useState('');
  const [nome1, setNome1] = useState('');
  const [codigo1, setCodigo1] = useState(0);
  const [numMolde1, setNumMolde1] = useState(0);
  const [quantCav1, setQuantCav1] = useState(0);
  const [tipo1, setTipo1] = useState('Direto');
  const [refrigeracao1, setRefrigeracao1] = useState('');
  const [maxAbertura1, setMaxAbertura1] = useState(0);
  const [materiaPrima1, setMateriaPrima1] = useState('');
  const [alturaMolde1, setAlturaMolde1] = useState(0);
  const [aberturaMaq1, setAberturaMaq1] = useState(0);
  const [extracao1, setExtracao1] = useState(0);
  const [cicloTotal1, setCicloTotal1] = useState('');
  //abertura
  const [pAbertura, setPAbertura] = useState(0);
  const [pDestravamento, setPDestravamento] = useState(0);
  const [pExtrHidCurso, setPExtrHidCurso] = useState(0);
  const [vAbertura1, setVAbertura1] = useState(0);
  const [vAbertura2, setVAbertura2] = useState(0);
  const [vAbertura3, setVAbertura3] = useState(0);
  const [vAbertura4, setVAbertura4] = useState(0);
  const [vDestravamento, setVDestravamento] = useState(0);
  const [vExtrHidCurso, setVExtrHidCurso] = useState(0);
  const [cAbertura1, setCAbertura1] = useState(0);
  const [cAbertura2, setCAbertura2] = useState(0);
  const [cAbertura3, setCAbertura3] = useState(0);
  const [cAbertura4, setCAbertura4] = useState(0);
  const [cDestravamento, setCDestravamento] = useState(0);
  const [cExtrHidCurso, setCExtrHidCurso] = useState(0);
  const [tAbertura, setTAbertura] = useState(0);
  const [tDestravamento, setTDestravamento] = useState(0);
  const [tExtrHidCurso, setTExtrHidCurso] = useState(0);
  //fechamento
  const [pFechamento, setPFechamento] = useState(0);
  const [pSegMolde, setPSegMolde] = useState(0);
  const [pTravamento, setPTravamento] = useState(0);
  const [vFechamento1, setVFechamento1] = useState(0);
  const [vFechamento2, setVFechamento2] = useState(0);
  const [vFechamento3, setVFechamento3] = useState(0);
  const [vFechamento4, setVFechamento4] = useState(0);
  const [vSegMolde, setVSegMolde] = useState(0);
  const [vTravamento, setVTravamento] = useState(0);
  const [cFechamento1, setCFechamento1] = useState(0);
  const [cFechamento2, setCFechamento2] = useState(0);
  const [cFechamento3, setCFechamento3] = useState(0);
  const [cFechamento4, setCFechamento4] = useState(0);
  const [cSegMolde, setCSegMolde] = useState(0);
  const [cTravamento, setCTravamento] = useState(0);
  const [tFechamento, setTFechamento] = useState(0);
  const [tSegMolde, setTSegMolde] = useState(0);
  const [tTravamento, setTTravamento] = useState(0);
  //menu de injeção
  const [pProcInjecao, setPProcInjecao] = useState(0);
  const [vProcInjecao, setVProcInjecao] = useState(0);
  const [cComutacao, setCComutacao] = useState(0);
  const [tComutacao, setTComutacao] = useState(0);
  const [pAvancoCJ, setPAvancoCJ] = useState(0);
  const [pRetornoCJ, setPRetornoCJ] = useState(0);
  const [pRetornoCJ2, setPRetornoCJ2] = useState(0);
  const [vRetorno, setVRetorno] = useState(0);
  const [tempoRecuo, setTempoRecuo] = useState(0);
  //recalque
  const [tRecalque, setTRecalque] = useState(0);
  const [pRecalque, setPRecalque] = useState(0);
  const [vRecalque, setVRecalque] = useState(0);
  //dosagem
  const [cPDosagem, setCPDosagem] = useState(0);
  const [vDosagem, setVDosagem] = useState(0);
  const [cDosagem, setCDosagem] = useState(0);
  //descompressão
  const [pDescompressao, setPDescompressao] = useState(0);
  const [vDescompressao, setVDescompressao] = useState(0);
  const [cDescompressao, setCDescompressao] = useState(0);
  const [rDosagem, setRDosagem] = useState(0);
  //temperaturas
  const [bico1, setBico1] = useState(0);
  const [zona11, setZona11] = useState(0);
  const [zona21, setZona21] = useState(0);
  const [zona31, setZona31] = useState(0);
  const [zona41, setZona41] = useState(0);
  //extrator hidráulico
  const [pRetorno, setPRetorno] = useState(0);
  const [tRetorno, setTRetorno] = useState(0);
  const [pAvanco, setPAvanco] = useState(0);
  const [tAvanco, setTAvanco] = useState(0);
  const [tipoExtrator, setTipoExtrator] = useState('');
  //características inspeção
  const [visual1, setVisual1] = useState(
    'A peça deve estar livre de rechupes, deformações, sujeiras, rebarbas, manchas',
  );
  const [dimensional1, setDimensional1] = useState('');

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

    setNome1('');
    setCodigo1(0);
    setNumMolde1(0);
    setQuantCav1(0);
    setTipo1('');
    setRefrigeracao1('');
    setMaxAbertura1(0);
    setMateriaPrima1('');
    setAlturaMolde1(0);
    setAberturaMaq1(0);
    setExtracao1(0);
    setCicloTotal1(0);

    setPAbertura(0);
    setPDestravamento(0);
    setPExtrHidCurso(0);
    setVAbertura1(0);
    setVAbertura2(0);
    setVAbertura3(0);
    setVAbertura4(0);
    setVDestravamento(0);
    setVExtrHidCurso(0);
    setCAbertura1(0);
    setCAbertura2(0);
    setCAbertura3(0);
    setCAbertura4(0);
    setCDestravamento(0);
    setCExtrHidCurso(0);
    setTAbertura(0);
    setTDestravamento(0);
    setTExtrHidCurso(0);

    setPFechamento(0);
    setPSegMolde(0);
    setPTravamento(0);
    setVFechamento1(0);
    setVFechamento2(0);
    setVFechamento3(0);
    setVFechamento4(0);
    setVSegMolde(0);
    setVTravamento(0);
    setCFechamento1(0);
    setCFechamento2(0);
    setCFechamento3(0);
    setCFechamento4(0);
    setCSegMolde(0);
    setCTravamento(0);
    setTFechamento(0);
    setTSegMolde(0);
    setTTravamento(0);

    setPProcInjecao(0);
    setVProcInjecao(0);
    setCComutacao(0);
    setTComutacao(0);
    setPAvancoCJ(0);
    setPRetornoCJ(0);
    setPRetornoCJ2(0);
    setVRetorno(0);
    setTempoRecuo(0);

    setTRecalque(0);
    setPRecalque(0);
    setVRecalque(0);

    setCPDosagem(0);
    setVDosagem(0);
    setCDosagem(0);

    setPDescompressao(0);
    setVDescompressao(0);
    setCDescompressao(0);
    setRDosagem(0);

    setBico1(0);
    setZona11(0);
    setZona21(0);
    setZona31(0);
    setZona41(0);

    setPRetorno(0);
    setTRetorno(0);
    setPAvanco(0);
    setTAvanco(0);
    setTipoExtrator('');

    setDimensional1('');
  };

  const html = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ficha Técnica de Processo Máq.1</title>

      <style>
        * {
          margin: 0px;
          padding: 0px;
          box-sizing: border-box;
        }
        .titulo {
          text-align: center;
          background-color: gray;
        }
        div, p {
          border: 0.2px solid black;
          border-collapse: collapse;
        };
      </style>
    </head>
    <body>
      <div>
        <div>
          <h3 style="text-align: center;">FICHA TÉCNICA DE PROCESSO - MÁQ. 1</h3>
        </div>

        <div>
          <p>NOME DA PEÇA: ${nome1}</p>
          <p>CÓDIGO: ${codigo1}</p>
          <p>Nº DO MOLDE: ${numMolde1}</p>
          <p>QUANTIDADE DE CAVIDADES: ${quantCav1}</p>
          <p>TIPO DE BICO: ${tipo1}</p>
          <p>REFRIGERAÇÃO: ${refrigeracao1}</p>
          <p>LIMITE MAX. DE ABERTURA DA MAQUINA: ${aberturaMaq1}</p>
          <p>MATÉRIA PRIMA: ${materiaPrima1}</p>
          <p>ALTURA DO MOLDE: ${alturaMolde1}</p>
          <p>ABERTURA DA MÁQUINA: ${aberturaMaq1}</p>
          <p>EXTRAÇÃO: ${extracao1}</p>
          <p>CICLO TOTAL: ${cicloTotal1}</p>
        </div>
        
        <div>
          <p class="titulo"> ABERTURA</p>
          <div style="display: flex; flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 1;">
              <div style="flex: 1;"><p>&nbsp;</p></div>
              <div style="flex: 1;"><p class="titulo">PRESSÃO</p></div>
              <div style="flex: 1;"><p class="titulo">VELOCIDADE</p></div>
              <div style="flex: 1;"><p class="titulo">CURSO</p></div>
              <div style="flex: 1;"><p class="titulo">T. RESFRIAMENTO</p></div>
            </div>
            <div style="flex: 2;">
              <p class="titulo">ABERTURA</p>
                <div>
                  <div style="flex: 1;"><p>&nbsp; ${pAbertura}</p></div>
                </div>
                <div style="flex-direction: row;display: flex;justify-content: space-between;">
                  <div style="flex: 1;"><p>&nbsp; ${vAbertura1}</p></div>
                  <div style="flex: 1;"><p>&nbsp; ${vAbertura2}</p></div>
                  <div style="flex: 1;"><p>&nbsp; ${vAbertura3}</p></div>
                  <div style="flex: 1;"><p>&nbsp; ${vAbertura4}</p></div>
                </div>
                <div style="flex-direction: row;display: flex;justify-content: space-between;">
                  <div style="flex: 1;"><p>&nbsp; ${cAbertura1}</p></div>
                  <div style="flex: 1;"><p>&nbsp; ${cAbertura2}</p></div>
                  <div style="flex: 1;"><p>&nbsp; ${cAbertura3}</p></div>
                  <div style="flex: 1;"><p>&nbsp; ${cAbertura4}</p></div>
                </div>
                <div>
                  <div style="flex: 1;"><p>&nbsp; ${tAbertura}</p></div>
                </div>
            </div>
            <div style="flex: 1;">         
              <div style="flex: 1;"><p class="titulo">DESTRAVAMENTO</p></div>
              <div style="flex: 1;"><p>&nbsp; ${pDestravamento}</</p></div>
              <div style="flex: 1;"><p>&nbsp; ${vDestravamento}</</p></div>
              <div style="flex: 1;"><p>&nbsp; ${cDestravamento}</</p></div>
              <div style="flex: 1;"><p>&nbsp; ${tDestravamento}</</p></div>
            </div>
            <div style="flex: 1;">
              <div style="flex: 1;"><p class="titulo">EXTR. HID./CURSO</p></div>
              <div style="flex: 1;"><p>&nbsp; ${pExtrHidCurso}</</p></div>
              <div style="flex: 1;"><p>&nbsp; ${vExtrHidCurso}</</p></div>
              <div style="flex: 1;"><p>&nbsp; ${cExtrHidCurso}</</p></div>
              <div style="flex: 1;"><p>&nbsp; ${tExtrHidCurso}</</p></div>
            </div>
          </div>
        </div>   

        <div>
          <p class="titulo"> FECHAMENTO</p>
          <div style="display: flex; flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 1;">
              <div style="flex: 1;"><p>&nbsp;</p></div>
              <div style="flex: 1;"><p class="titulo">PRESSÃO</p></div>
              <div style="flex: 1;"><p class="titulo">VELOCIDADE</p></div>
              <div style="flex: 1;"><p class="titulo">CURSO</p></div>
              <div style="flex: 1;"><p class="titulo">TEMPO</p></div>
            </div>
            <div style="flex: 2;">
              <p class="titulo">FECHAMENTO</p>
                <div>
                  <p>&nbsp; ${pFechamento}</</p>
                </div>
                <div style="flex-direction: row;display: flex;justify-content: space-between;">
                  <div style="flex: 1;"><p>&nbsp; ${vFechamento1}</</p></div>
                  <div style="flex: 1;"><p>&nbsp; ${vFechamento2}</</p></div>
                  <div style="flex: 1;"><p>&nbsp; ${vFechamento3}</</p></div>
                  <div style="flex: 1;"><p>&nbsp; ${vFechamento4}</</p></div>
                </div>
                <div style="flex-direction: row;display: flex;justify-content: space-between;">
                  <div style="flex: 1;"><p>&nbsp; ${cFechamento1}</</p></div>
                  <div style="flex: 1;"><p>&nbsp; ${cFechamento2}</</p></div>
                  <div style="flex: 1;"><p>&nbsp; ${cFechamento3}</</p></div>
                  <div style="flex: 1;"><p>&nbsp; ${cFechamento4}</</p></div>
                </div>
                <div>
                  <p>&nbsp; ${tFechamento}</p>
                </div>
            </div>

            <div style="flex: 1;">
              <div style="flex: 1;"><p class="titulo">SEG. MOLDE</p></div>
              <div style="flex: 1;"><p>&nbsp; ${pSegMolde}</p></div>
              <div style="flex: 1;"><p>&nbsp; ${vSegMolde}</p></div>
              <div style="flex: 1;"><p>&nbsp; ${cSegMolde}</p></div>
              <div style="flex: 1;"><p>&nbsp; ${tSegMolde}</p></div>
            </div>
            <div style="flex: 1;">
              <div style="flex: 1;"><p class="titulo">TRAVAMENTO</p></div>
              <div style="flex: 1;"><p>&nbsp; ${pTravamento}</p></div>
              <div style="flex: 1;"><p>&nbsp; ${vTravamento}</p></div>
              <div style="flex: 1;"><p>&nbsp; ${cTravamento}</p></div>
              <div style="flex: 1;"><p>&nbsp; ${tTravamento}</p></div>
            </div>
          </div>
        </div>

        <div>
          <p class="titulo"> MENU INJEÇÃO</p>
          <div style="display: flex; flex-direction: row; align-items: center;">
            <div style="flex: 1;">
              <p class="titulo">OPÇÃO 1 - PROC. DE INJEÇÃO</p>
            </div>
            <div style="flex: 1;">
              <p class="titulo">OPÇÃO 3 - CONJUNTO INJETOR</p>
            </div> 
          </div>
          <div style="display: flex; flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 1;">
              <p class="titulo">PRESSSÃO</p>
              <p class="titulo">VELOCIDADE</p>
            </div>
            <div style="flex: 2;">
              <div>
                <p>&nbsp; ${pProcInjecao}</p>
                <p>&nbsp; ${vProcInjecao}</p>
              </div>
            </div>
            <div style="flex: 1;">
              <p class="titulo">P. AVANÇO</p>
              <p>&nbsp;  ${pAvancoCJ}</p>
            </div>
            <div style="flex: 1;">
              <p class="titulo">P. RETORNO</p>
              <p>&nbsp; ${pRetornoCJ}</p>
            </div>
          </div>
          <div style="display: flex; flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 3;">
              <div>
                <p class="titulo">OPÇÃO 5 - COMUTAÇÃO</p>
              </div>
            </div>
            <div style="flex: 1;">
              <p class="titulo">P. RETORNO</p>
            </div>
            <div style="flex: 1;">
              <p class="titulo">VEL. RETORNO</p>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; align-items: center;justify-content: space-between;">
          <div style="flex: 1;">
            <p class="titulo">CURSO</p>
            <p class="titulo">TEMPO</p>
          </div>
          <div style="flex: 2;">
            <div>
              <p>&nbsp; ${cComutacao}</p>
              <p>&nbsp; ${tComutacao}</p>
            </div>
          </div>
          <div style="flex: 1;">
            <p>&nbsp; ${pRetornoCJ2}</p>
            <p class="titulo">TEMPO DE RECUO</p>
          </div>
          <div style="flex: 1;">
            <p>&nbsp; ${vRetorno}</p>
            <p>&nbsp; ${tempoRecuo}</p>
          </div>
        </div>

        <div>
          <p class="titulo">RECALQUE</p>
          <div style="display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 1;"><p class="titulo">TEMPO</p></div>
            <div style="flex: 1;"><p class="titulo">PRESSÃO</p></div>
            <div style="flex: 1;"><p class="titulo">VELOCIDADE</p></div>
          </div>
          <div style="display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 1;"><p>&nbsp; ${tRecalque}</p></div>
            <div style="flex: 1;"><p>&nbsp; ${pRecalque}</p></div>
            <div style="flex: 1;"><p>&nbsp; ${vRecalque}</p></div>
          </div>
        </div>

        <div>
          <p class="titulo">DOSAGEM</p>
          <div style="display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 1;"><p class="titulo">CONTRA PRESSÃO</p></div>
            <div style="flex: 1;"><p class="titulo">VELOCIDADE</p></div>
            <div style="flex: 1;"><p class="titulo">CURSO</p></div>
          </div>
          <div style="display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 1;"><p>&nbsp; ${cPDosagem}</p></div>
            <div style="flex: 1;"><p>&nbsp; ${vDosagem}</p></div>
            <div style="flex: 1;"><p>&nbsp; ${cDosagem}</p></div>
          </div>
        </div>

        <div>
          <p class="titulo">DESCOMPRESSÃO</p>
          <div style="display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 1;"><p class="titulo">PRESSÃO</p></div>
            <div style="flex: 1;"><p class="titulo">VELOCIDADE</p></div>
            <div style="flex: 1;"><p class="titulo">CURSO</p></div>
          </div>
          <div style="display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 1;"><p>&nbsp; ${pDescompressao}</p></div>
            <div style="flex: 1;"><p>&nbsp; ${vDescompressao}</p></div>
            <div style="flex: 1;"><p>&nbsp; ${cDescompressao}</p></div>
          </div>
          <div style="display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 1;"><p class="titulo">RETARDO DE DOSAGEM</p></div>
            <div style="flex: 1;"><p>&nbsp;</p> ${rDosagem}</div>
            <div style="flex: 1;"><p></p></div>
          </div>
        </div>

        <div>
          <p class="titulo">TEMPERATURAS - OPÇÃO 3 - AJUSTE MANUAL</p>
          <div style="display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 1;"><p class="titulo">ZONA 1 - BICO</p></div>
            <div style="flex: 1;"><p class="titulo">ZONA 2</p></div>
            <div style="flex: 1;"><p class="titulo">ZONA 3</p></div>
            <div style="flex: 1;"><p class="titulo">ZONA 4</p></div>
            <div style="flex: 1;"><p class="titulo">ZONA 5</p></div>
          </div>
          <div style="display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
            <div style="flex: 1;"><p>&nbsp; ${bico1}</p></div>
            <div style="flex: 1;"><p>&nbsp; ${zona11}</p></div>
            <div style="flex: 1;"><p>&nbsp; ${zona21}</p></div>
            <div style="flex: 1;"><p>&nbsp; ${zona31}</p></div>
            <div style="flex: 1;"><p>&nbsp; ${zona41}</p></div>
          </div>
        </div>

        <div>
          <p class="titulo">EXTRATOR HIDRÁULICO</p>
          <div style="display: flex; flex-direction: row;">
            <div style="display: flex;flex: 1;">
              <div style="flex: 1;flex-direction: column; align-items: center;justify-content: space-between;">
                <div style="flex: 1;"><p>&nbsp;</p></div>
                <div style="flex: 1;"><p class="titulo">PRESSÃO</p></div>
                <div style="flex: 1;"><p class="titulo">TEMPO</p></div>
              </div>
              <div style="flex: 1;flex-direction: column; align-items: center;justify-content: space-between;">
                <div style="flex: 1;"><p class="titulo">RETORNO</p></div>
                <div style="flex: 1;"><p>&nbsp; ${pRetorno}</p></div>
                <div style="flex: 1;"><p>&nbsp; ${tRetorno}</p></div>
              </div>
              <div style="flex: 1;flex-direction: column; align-items: center;justify-content: space-between;">
                <div style="flex: 1;"><p class="titulo">AVANÇO</p></div>
                <div style="flex: 1;"><p>&nbsp; ${pAvanco}</p></div>
                <div style="flex: 1;"><p>&nbsp; ${tAvanco}</p></div>
              </div>
            </div>
            <div style="display: flex;flex: 1;align-items: center;justify-content: center;">
              <p style="text-align: center;border: none;">OBS.:  ${tipoExtrator}</p>
            </div>
          </div>
        </div>

        <div>
          <p class="titulo">CARACTERÍSTICAS DE INSPEÇÃO</p>
          <p>VISUAL: A peça deve estar livre de rechupes, deformações, sujeiras, rebarbas, manchas.</p>
          <p>&nbsp;</p>
          <p>DIMENSIONAL:</p>
          <p>&nbsp; ${dimensional1}</p>
        </div>
      </div>
    </body>
    </html>
    `;

  const createPDF_File = async () => {
    let options = {
      // conteudo HTML
      html: html,
      // Setting UP File Name for PDF File.
      fileName: `${nome1.replace(/ /g, '')}_maq_1`,

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
        <Text style={styles.textMaq}>MÁQ. 1</Text>
        <FormDescricao
          nome={nome1}
          setNome={setNome1}
          codigo={codigo1}
          setCodigo={setCodigo1}
          numMolde={numMolde1}
          setNumMolde={setNumMolde1}
          quantCav={quantCav1}
          setQuantCav={setQuantCav1}
          tipo={tipo1}
          setTipo={setTipo1}
          refrigeracao={refrigeracao1}
          setRefrigeracao={setRefrigeracao1}
          maxAbertura={maxAbertura1}
          setMaxAbertura={setMaxAbertura1}
          materiaPrima={materiaPrima1}
          setMateriaPrima={setMateriaPrima1}
          alturaMolde={alturaMolde1}
          setAlturaMolde={setAlturaMolde1}
          aberturaMaq={aberturaMaq1}
          setAberturaMaq={setAberturaMaq1}
          extracao={extracao1}
          setExtracao={setExtracao1}
          cicloTotal={cicloTotal1}
          setCicloTotal={setCicloTotal1}
        />
        <FormAbertura1
          pAbertura={pAbertura}
          setPAbertura={setPAbertura}
          pDestravamento={pDestravamento}
          setPDestravamento={setPDestravamento}
          pExtrHidCurso={pExtrHidCurso}
          setPExtrHidCurso={setPExtrHidCurso}
          vAbertura1={vAbertura1}
          setVAbertura1={setVAbertura1}
          vAbertura2={vAbertura2}
          setVAbertura2={setVAbertura2}
          vAbertura3={vAbertura3}
          setVAbertura3={setVAbertura3}
          vAbertura4={vAbertura4}
          setVAbertura4={setVAbertura4}
          vDestravamento={vDestravamento}
          setVDestravamento={setVDestravamento}
          vExtrHidCurso={vExtrHidCurso}
          setVExtrHidCurso={setVExtrHidCurso}
          cAbertura1={cAbertura1}
          setCAbertura1={setCAbertura1}
          cAbertura2={cAbertura2}
          setCAbertura2={setCAbertura2}
          cAbertura3={cAbertura3}
          setCAbertura3={setCAbertura3}
          cAbertura4={cAbertura4}
          setCAbertura4={setCAbertura4}
          cDestravamento={cDestravamento}
          setCDestravamento={setCDestravamento}
          cExtrHidCurso={cExtrHidCurso}
          setCExtrHidCurso={setCExtrHidCurso}
          tAbertura={tAbertura}
          setTAbertura={setTAbertura}
          tDestravamento={tDestravamento}
          setTDestravamento={setTDestravamento}
          tExtrHidCurso={tExtrHidCurso}
          setTExtrHidCurso={setTExtrHidCurso}
        />
        <FormFechamento1
          pFechamento={pFechamento}
          setPFechamento={setPFechamento}
          pSegMolde={pSegMolde}
          setPSegMolde={setPSegMolde}
          pTravamento={pTravamento}
          setPTravamento={setPTravamento}
          vFechamento1={vFechamento1}
          setVFechamento1={setVFechamento1}
          vFechamento2={vFechamento2}
          setVFechamento2={setVFechamento2}
          vFechamento3={vFechamento3}
          setVFechamento3={setVFechamento3}
          vFechamento4={vFechamento4}
          setVFechamento4={setVFechamento4}
          vSegMolde={vSegMolde}
          setVSegMolde={setVSegMolde}
          vTravamento={vTravamento}
          setVTravamento={setVTravamento}
          cFechamento1={cFechamento1}
          setCFechamento1={setCFechamento1}
          cFechamento2={cFechamento2}
          setCFechamento2={setCFechamento2}
          cFechamento3={cFechamento3}
          setCFechamento3={setCFechamento3}
          cFechamento4={cFechamento4}
          setCFechamento4={setCFechamento4}
          cSegMolde={cSegMolde}
          setCSegMolde={setCSegMolde}
          cTravamento={cTravamento}
          setCTravamento={setCTravamento}
          tFechamento={tFechamento}
          setTFechamento={setTFechamento}
          tSegMolde={tSegMolde}
          setTSegMolde={setTSegMolde}
          tTravamento={tTravamento}
          setTTravamento={setTTravamento}
        />
        <FormMenuInjecao1
          pProcInjecao={pProcInjecao}
          setPProcInjecao={setPProcInjecao}
          vProcInjecao={vProcInjecao}
          setVProcInjecao={setVProcInjecao}
          cComutacao={cComutacao}
          setCComutacao={setCComutacao}
          tComutacao={tComutacao}
          setTComutacao={setTComutacao}
          pAvancoCJ={pAvancoCJ}
          setPAvancoCJ={setPAvancoCJ}
          pRetornoCJ={pRetornoCJ}
          setPRetornoCJ={setPRetornoCJ}
          pRetornoCJ2={pRetornoCJ2}
          setPRetornoCJ2={setPRetornoCJ2}
          vRetorno={vRetorno}
          setVRetorno={setVRetorno}
          tempoRecuo={tempoRecuo}
          setTempoRecuo={setTempoRecuo}
        />
        <FormRecalque1
          tRecalque={tRecalque}
          setTRecalque={setTRecalque}
          pRecalque={pRecalque}
          setPRecalque={setPRecalque}
          vRecalque={vRecalque}
          setVRecalque={setVRecalque}
        />
        <FormDosagem1
          cPDosagem={cPDosagem}
          setCPDosagem={setCPDosagem}
          vDosagem={vDosagem}
          setVDosagem={setVDosagem}
          cDosagem={cDosagem}
          setCDosagem={setCDosagem}
        />
        <FormDescompressao1
          pDescompressao={pDescompressao}
          setPDescompressao={setPDescompressao}
          vDescompressao={vDescompressao}
          setVDescompressao={setVDescompressao}
          cDescompressao={cDescompressao}
          setCDescompressao={setCDescompressao}
          rDosagem={rDosagem}
          setRDosagem={setRDosagem}
        />
        <FormExtrHidraulico1
          pRetorno={pRetorno}
          setPRetorno={setPRetorno}
          tRetorno={tRetorno}
          setTRetorno={setTRetorno}
          pAvanco={pAvanco}
          setPAvanco={setPAvanco}
          tAvanco={tAvanco}
          setTAvanco={setTAvanco}
          tipoExtrator={tipoExtrator}
          setTipoExtrator={setTipoExtrator}
        />
        <FormTemperaturas1
          bico1={bico1}
          setBico1={setBico1}
          zona11={zona11}
          setZona11={setZona11}
          zona21={zona21}
          setZona21={setZona21}
          zona31={zona31}
          setZona31={setZona31}
          zona41={zona41}
          setZona41={setZona41}
        />
        <FormCaracInspecao
          visual={visual1}
          setVisual={setVisual1}
          dimensional={dimensional1}
          setDimensional={setDimensional1}
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

export default FichaTecnica1;
