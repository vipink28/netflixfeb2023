import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../helper/axios';
import { requests } from "../../helper/requests";
const initialState = {
    popularMovies:{
        status: "idle",
        error: null,
        data: null
    }
}

export const fetchPopularMovies = createAsyncThunk(
    'movie/fetchPopularMovies',
    async () => {
        const response = await axios.get(requests.getPopularMovies)
        return response.data;
    })



export const movieSlice = createSlice({
    name: 'movie',
    initialState: initialState,
    reducers: {

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPopularMovies.pending, (state) => {
            state.popularMovies.status = 'loading';
        })
        .addCase(fetchPopularMovies.fulfilled, (state, action)=>{
            state.popularMovies.status = "success";
            state.popularMovies.data = action.payload;
        })
        .addCase(fetchPopularMovies.rejected, (state, action)=>{
            state.popularMovies.status = "failed";
            state.popularMovies.error = action.error.message;
        })
    }
})

export const selectPopularMovies = (state) => state.movie.popularMovies;

export default movieSlice.reducer;