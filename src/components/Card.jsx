import React from "react";
import gladiator from '../assets/header.webp';

function Card(props) {
  const {video} = props;
  return (
    <div className="card h-100">
      <div class="card">
        <img src={`https://image.tmdb.org/t/p/original/${video?.backdrop_path}`} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{video?.name || video?.title || video?.original_title}</h5>        
        </div>
      </div>
    </div>
  );
}

export default Card;
