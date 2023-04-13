import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { requests } from "../helper/requests";
import axios from "../helper/axios";

function Browse(props) {
  const { platform } = useParams();
  const dispatch = useDispatch();

  const [videoByRating, setVideoByRating] = useState();
  useEffect(() => {
    const getVideoByRating = async () => {
      const response = await axios.get(requests.discoverByRating(platform));
      setVideoByRating(response.data.results);
    };

    getVideoByRating();
  }, [platform]);

  return (
    <div className="container-fluid">
      <div className="row">
        {videoByRating?.map((item) => {
          return (
            <div key={item.id} className="col-lg-3">
              <Card video={item} type={platform}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Browse;
