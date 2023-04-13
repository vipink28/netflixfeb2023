import React, { useEffect } from 'react';
import headerImg from '../assets/header.webp';
import Ratings from './Ratings';
import { dateFormat, truncateText } from '../helper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderVideo, selectHeaderVideo } from '../features/common/commonSlice';

function Header(props) {
    const { video } = props;
    const details = useSelector(selectHeaderVideo);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(video){
            dispatch(fetchHeaderVideo({type: "tv", id: video?.id}))       
        }        
    }, [video])


    return (
        <div className='position-relative h-100 text-white'>
            <img className='header-img' src={`https://image.tmdb.org/t/p/original/${video?.backdrop_path}`} alt="header" />
            <div className='caption'>
                <h1 className='display-2 fw-semibold'>{truncateText(details.data?.name || details.data?.title || details.data?.original_title, 30)}</h1>
                { details.data?.first_air_date ? 
                <p className='fs-4'>({dateFormat(details.data?.first_air_date)})</p> : null}
                
                <p className='fs-4'>
                    {truncateText(details.data?.overview, 150)}
                </p>
                <p>
                    {
                        details.data?.genres.map((item)=>{
                            return <span key={item.id} className="badge text-bg-danger p-2 me-2">{item.name}</span>
                        })
                    }
                </p>


                <Ratings voteAverage={details.data?.vote_average} voteCount={details.data?.vote_count}/>
            </div>
            <div className='header-vignette'></div>
        </div>
    );
}

export default Header;