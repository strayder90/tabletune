import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import AuthenticationReducer from '@/redux/authentication/AuthenticationSlice';
import authenticationPersistConfig from '@/redux/authentication/persistedObject.js';

const rootReducer = combineReducers({
    authentication: persistReducer(authenticationPersistConfig, AuthenticationReducer)
});

export default rootReducer;