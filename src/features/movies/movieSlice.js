import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
};

const movieSlice = createSlice ({
    name:  "movie",
    initialState,
    reducer: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
    },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies.movies;