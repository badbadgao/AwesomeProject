import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Right, Header,Title, Item, Icon, Input, Text, Left, Button, Container } from 'native-base';

const Props = {};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    width: '100%',
  },  
  left: {
    marginLeft: 8,
  },
  item: {
    height: 36,
  },
  settings: {
    marginLeft: 16,
    marginRight: 8,
  }
});

export default class HomeHeader extends React.Component<Props> {
  render() {
    return(
      <View style={styles.container}>
        <Left style={styles.left}>
          <Item rounded style={styles.item}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
        </Left>
          <Icon name="ios-settings" style={styles.settings}/>
      </View>
    )
  }
}