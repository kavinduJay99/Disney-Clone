import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key="bdfc5380d1ce00d337a15922619b1714"
//https://api.themoviedb.org/3/trending/all/day?api_key=bdfc5380d1ce00d337a15922619b1714
const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);


export default {
    getTrendingVideos
}