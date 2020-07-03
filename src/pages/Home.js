import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={require('../../logo.png')} />
        <Text style={styles.title}>FICHA DE PROCESSO</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate('FichaTecnica1');
          }}>
          <Text style={styles.textoButton}>Máquina</Text>
          <Text style={styles.textoButton2}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate('FichaTecnica2');
          }}>
          <Text style={styles.textoButton2}>Máquina </Text>
          <Text style={styles.textoButton}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled style={styles.button}>
          <Text style={styles.textoButton}>Máquina</Text>
          <Text style={styles.textoButton2}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            navigation.navigate('FichaTecnica4');
          }}>
          <Text style={styles.textoButton2}>Máquina</Text>
          <Text style={styles.textoButton}>4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  containerImage: {
    flexDirection: 'row',
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  image: {
    height: 146,
    width: 115,
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    color: 'red',
  },
  containerButton: {
    width: '100%',
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    height: 80,
    width: 82,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 3,
    elevation: 5,
  },
  textoButton: {
    color: 'gray',
    fontSize: 15,
  },
  textoButton2: {
    color: '#D81313',
    fontSize: 15,
  },
});
export default Home;
