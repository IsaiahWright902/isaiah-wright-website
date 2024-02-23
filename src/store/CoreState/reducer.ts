import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CoreState = {
  initialVisit: boolean;
  message: string;
  theme: boolean;
  userColor: string;
};

const initialState: CoreState = {
  initialVisit: true,
  message: "hello",
  theme: true,
  userColor: "#2fad59",
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
    setThemePreference: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload;
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
