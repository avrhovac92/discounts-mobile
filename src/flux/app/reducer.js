/**
 * App based state
 *  @flow
 */

import * as types from '@flux/actionTypes';
import type Action from '../common/types';
import en from '@lang/en';

export type AppStore = {
  lang: Object,
  currentLanguage: string,
  selectedLanguage: ?string,
  location: Object
};

const initialState = {
  lang: en, //default language en
  currentLanguage: 'en', // current app language
  connected: true, // default to true.
  selectedLanguage: null, //user selected language
  location: {
    latitudeDelta: 0.0040863566382564045,
    longitudeDelta: 0.0039635056853294373
  }
};

export default function app(
  state: AppStore = initialState,
  action: Action = {}
): Object {
  switch (action.type) {
    case types.ONLINE:
      return {
        ...state,
        connected: true
      };
    case types.OFFLINE:
      return {
        ...state,
        connected: false
      };
    case types.APP_INIT_LANGUAGES:
      return {
        ...state,
        lang: action.data,
        currentLanguage: action.lang
      };
    case types.APP_SET_LANGUAGE:
      return {
        ...state,
        lang: action.data.language,
        selectedLanguage: action.data.lang,
        currentLanguage: action.data.lang
      };
    case types.APP_ADD_LOCATION:
      return {
        ...state,
        location: {
          ...state.location,
          longitude: action.position.coords.longitude,
          latitude: action.position.coords.latitude
        }
      };
    default:
      return state;
  }
}
