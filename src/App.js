/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  AppState,
  UIManager,
  NetInfo,
  Platform,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { appActions } from '@flux/actions';
import configureStore from '@flux/configureStore';

type State = {
  store: configureStore,
  rehydrated?: boolean
};

const CHECK_NETWORK_TIMEOUT = 1000;

export default class Discounts extends Component {
  state: State;

  componentWillMount(): void {
    // Enable android layout animations
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  componentDidMount(): void {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount(): void {
    //Remove connection listener
    NetInfo.isConnected.removeEventListener(
      'change',
      this._handleConnectionChange
    );
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  constructor(): void {
    super();
    this.state = {
      store: configureStore((): void => {
        this.setState({ rehydrated: true }, (): void => {
          this._onAppStart();
          this._checkConnection();
        });
      })
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
      </Provider>
    );
  }
  /**
 * Run on app start
 */
  _onAppStart = (): void => {
    const { store } = this.state;
    store.dispatch(appActions.onAppStart());
  };

  /**
  * Handle AppStateChange
  */
  _handleAppStateChange = (appState: string): void => {
    const { store } = this.state;
    if (appState === 'active') {
      store.dispatch(appActions.onAppResume());
    }
    Platform.OS === 'android' &&
      NetInfo.isConnected
        .fetch()
        .done(isConnected => this._handleConnectionChange(isConnected));
  };

  /**
  * Handle connection status change
  */
  _handleConnectionChange = (isConnected: boolean): void => {
    let { store } = this.state;
    if (isConnected) {
      store.dispatch(appActions.online());
    } else {
      store.dispatch(appActions.offline());
    }
  };

  /**
  * Handle AppStateChange
  */
  _handleAppStateChange = (appState: string): void => {
    let { store } = this.state;
    if (appState === 'active') {
      store.dispatch(appActions.onAppResume());
    }
    Platform.OS === 'android' &&
      NetInfo.isConnected
        .fetch()
        .done(isConnected => this._handleConnectionChange(isConnected));
  };
  /**
  * Add listener to network status change
  * iOS fires check automatically on adding listener
  * Android needs to run check manually
  * Timeout is needed because Android return incorrect network state
  */
  _checkConnection = (): void => {
    setTimeout(() => {
      NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectionChange
      );
      Platform.OS === 'android' &&
        NetInfo.isConnected.fetch().done(isConnected => {
          this._handleConnectionChange(isConnected);
        });
    }, CHECK_NETWORK_TIMEOUT);
  };
}

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

AppRegistry.registerComponent('Discounts', () => Discounts);
