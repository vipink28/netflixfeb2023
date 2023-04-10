import React from 'react';
import headerImg from '../assets/header.webp';
import Ratings from './Ratings';
import { truncateText } from '../helper';

function Header(props) {
    const { video } = props;

    


    return (
        <div className='position-relative h-100 text-white'>
            <img className='header-img' src={`https://image.tmdb.org/t/p/original/${video?.backdrop_path}`} alt="header" />
            <div className='caption'>
                <h1 className='display-2 fw-semibold'>{video?.name || video?.title || video?.original_title}</h1>
                <p className='fs-4'>
                    {truncateText(video?.overview, 150)}
                </p>
                <Ratings voteAverage={video?.vote_average} voteCount={video?.vote_count}/>
            </div>
            <div className='header-vignette'></div>
        </div>
    );
}

export default Header;