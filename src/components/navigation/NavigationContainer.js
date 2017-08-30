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
  watchID: ?number = null;
  constructor(props) {
    super(props);
    this.state = {
      region: props.location,
      userPosition: {
        longitude: props.location.longitude,
        latitude: props.location.latitude
      }
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.state.region) {
      this.setState(() => ({
        region: nextProps.location,
        userPosition: {
          longitude: nextProps.location.longitude,
          latitude: nextProps.location.latitude
        }
      }));
    }
  }
  render(): React.Element<*> {
    const { onRegionChange, state: { region, userPosition } } = this;
    return (
      <Navigation
        region={region}
        onRegionChange={onRegionChange}
        userPosition={userPosition}
      />
    );
  }

  onRegionChange = (region: Object) => {
    if (this.validateRegionChange(region)) {
      this.setState(() => ({
        region: {
          ...this.props.location,
          longitude: region.longitude,
          latitude: region.latitude
        }
      }));
    }
  };

  validateRegionChange = (region: Object): boolean => {
    if (
      region.latitude !== this.state.region.latitude ||
      region.longitude !== this.state.region.longitude
    ) {
      return true;
    }
    return false;
  };
}
/**
 : (
   <Navigation
     region={region}
     onRegionChange={onRegionChange}
     userPosition={userPosition}
   />
 )
 */

export default connect(state => ({
  location: state.app.location
}))(NavigationContainer);
