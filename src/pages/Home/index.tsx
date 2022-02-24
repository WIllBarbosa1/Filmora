import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';
import { IMovie } from '../../interfaces/IMovie';
import api from '../../services/api';

type Props = {}

const Home = (props: Props) => {

  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    api.get('/').then(({ data }) => setMovies(data));
  }, []);


  return (
    <div className="container">
      <h2 className='title'>Filmes</h2>
      {movies.length > 0
        ? movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        : <img className='loading' src='https://cdn.dribbble.com/users/1015854/screenshots/3625317/day289_popcorn.gif' alt='loading'></img>
      }
    </div>
  )
}

export default Home