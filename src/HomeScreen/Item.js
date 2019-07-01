import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import { Card, CardItem, Button, Body, Right, Icon, Left} from 'native-base';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    width: 48,
    height: 48,
    borderRadius: 48/2,
  },
  details: {
    display: 'flex',
    paddingLeft: 8,   
  },
  name: {
    fontSize: 16,
  },
  desc: {
    fontSize: 12,
    marginTop: 8,
    color: 'grey',
    paddingRight: 32, 
  },
  likes: {
    marginLeft: 4,
  }
});

type Props = {};

export default class Item extends React.Component<Props> {
  render() {
    return (
      <Card>
        <CardItem>
          <View style={styles.container}>
            <Image 
              source={require('../resource/bear.jpg')}  
              style={{width: 48, height: 48, borderRadius: 48/ 2}} 
            />
            <View style={styles.details}>
              <Text style={styles.name}>{this.props.itemData.name}</Text>
              <Text style={styles.desc}>{this.props.itemData.desc}</Text>
            </View>
          </View>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text style={styles.likes}>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    )
  }
}