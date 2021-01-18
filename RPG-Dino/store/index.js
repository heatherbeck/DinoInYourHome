import { createStore } from 'redux';
import rootReducer from '../reducers';





const config = {
  key: 'root', // key is required
  storage // storage is now required
};

const reducer = persistReducer(config, rootReducer);

const store = createStore(reducer);
const persistor = persistStore(store);

export { store, persistor };
