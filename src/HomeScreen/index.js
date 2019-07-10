import React from 'react';
import TeacherListView from './TeacherListView';
import { StyleSheet } from 'react-native';
import {Container, Header, Content, Accordion, Text, Icon, View, Body, Left, Right,Button, Item, Input} from 'native-base';

import { createStackNavigator, createAppContainer, SafeAreaView} from 'react-navigation'; 
import DetailsScreen from '../DetailsScreen';
import HomeHeader from './HomeHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <HomeHeader />,
  };

  onPressItem = () => {
    this.props.navigation.navigate('Details');
  }

  render() {
    return (
      <View style={styles.container}>
        <TeacherListView 
          onPressItem={this.onPressItem}
        />
      </View>
    )
  }
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    // headerMode: 'none',
    initialRouteName: 'Home',
  }
);

export default HomeStack;