import type {PersistConfig} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {AuthenticationState} from '@redux/types.ts';

const authenticationPersistConfig: PersistConfig<AuthenticationState> = {
    key: 'authentication',
    storage,
    whitelist: ['user', 'isAuthenticated'], // Only persist these fields
};

export default authenticationPersistConfig;
