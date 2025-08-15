import {configureStore, type EnhancedStore} from '@reduxjs/toolkit';
import {persistStore, type Persistor} from 'redux-persist';

import rootReducer from '@redux/rootReducer';

// Explicit type annotation for the store
export const store: EnhancedStore = configureStore({
    reducer: rootReducer,
    // eslint-disable-next-line @typescript-eslint/typedef
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor: Persistor = persistStore(store);

// RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
