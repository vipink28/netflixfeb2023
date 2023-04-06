import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNfOriginals } from '../features/tv/tvSlice';
import Row from '../components/Row';
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
            <div className='container-fluid py-3'>
                <Row/>
                <Row />
            </div>
        </>
    );
}

export default Homescreen;