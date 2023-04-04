import React from 'react';
import headerImg from '../assets/header.webp';
function Header(props) {
    return (
        <div className='position-relative h-100 text-white'>
            <img className='header-img' src={headerImg} alt="header" />
            <div className='caption'>
                <h1 className='display-2 fw-semibold'>Gladiator</h1>
                <p className='fs-4'>When the Oyos threaten to destroy the Dahomey Kingdom, a formidable general begins training a new group of women warriors to defend their homeland.</p> 
            </div>
            <div className='header-vignette'></div>
        </div>
    );
}

export default Header;