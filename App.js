/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import FlatListBasics from './src/menu/menu';

class App extends React.Component {

  constructor(props) {
    this.state = {
      enter: true,
    }
  }

  render() {
    return this.state.enter ? (
      <View style={{flex: 1}}>
          <View style={{flex: .9}}>
              <Text style={styles.header} >Pocket Tech</Text>
          </View>
          <View style={{flex: .1}}>
              <Text>Pocket Tech R </Text>
              <Text>2019 All rights reserved </Text>
          </View>
      </View> 
    ) : (
      <FlatListBasics />
    );
  }
  
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  header: {
    fontSize: 50,
    fontWeight: '600',
    color: Colors.black,
  },
  container: {
    flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    position: 'absolute',
  bottom: 0,
  width: '100%',
  flex: 1,
  },
});

export default App;
