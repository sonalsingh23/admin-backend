import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "weather",
    initialState: {
        city: "",
        weatherData: {},
    },

    reducers: {
        saveCity: (posts, action) => {
            posts.city = action.payload;
        },
        saveWeatherData: (posts, action) => {
            posts.weatherData = action.payload;
        },
    },
});

export default slice.reducer;

export const { saveCity, saveWeatherData } = slice.actions;
