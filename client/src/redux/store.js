import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/auth/authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});

export default store;
