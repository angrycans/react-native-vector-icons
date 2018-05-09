import React, { PureComponent } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet, Text
} from 'react-native';

import IconSetList from './IconSetList';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function IconExplorer(props) {
  return (
    <Text>This text has <FontAwesome name="rocket" /> inline <FontAwesome name="hand-peace-o"> icons!</FontAwesome></Text>
  );
}

AppRegistry.registerComponent('IconExplorer', () => IconExplorer);
