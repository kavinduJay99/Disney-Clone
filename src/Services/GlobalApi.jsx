import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key="bdfc5380d1ce00d337a15922619b1714"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

//https://api.themoviedb.org/3/trending/all/day?api_key=bdfc5380d1ce00d337a15922619b1714
const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)


export default {
    getTrendingVideos,
    getMovieByGenreId
}