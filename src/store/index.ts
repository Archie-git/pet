import { configureStore } from '@reduxjs/toolkit';
import appSlice from './slice/app';
import accountSlice from './slice/account';

const Store = configureStore({
  reducer: {
    app: appSlice.reducer,
    account: accountSlice.reducer,
  },
});

export default Store;
