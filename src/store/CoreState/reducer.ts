import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { coreActionsAsync } from "./actions";
import toast from "react-hot-toast";

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

const { sendEmail } = coreActionsAsync;

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
  extraReducers: (builder) => {
    builder.addCase(sendEmail.fulfilled, (state) => {
      toast.success("Email sent successfully!");
    });
    builder.addCase(sendEmail.rejected, (state) => {
      toast.success("Email not sent");
    });
  },
});

export const coreActions = {
  ...coreActionsAsync,
  ...CoreSlice.actions,
};

export default CoreSlice.reducer;
