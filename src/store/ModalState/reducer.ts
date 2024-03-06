import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalState = {
  welcomeModal: boolean;
  userColorPickerModal: boolean;
  [key: string]: boolean;
};

const initialState: ModalState = {
  welcomeModal: false,
  userColorPickerModal: false,
};

export const ModalSlice = createSlice({
  name: "modals",
  initialState: initialState,
  reducers: {
    open(state, action: PayloadAction<string>) {
      state[action.payload] = true;
    },
    close(state, action: PayloadAction<string>) {
      state[action.payload] = false;
    },
  },
});

export const modalActions = {
  ...ModalSlice.actions,
};

export default ModalSlice.reducer;
