import React, { useEffect, useState } from 'react';
import { requests } from '../helper/requests';
import axios from '../helper/axios';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

function BrowseByGenre(props) {
    const {platform, genrename, genreid} = useParams();
    const [videoByGenre, setVideoByGenre]= useState([]);
    useEffect(()=>{
        const getVideoByGenre=async()=>{
            const response = await axios.get(requests.getByGenre(genreid, platform));
            setVideoByGenre(response.data.results);
        }
        getVideoByGenre();
    }, [platform, genreid])
    return (
        <div className='pt-5 mt-3 container-fluid'>
            <h3 className='text-white mb-4'>{genrename}</h3>
            <div className="row gy-4">
                {
                    videoByGenre.map((item)=>{
                        return(
                            <div key={item.id} className="col-lg-3">
                                <Card video={item} type={platform}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default BrowseByGenre;