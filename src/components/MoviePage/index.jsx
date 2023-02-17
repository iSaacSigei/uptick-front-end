import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from '../HomePage';

const OMDbAPI = () => {
  const [movies, setMovies] = useState([]);
  const [moviesFetched, setMoviesFetched] = useState(false);

  const fetchMovies = async () => {
    const api_key = '2a90d0ae';
    const num_movies = 10;
    const imdb_ids = [];

    while (imdb_ids.length < num_movies) {
      const random_word_response = await axios.get('https://random-word-api.herokuapp.com/word?number=1');
      const random_word = random_word_response.data[0];

      const search_url = `http://www.omdbapi.com/?apikey=${api_key}&s=${random_word}&type=movie&r=json`;
      const search_response = await axios.get(search_url);
      const search_results = search_response.data.Search;

      if (search_results) {
        const movie = search_results[Math.floor(Math.random() * search_results.length)];
        const imdb_id = movie.imdbID;
        if (!imdb_ids.includes(imdb_id)) {
          imdb_ids.push(imdb_id);
        }
      }
    }

    const movie_promises = imdb_ids.map(async (imdb_id) => {
      const movie_url = `http://www.omdbapi.com/?apikey=${api_key}&i=${imdb_id}&r=json`;
      const movie_response = await axios.get(movie_url);
      const movie_data = movie_response.data;
      return {
        title: movie_data.Title,
        year: movie_data.Year,
        genre: movie_data.Genre.split(',')[0],
        poster: movie_data.Poster
      };
    });

    Promise.all(movie_promises).then((movie_details) => {
      setMovies(movie_details);
      setMoviesFetched(true);
    });
  };

  useEffect(() => {
    if (!moviesFetched) {
      fetchMovies();
    }
  }, [moviesFetched]);

  const handleFilter = (genre, year) => {
    console.log(year)
    console.log(genre)
    const filteredMovies = movies.filter(movie => {
      if (movie.genre.includes(genre)||movie.year.includes(year)){
        return movie
      }
      
    });
    setMovies(filteredMovies.slice(0, 10));
  }

  return (
    <div className='bg-black'>
      {movies.length > 0 ? (
        <HomePage movies={movies} handleFilter={handleFilter} />
      ) : (
        <div className='container'>
          <div className='text-white text-2xl'>Loading</div>
          <div className='dot dot-1'></div>
          <div className='dot dot-2'></div>
          <div className='dot dot-3'></div>
        </div>
      )}
    </div>
  );
};

export default OMDbAPI;
