const API_KEY = "f7bb571a677ead798b001ba6e48dac69";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=tr-TR`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=tr-TR&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=tr-TR`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=tr-TR&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=tr-TR&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=tr-TR&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=tr-TR&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=tr-TR&with_genres=99`,
};

export default request;
