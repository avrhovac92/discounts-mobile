/**
* NavigationContainer
* Integration labels:
* - Navigation
* @flow
*/

import 'react-native';
import { navigationContainerProps, navigationContainerState } from './types';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './components/Navigation';

export class NavigationContainer extends Component {
  props: navigationContainerProps;
  state: navigationContainerState;
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 44.762855,
        longitude: 17.18251,
        latitudeDelta: 0.0052,
        longitudeDelta: 0.0015
      }
    };
  }
  render(): React.Element<*> {
    const { onRegionChange, state: { region } } = this;
    return (
      <Navigation
        region={region}
        onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 44.762855,
          longitude: 17.18251,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
  }

  onRegionChange = (region: Object) => {
    this.setState({ region });
  };
}

export default connect()(NavigationContainer);
