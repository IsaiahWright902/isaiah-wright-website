import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CoreState = {
  initialVisit: boolean;
  message: string;
};

const initialState: CoreState = {
  initialVisit: true,
  message: "hello",
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
  },
});

export const coreActions = {
  ...CoreSlice.actions,
};

export default CoreSlice.reducer;
