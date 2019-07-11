import React from 'react';
import { Text } from 'native-base';
import { SafeAreaView } from  'react-navigation';

const Props = {};
class SettingsScreen extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Text>Category</Text>
      </SafeAreaView>
    )
  }
}

export default SettingsScreen;