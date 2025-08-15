import {combineReducers, type Reducer} from '@reduxjs/toolkit';
// @ts-expect-error: PersistPartial type is not exported in redux-persist package
import {persistReducer, type PersistPartial} from 'redux-persist';

import AuthenticationReducer from '@redux/authentication/AuthenticationSlice';
import {AuthenticationState} from '@redux/types.ts';
import authenticationPersistConfig from '@redux/authentication/persistedObject.tsx';

const persistedAuthenticationReducer: Reducer<AuthenticationState & PersistPartial> =
    persistReducer(authenticationPersistConfig, AuthenticationReducer);

// Combine reducers with explicit typing
const rootReducer: Reducer = combineReducers({
    authentication: persistedAuthenticationReducer,
});

export default rootReducer;
