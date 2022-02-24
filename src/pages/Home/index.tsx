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
      {movies.length > 0 &&
        movies.map((movie) => <MovieCard movie={movie} key={movie.id} />
        )
      }
    </div>
  )
}

export default Home