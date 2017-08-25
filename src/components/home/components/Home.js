/**
 * AudienceOverview component
 *
 * @flow
 */
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { homeProps } from '../types';
import React from 'react';

const Navigation = ({ openNavigation, lang }: homeProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openNavigation}>
        <Text style={[styles.instructions, styles.link]}>
          {lang.NAVIGATION_GO_TO}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  link: {
    color: 'blue'
  }
});

export default Navigation;
