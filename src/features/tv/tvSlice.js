import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit"
import axios from '../../helper/axios';
import { requests } from "../../helper/requests";
const initialState = {
    nfOriginals:{
        status: "idle",
        error: null,
        data: null
    }
}

export const fetchNetflixOriginals = createAsyncThunk(
    'tv/fetchNetflixOriginals',
    async () => {
        const response = await axios.get(requests.netflixOriginals)
        return response.data;
    })



export const tvSlice = createSlice({
    name: 'tv',
    initialState: initialState,
    reducers: {

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchNetflixOriginals.pending, (state) => {
            state.nfOriginals.status = 'loading';
        })
        .addCase(fetchNetflixOriginals.fulfilled, (state, action)=>{
            state.nfOriginals.status = "success";
            state.nfOriginals.data = action.payload;
        })
        .addCase(fetchNetflixOriginals.rejected, (state, action)=>{
            state.nfOriginals.status = "failed";
            state.nfOriginals.error = action.error.message;
        })
    }
})

export const selectNfOriginals = (state) => state.tv.nfOriginals;

export default tvSlice.reducer;