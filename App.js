import {StatusBar} from 'expo-status-bar';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text, TouchableOpacity,
  View,
} from 'react-native';
import PropsTypes from 'prop-types';
import React from 'react';


const ListItem = (props) => {
  return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.row}>
          <Image
              style={styles.image}
              source={{uri: props.singleMedia.thumbnails.w160}}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>{props.singleMedia.title}</Text>
          <Text style={styles.text}>{props.singleMedia.description}</Text>
        </View>
      </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropsTypes.object,
};

const mediaArray = [
  {
    key: '0',
    title: 'Title 1',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    thumbnails: {
      w160: 'http://placekitten.com/160/161',
    },
    filename: 'http://placekitten.com/2048/1920',
  },
  {
    key: '1',
    title: 'Title 2',
    description:
        'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/164',
    },
    filename: 'http://placekitten.com/2041/1922',
  },
  {
    key: '2',
    title: 'Title 3',
    description:
        'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/167',
    },
    filename: 'http://placekitten.com/2039/1920',
  },
];

const App = () => {
  return (
      <View style={styles.page}>
        <View style={styles.Yks}>
          <ImageBackground source={require('./assets/Nice_boat.jpg')}
                           style={styles.tausta}
                           imageStyle={styles.boatLogo}/>
          <Text style={styles.slogan}>Laivakissat</Text>
        </View>
        <View style={styles.Kaks}>
      <FlatList
          data={mediaArray}
          renderItem={({item}) => <ListItem singleMedia={item}/>}
      />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b',
    flexDirection: 'row',
    paddingBottom: 5,
  },
  text: {
    fontStyle: 'italic',
    color: "#869299"
  },
  image: {
    flex: 1,
    borderRadius: 2,
    borderBottomLeftRadius: 40,
    borderTopEndRadius: 40,
    resizeMode: 'stretch',
  },
  row: {
    flex: 1,
    backgroundColor: '#3c3f41',
    padding: 10,
    fontStyle: 'italic'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#bababa"
  },
  boatLogo: {
    borderBottomEndRadius: 35,
  },
  tausta: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  Yks: {
    flex: 1,
    //height: 50,
    //width: 50,
    backgroundColor:'black',
    position: 'relative',
  },
  Kaks: {
    flex: 3,
    // height: 200,
    // width: 200,
    // alignSelf: 'center',
    // backgroundColor: 'yellow',
    // overflow: 'hidden',
    // borderWidth: 5,
    // borderBottomEndRadius: 20,
  },
  kuva: {
    resizeMode: 'stretch',
    height: 200,
    width: 200,
    borderBottomEndRadius: 20,
  },
  slogan: {
    backgroundColor: 'rgba(0,0,0,0.36)',
    width: 150,
    position: 'absolute',
    padding: 3,
    top: 80,
    left: 23,
    color: "white",
    fontSize: 30,

  },
});

export default App;
