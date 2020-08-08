import React, { createContext, useContext, useReducer, useEffect } from 'react';
import lscache from 'lscache';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// eslint-disable-next-line import/no-cycle
import reducer from '~/utils/reducer';
// const admin = require('firebase-admin');

// Fetch the service account key JSON file contents
const serviceAccount = require('~/google-services.json');

// Initialize the app with a service account, granting firebase privileges
if (!firebase.apps.length) {
  firebase.initializeApp({
    credential: serviceAccount,
    databaseURL: 'https://fir-connect-16459.firebaseio.com',
  });
}

// As an firebase, the app has access to read and write all data, regardless of Security Rules
const db = firebase.database();
const ref = db.ref('/state');

const StoreContext = createContext();

export const defaultState = {
  appInit: false,
  tasks: [],
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    if (state.appInit) {
      // Always sync localStorage and FireBae when state change
      ref.set(JSON.stringify(state), (error) => {
        if (error) {
          console.log(`Data could not be saved.${error}`);
        } else {
          console.log('Data saved successfully.');
        }
      });
      lscache.set('state', JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    ref.on(
      'value',
      (snapshot) => {
        let val = snapshot.val();
        if (val === null) {
          defaultState.appInit = true;
          val = JSON.stringify(defaultState);
        }
        dispatch({ type: 'sync', newState: JSON.parse(val) });
      },
      (error) => {
        // If FireBase error then use localStorage as dataStore
        dispatch({ type: 'sync', newState: JSON.parse(lscache.get('state')) });
        console.error(`Cannot get firebase data: ${error}`);
      },
    );
  }, []);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
