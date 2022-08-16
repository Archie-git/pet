/* eslint no-param-reassign: 0 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'archie',
  age: 11,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setName: (state: any, action: any) => {
      state.name = action.payload.name;
    },
  },
});

export default accountSlice;
