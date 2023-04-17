import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPlatform, selectVideoDetails } from "../features/common/commonSlice";
import { dateFormat, numToTime } from "../helper";
import VideoPlayer from "./VideoPlayer";
import { requests } from "../helper/requests";
import axios from '../helper/axios';

function Popup(props) {
  const { data } = useSelector(selectVideoDetails);
  const type = useSelector(selectPlatform);

  const [similarVideos, setSimilarVideos] = useState();

  useEffect(()=>{
    const getSimilarVideos = async()=>{
      const response = await axios.get(requests.getSimilar(data.id, type));
      setSimilarVideos(response.data.results);
    }

    if(data && type){
      getSimilarVideos();
    }
  }, [data, type])


  return (
    <div className="modal" tabIndex="-1" id="videoDetails">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {data?.videos.results[0]?.key && (
              <VideoPlayer videoId={data?.videos.results[0]?.key} />
            )}

            <div className="p-3">
              <div className="row">
                <div className="col-lg-7">
                  <div className="py-2">
                    <h5>{data?.name || data?.title || data?.original_title}</h5>
                  </div>
                  <div className="d-flex align-items-center py-2">
                    {data?.release_date ? (
                      <p className="pe-2">{dateFormat(data?.release_date)}</p>
                    ) : (
                      <p className="pe-2">{dateFormat(data?.first_air_date)}</p>
                    )}

                    {data?.runtime ? (
                      <p>{numToTime(data?.runtime)}</p>
                    ) : (
                      <p>{numToTime(data?.episode_run_time)}</p>
                    )}
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="py-2">
                    {data?.genres.map((item) => {
                      return (
                        <span
                          key={item.id}
                          className="badge text-bg-danger p-2 me-2"
                        >
                          {item.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">

                </div>
              </div>        


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
