/**
 * AudienceOverview component
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { navigationProps } from '../types';
import MapView from 'react-native-maps';
import React from 'react';

const Navigation = ({ region, onRegionChange, initialRegion }: navigationProps) => {
  return (
    <MapView
      style={styles.container}
      onRegionChangeComplete={onRegionChange}
      region={region}
    >
      <MapView.Marker
        coordinate={{
          latitude: 44.762855,
          longitude: 17.18251
        }}
        title="Some random title"
        description="Some random description"
      />
    </MapView>
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
  }
});

export default Navigation;