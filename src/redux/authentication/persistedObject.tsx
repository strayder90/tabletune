import storage from 'redux-persist/lib/storage';

const authenticationPersistConfig = {
    key: 'authentication',
    storage,
    whitelist: ['user', 'isAuthenticated'] // Only persist these fields
};

export default authenticationPersistConfig;