/**
* HomeContainer
* Integration labels:
* - Home
* @flow
*/

import 'react-native';
import homeContainerProps from './types';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './components/Home';

export class HomeContainer extends Component {
  props: homeContainerProps;
  constructor(props) {
    super(props);
  }
  render(): React.Element<*> {
    const { openNavigation, props: { lang } } = this;
    return <Home openNavigation={openNavigation} lang={lang} />;
  }

  /**
   * Opens Navigation Screen
   */
  openNavigation = () => {
    this.props.navigation.navigate('NAVIGATION');
  };
}

export default connect(state => ({
  lang: state.app.lang
}))(HomeContainer);
