import React from 'react';
import { View, Text } from 'react-native';

// Styles
import styles from './styles';

const Header = () => (
  <View style={[styles.container, styles.shadow]}>
    <Text style={styles.title}>GoNative App</Text>
  </View>
);

export default Header;
