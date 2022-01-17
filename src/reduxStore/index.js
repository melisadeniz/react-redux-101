import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage' //defaults to localStorage for web
import counterReducer from "./counter";
import tasksReducer from "./tasks";

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer,
});

const persistConfig = {
 key: 'root',
 storage,
//  whitelist: ["counter"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(logger));

// store.subscribe(() => console.log("STORE:::", store.getState()));

export const persistor = persistStore(store)

export default store;
