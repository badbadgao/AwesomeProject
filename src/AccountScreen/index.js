import React from 'react';
import { Text } from 'react-native';

import { SafeAreaView } from 'react-navigation';

const Props = {}
export default class AccountScreen extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
        <Text>My Account</Text>
      </SafeAreaView>
    )
  }
}