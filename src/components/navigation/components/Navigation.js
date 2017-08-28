/**
 * AudienceOverview component
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { navigationProps } from '../types';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React from 'react';

import MarkerView from './MarkerView';

import mapStyle from '@assets/mapStyle.json';

const Navigation = ({
  region,
  onRegionChange,
  initialRegion
}: navigationProps) => {
  return (
    <MapView
      style={styles.container}
      onRegionChangeComplete={onRegionChange}
      customMapStyle={mapStyle}
      provider={PROVIDER_GOOGLE}
      region={region}
    >
      <MapView.Marker
        coordinate={{
          latitude: 44.762855,
          longitude: 17.18251
        }}
      >
        <MapView.Callout>
          <MarkerView />
        </MapView.Callout>
      </MapView.Marker>
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
