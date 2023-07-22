import { createSlice } from "@reduxjs/toolkit";

const planetSlice = createSlice({
    name: "planets",
    initialState:{plant_List:[]},
    reducers: {
        setPlanets: (state, action) =>{
            state.plant_List = [...state.plant_List, action.payload];
        }, 
        removePlanets: (state, action)=>{
            const planestId = action.payload
            state.plant_List = state.plant_List.filter(planets => planets.id !== planestId);
        }
    },
})
export const {setPlanets, removePlanets} = planetSlice.actions;
export default planetSlice.reducer;