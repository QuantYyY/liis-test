import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import hotelReducer from './hotelSlice';
import authReducer from './authSlice';
import createSagaMiddleware from '@redux-saga/core';
import hotelSaga from '../saga/hotelSaga';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}
const rootReducer = combineReducers({
    hotel: hotelReducer,
    auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(sagaMiddleware),
});


sagaMiddleware.run(hotelSaga);

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;