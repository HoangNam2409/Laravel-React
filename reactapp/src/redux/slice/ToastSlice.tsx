import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ToastType = "success" | "error" | null;

export interface IToastState {
    message: string;
    type: ToastType;
}

const initialState: IToastState = {
    message: "",
    type: null,
};

export const toastSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        setToast: (state, action: PayloadAction<IToastState>) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
        },

        clearToast: (state) => {
            state.message = "";
            state.type = null;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setToast, clearToast } = toastSlice.actions;

export default toastSlice.reducer;
