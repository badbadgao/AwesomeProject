import React from 'react';
import TeacherListView from './TeacherListView';
import { StyleSheet } from 'react-native';
import {Container, Header, Content, Accordion, Text, Icon, View, Body, Left, Right,Button, Item, Input} from 'native-base';

import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import DetailsScreen from '../DetailsScreen';

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
  static onPressItem = () => {
    this.props.navigation.navigate('Details');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.header}>
          <Item style={styles.item}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Icon name="ios-settings" style={styles.settings}/>
        </Header>
        <Button
          onPress={() => this.props.navigation.navigate('Details')}
        >
          <Text>Go to Details</Text>
        </Button>
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