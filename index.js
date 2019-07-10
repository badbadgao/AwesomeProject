/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import TabNavigator from './src/TabNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TabNavigator);
