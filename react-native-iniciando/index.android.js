/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TextComponent from './application/components/Text';
import CounterComponent from './application/components/Counter';
import InitRouter from './application/components/InitRouter';

export default class app extends Component {
  render() {
    return (
        <InitRouter />
    );

    // return (
    //   <View style={STYLES.view}>
    //     <TextComponent myText="Hi my name is Leonan and I'm from School of net"></TextComponent>
    //     <CounterComponent></CounterComponent>
    //   </View>
    // );
  }
}

const STYLES = StyleSheet.create({
  view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
  }
});

AppRegistry.registerComponent('app', () => app);
