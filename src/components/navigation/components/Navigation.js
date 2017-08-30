/**
 * AudienceOverview component
 *
 * @flow
 */
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { navigationProps } from '../types';
import MapView from 'react-native-maps';
import React from 'react';

import MarkerView from './MarkerView';

import mapStyle from '@assets/mapStyle.json';

const Navigation = ({
  region,
  onRegionChange,
  userPosition
}: navigationProps) => {
  return region.longitude && region.latitude ? (
    <MapView
      style={styles.container}
      customMapStyle={mapStyle}
      region={region}
      onRegionChangeComplete={onRegionChange}
      zoomEnabled={false}
      showsUserLocation={true}
      followsUserLocation={true}
      showsCompass={true}
    >
      <MapView.Marker coordinate={userPosition}>
        <MapView.Callout>
          <MarkerView />
        </MapView.Callout>
      </MapView.Marker>
    </MapView>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      }}
    >
      <ActivityIndicator animating={true} size="large" color="#000" />
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
  }
});

export default Navigation;
