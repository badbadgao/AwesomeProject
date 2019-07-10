/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, } from 'react-native';
import {Container, Header, Content, Accordion, Text, Icon, View, Body, Left, Right,Button, Item, Input} from 'native-base';

import { createBottomTabNavigator, createAppContainer, SafeAreaView } from 'react-navigation';
import TeacherListView from './src/HomeScreen/TeacherListView';
import Settings from './src/SettingsScreen/Settings'; 

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import TabNavigator from './src/TabNavigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
type Props = {};
class App extends Component<Props> {
  render() {
    return (
        <View style={{ flex: 1 }}>
          <SafeAreaView
            forceInset={{ top: 'always', bottom: 'always' }}
            style={{ backgroundColor: '#eee' }}
          >
            <View style={{ backgroundColor: '#fff' }}>
              <TabNavigator/>
            </View>
          </SafeAreaView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    color: 'tomato',
    marginLeft: 8,
    marginTop: 8,
    marginBottom: -16,
    height: 20
  }
});

export default createAppContainer(App);