import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'react-native';
import { Container, Content } from 'native-base';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  }
}); 

class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Details",
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>Details Screen</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </Content>
      </Container>
    );
  }
}

export default DetailsScreen;