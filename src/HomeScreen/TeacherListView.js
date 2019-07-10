import React from 'react';
import { FlatList, StyleSheet, Text, View, Body,TouchableOpacity } from 'react-native';

import ListItem from './ListItem';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
const listData = [
  {key: 1, name: 'Devin', desc: 'Devin is a prefessional teacher in piano. He can teach childer aging from 4 years old.'},
  {key: 2, name: 'Jackson', desc: 'Devin is a prefessional teacher in piano. He can teach childer aging from 4 years old.'},
  {key: 3, name: 'James', desc: 'Devin is a prefessional teacher in piano. He can teach childer aging from 4 years old.'},
  // {key: 4, name: 'Joel', desc: 'Devin is a prefessional teacher in piano. He can teach childer aging from 4 years old.'},
  // {key: 5, name: 'John', desc: 'Devin is a prefessional teacher in piano. He can teach childer aging from 4 years old.'},
];

const Props = {}
export default class FlatListBasics extends React.Component<Props> {
  onPress = () => {
    this.props.onPressItem();
  }

  render() {
    return (
      <View> 
        <FlatList
          data={listData}
          renderItem={({item}) => {
            return (
              <ListItem
                onPressItem={this.onPress}
                itemData={item}
              />
            )
          }}
          keyExtractor = { (item, index) => index.toString() }
        />
      </View>
    );
  }
}
