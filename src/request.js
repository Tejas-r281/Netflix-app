const API_KEY= "7b34dacdf4309d45bcfe6b218078bbc5";
const requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginls:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`discover/movie?api=${API_KEY}&with_genres=28`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`
}

export default requests;