import React from 'react';
import { FlatList, StyleSheet, Text, View, ListItem , Body } from 'react-native';

import Item from './Item';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
const listData = [
  {name: 'Devin', desc: 'Devin is a prefessional teacher in piano. He can teach childer aging from 4 years old.'},
  {name: 'Jackson', desc: 'Devin is a prefessional teacher in piano. He can teach childer aging from 4 years old.'},
  {name: 'James', desc: 'Devin is a prefessional teacher in piano. He can teach childer aging from 4 years old.'},
  {name: 'Joel', desc: 'Devin is a prefessional teacher in piano. He can teach childer aging from 4 years old.'},
  {name: 'John', desc: 'Devin is a prefessional teacher in piano. He can teach childer aging from 4 years old.'},
];

const Props = {}
export default class FlatListBasics extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}> 
        <FlatList
          data={listData}
          renderItem={({item}) => {
            return (
              <View>
                <Item itemData={item}/>
              </View>
            )
          }}
        />
      </View>
    );
  }
}
