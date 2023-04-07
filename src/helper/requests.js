const API_KEY = '0d8ab7cff2692bd014bb25fca16d7158';

export const requests = {
    netflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    getPopular: (type)=>{return `/${type}/popular?api_key=${API_KEY}&language=en-US&page=1`},    
    getTopRated: (type)=>{return `/${type}/top_rated?api_key=${API_KEY}&language=en-US&page=1`}
}


export const key= {
    tv: "tv",
    movie: "movie"
}