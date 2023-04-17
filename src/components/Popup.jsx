import React from "react";
import { useSelector } from "react-redux";
import { selectVideoDetails } from "../features/common/commonSlice";
import { dateFormat, numToTime } from "../helper";

function Popup(props) {
  const { data } = useSelector(selectVideoDetails);

  return (
    <div className="modal" tabIndex="-1" id="videoDetails">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
          {
            data?.videos.results[0]?.key ? 
            <div class="ratio ratio-16x9">
              <iframe
                src={`https://www.youtube.com/embed/${data?.videos.results[0].key}?rel=0`}
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div> : ""
          }
            

            <div className="py-2"> 
              <h5>{data?.name || data?.title || data?.original_title}</h5>
            </div>

            <div className="d-flex align-items-center py-2">
            
            {
              data?.release_date ?
              <p className="pe-2">{dateFormat(data?.release_date)}</p> : <p className="pe-2">{dateFormat(data?.first_air_date)}</p>
            }

            {
              data?.runtime ?
              <p>{numToTime(data?.runtime)}</p> : <p>{numToTime(data?.episode_run_time)}</p>
            }
            </div>
            <div className="py-2">
              {
                data?.genres.map((item)=>{
                  return <span key={item.id} className="badge text-bg-danger p-2 me-2">{item.name}</span>
                })
              }
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
