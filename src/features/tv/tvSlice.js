import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
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
        const response = axios.get(requests.netflixOriginals)
        console.log(response.data);
    })



export const tvSlice = createSlice({
    name: 'tv',
    initialState: initialState,
    reducers: {

    },
    extraReducers:(builder)=>{
    }
})


export default tvSlice.reducer;