import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CoreState = {
  initialVisit: boolean;
  message: string;
  useLightMode: boolean;
  userColor: string;
};

const initialState: CoreState = {
  initialVisit: true,
  message: "hello",
  useLightMode: true,
  userColor: "#3bb273",
};

export const CoreSlice = createSlice({
  name: "core",
  initialState: initialState,
  reducers: {
    setInitialVisit: (state, action: PayloadAction<boolean>) => {
      state.initialVisit = action.payload;
    },
    changeMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setUseLightMode: (state, action: PayloadAction<boolean>) => {
      state.useLightMode = action.payload;
    },
    setUserColor: (state, action: PayloadAction<string>) => {
      state.userColor = action.payload;
    },
  },
});

export const coreActions = {
  ...CoreSlice.actions,
};

export default CoreSlice.reducer;
