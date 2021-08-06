import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// reducers

import reducers from './reducers';

// store config

let persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
  // return {store};
};
