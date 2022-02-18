import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: "filters",
    initialState:  {
        players: "any",
        length: "any",
        type: "any",
    },
    reducers: {
        setPlayers: (state, action) => {
            state.players = action.payload;
        },
        setLength: (state, action) => {
            state.length = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
    },
});

export const { setPlayers, setLength, setType }  = filtersSlice.actions;
export default filtersSlice.reducer;