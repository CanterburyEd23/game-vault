import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: "list",
    initialState: [
        { name: "Scrabble", players: [2, 3, 4], time: 50, type: "V", id: 1001 },
        { name: "Ticket to Ride", players: [2, 3, 4, 5], time: 75, type: "V", id: 1002 },
        { name: "Exploding Kittens", players: [3, 4, 5, 6], time: 10, type: "V", id: 1003 },
        { name: "Pandemic", players: [2, 3, 4], time: 45, type: "C", id: 1004 },
        { name: "Nefarious", players: [2, 3, 4, 5, 6], time: 30, type: "V", id: 1005 },
        { name: "Firefly", players: [3, 4, 5], time: 150, type: "V", id: 1006 },
        { name: "Kingdom Death: Monster", players: [1, 2, 3, 4], time: 120, type: "C", id: 1007 },
        { name: "Settlers of Catan", players: [2, 3, 4], time: 60, type: "V", id: 1008 },
        { name: "Flashpoint", players: [2, 3, 4], time: 75, type: "C", id: 1009 },
        { name: "Flutter", players: [3, 4, 5, 6, 7, 8, 9, 10], time: 75, type: "V", id: 1010 },
        { name: "Betrayal at House on the Hill", players: [3, 4, 5, 6], time: 45, type: "V", id: 1011 },
        { name: "Blokus", players: [2, 3, 4], time: 20, type: "V", id: 1012 },
        { name: "Diceforge", players: [2, 3, 4], time: 60, type: "V", id: 1013 },
        { name: "Munchkin", players: [2, 3, 4, 5, 6], time: 90, type: "V", id: 1014 },
        { name: "Fallout", players: [2, 3, 4], time: 150, type: "V", id: 1015 },
        { name: "Dead of Winter", players: [3, 4, 5, 6], time: 150, type: "C", id: 1016 },
        { name: "Zombicide", players: [2, 3, 4, 5, 6], time: 120, type: "C", id: 1017 },
        { name: "Diplomacy", players: [2, 3, 4, 5, 6, 7], time: 360, type: "V", id: 1018 },
        { name: "Monopoly", players: [2, 3, 4, 5, 6], time: 120, type: "V", id: 1019 },
        { name: "Carcassonne", players: [2, 3, 4, 5], time: 35, type: "V", id: 1020 },
        { name: "Eldersign", players: [1, 2, 3, 4, 5, 6, 7, 8], time: 75, type: "C", id: 1021 },
        { name: "Hanabi", players: [2, 3, 4], time: 25, type: "C", id: 1022 },
        { name: "Bang", players: [3, 4, 5, 6, 7], time: 45, type: "V", id: 1023 },
        { name: "Archer: Loveletter", players: [2, 3, 4, 5, 6], time: 5, type: "V", id: 1024 },
        { name: "Binding of Isaac: 4 Souls", players: [2, 3, 4], time: 90, type: "V", id: 1025 },
        { name: "Chess", players: [2], time: 60, type: "V", id: 1026 },
        { name: "Careers", players: [2, 3, 4, 5, 6], time: 80, type: "V", id: 1027 },
        { name: "Qwirkle", players: [2, 3, 4, 5], time: 30, type: "V", id: 1028 },
        { name: "Unstable Unicorns", players: [2, 3, 4, 5, 6, 7, 8], time: 45, type: "V", id: 1029 },
        { name: "Gloom", players: [2, 3, 4], time: 60, type: "V", id: 1030 },
        { name: "Caravan", players: [2], time: 10, type: "V", id: 1031 },
        { name: "Cards Against Humanity", players: [2, 3, 4, 5, 6, 7, 8, 9], time: 5, type: "V", id: 1032 },
        { name: "Joking Hazard", players: [2, 3, 4, 5, 6, 7, 8, 9], time: 5, type: "V", id: 1033 },
        { name: "Secret Hitler", players: [5, 6, 7, 8, 9, 10], time: 60, type: "V", id: 1034 },
        { name: "Arkham Horror", players: [1, 2, 3, 4, 5, 6, 7, 8], time: 210, type: "C", id: 1035 },
        { name: "Multipuzzle", players: [1], time: 10, type: "C", id: 1036 },
    ],    
    reducers: {
        addGame: (state, action) => {
            const newGame = {
                name: action.payload.name,
                players: action.payload.players,
                time: action.payload.time,
                type: action.payload.type,
                id: action.payload.id,
            };
            state.push(newGame);
        },
        deleteGame: (state, action) => {
            for (let i = 0; i < state.length; i++) {
                if ( state.id === action.payload.key) {
                    state.splice(i, 1);
                    break;
                };
            };
        },
    },
});

export const { addGame, deleteGame } = listSlice.actions;
export default listSlice.reducer;