import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNfOriginals } from '../features/tv/tvSlice';
function Homescreen(props) {
    const nfOriginals = useSelector(selectNfOriginals);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
    }, [])
    const random = Math.floor(Math.random() * nfOriginals.data?.results.length);
    return (
        <>
            <Header video={nfOriginals.data?.results[random]} />
        </>
    );
}

export default Homescreen;