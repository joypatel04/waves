import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {getPersistor} from '@rematch/persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Navigation from './src/navigation';
import store from './src/store';

const persistor = getPersistor();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </>
  );
}
