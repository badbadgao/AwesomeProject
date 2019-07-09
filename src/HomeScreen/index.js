import React from 'react';
import TeacherListView from './TeacherListView';
import { StyleSheet } from 'react-native';
import {Container, Header, Content, Accordion, Text, Icon, View, Body, Left, Right,Button, Item, Input} from 'native-base';

import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import DetailsScreen from '../DetailsScreen';
import HomeHeader from './HomeHeader';
// import console = require('console');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: -10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 36,
    paddingTop: -20,
  },
  settings: {
    marginLeft: 16,
    paddingTop: 13,
  }
});

const Props = {};
class HomeScreen extends React.Component<Props> {
  onPressItem = () => {
    this.props.navigation.navigate('Details');
  }

  render() {
    return (
      <Container style={styles.container}>
        <HomeHeader />
        <TeacherListView 
          onPressItem={this.onPressItem}
        />
      </Container>
    )
  }
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  }
);

export default HomeStack;