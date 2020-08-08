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

let initialState = {};
const defaultState = {
  appInit: false,
  tasks: [],
};

export const StoreProvider = ({ children }) => {
  initialState = lscache.get('state') ? JSON.parse(lscache.get('state')) : defaultState;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.appInit) {
      ref.set(JSON.stringify(state), (error) => {
        if (error) {
          console.log(`Data could not be saved.${error}`);
          lscache.set('state', JSON.stringify(state));
        } else {
          console.log('Data saved successfully.');
        }
      });
    }
  }, [state]);

  useEffect(() => {
    ref.on('value', (snapshot) => {
      let val = snapshot.val();
      if (val === null) {
        defaultState.appInit = true;
        val = JSON.stringify(defaultState);
      }
      dispatch({ type: 'sync', newState: JSON.parse(val) });
    });
  }, []);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
