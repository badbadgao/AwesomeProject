import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Body, Right, Header,Title, Item, Icon, Input, Text, Left, Button } from 'native-base';

const Props = {};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },  
});

export default class DetailsHeader extends React.Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <Left style={{marginTop: -10}}>
          <Button
            transparent
            onPress={this.props.onPress}
          >
            <Icon name='arrow-back'/>
            <Text>Back</Text>
          </Button>
        </Left>
      </View>
    )
  }
}