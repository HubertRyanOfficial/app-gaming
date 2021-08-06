import React from 'react';

// * modules

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// * utils

import getConfig from './config/store';
import Routes from './routes';

//

const {store, persistor} = getConfig();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
// Desenvolvido por Hubert Ryan
