import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "black";

export const userSlice = createSlice({
    name: "theme",
    initialState: {value: initialStateValue},
    reducers: {
        changeColor: (state,action) =>{
            state.value = action.payload;
        },
        resetColor: (state) =>{
            state.value = initialStateValue;
        }
    },
});

export const { changeColor,resetColor } = userSlice.actions

export default userSlice.reducer;