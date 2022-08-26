import {StatusBar} from 'expo-status-bar';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
      <View style={[
        styles.container, {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        }]}>
        <View style={styles.Yks}>
          <ImageBackground source={require('./assets/Nice_boat.jpg')}
                           style={styles.tausta}
          imageStyle={styles.boatLogo}/>
          <Text style={styles.slogan}>Tosi siisti slogan</Text>
        </View>
        <View style={styles.Kaks}>
          <Image style={styles.kuva} source={require('./assets/DK_OK.png')}/>
          <Text>Kaksi</Text>
        </View>
        <View style={styles.Kol}>
          <View style={styles.vasen}>
            <Text>Vasen</Text>
          </View>
          <View style={styles.oikee}>
            <Text>Oikee</Text>
          </View>
        </View>
        <View style={styles.Nee}>
          <Text>Footer</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  boatLogo: {
    borderBottomEndRadius: 35
  },
  tausta: {
    resizeMode: 'cover',
    height: "100%",
    width: "100%"
  },
  Yks: {
    flex: 1,
    //height: 50,
    //width: 50,
    backgroundColor: 'red',
    position: 'relative',
  },
  Kaks: {
    //flex: 1,
    height: 200,
    width: 200,
    alignSelf: 'center',
    backgroundColor: 'yellow',
    overflow: 'hidden',
    borderWidth: 5,
    borderBottomEndRadius: 20,
  },
  Kol: {
    flex: 3,
    flexDirection: 'row',
    //height: 50,
    //width: 50,
    overflow: 'hidden',
    backgroundColor: 'green',
  },
  Nee: {
    height: 50,
  },
  vasen: {
    backgroundColor: 'blue',
    flex: 1,
  },
  oikee: {
    backgroundColor: 'teal',
    flex: 1,
  },
  kuva: {
    resizeMode: 'stretch',
    height: 200,
    width: 200,
    borderBottomEndRadius: 20,
  },
  slogan: {
    backgroundColor: 'white',
    width: 106,
    position: 'absolute',
    bottom: 30,
    left: 30,
  },
});

export default App;
