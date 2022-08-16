/* eslint no-param-reassign: 0 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state: any, action: any) => {
      console.log('chile =====', action);
      state.isLoading = !state.isLoading;
    },
  },
});

export default appSlice;
