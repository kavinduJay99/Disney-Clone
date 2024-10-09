import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  return (
    <div>
        <img src={IMAGE_BASE_URL+movie.poster_path} className='w-[150px] md:w-[150px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 ' />
    </div>
  )
}

export default MovieCard