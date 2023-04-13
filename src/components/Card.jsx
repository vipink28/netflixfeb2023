import React from "react";
import gladiator from '../assets/header.webp';
import { useDispatch } from "react-redux";
import { fetchVideoDetails } from "../features/common/commonSlice";

function Card(props) {
  const {video, type} = props;
  const dispatch = useDispatch();
  const getDetails=()=>{
    dispatch(fetchVideoDetails({type: type, id: video.id}))
  }
  return (
    <div className="card h-100" data-bs-toggle="modal" data-bs-target="#videoDetails" onClick={getDetails}>
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
