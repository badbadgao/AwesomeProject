import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import AccountScreen from './AccountScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Category: SettingsScreen,
    Account: AccountScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Category') {
          iconName = `ios-list`;
        } else if (routeName === 'Account') {
          iconName = 'ios-person';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12,
      },
    },
  }
)

export default createAppContainer(TabNavigator);