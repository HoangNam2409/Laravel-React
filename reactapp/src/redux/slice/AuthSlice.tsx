import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserType } from "@/types/UserType";

// Define a type for the slice state
interface IAuthState {
    isAuthenticated: boolean;
    user: UserType | null;
}

// Define the initial state using that type
const initialState: IAuthState = {
    isAuthenticated: false,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setAuthLogin: (state, action: PayloadAction<UserType | null>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },

        setAuthLogout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { setAuthLogin, setAuthLogout } = authSlice.actions;

export default authSlice.reducer;
