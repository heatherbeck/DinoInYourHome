import { applyMiddleware, createStore, combineReducers } from 'redux';
import rootReducer from '../RPG-Dino/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import NavigationBar from "./RPG-Dino/components/NavigationBar/NavigationBar";

const config = {
  key: 'root', // key is required
  storage // storage is now required
};

const reducer = persistReducer(config, rootReducer);

const store = createStore(reducer);
const persistor = persistStore(store);

export { store, persistor };
