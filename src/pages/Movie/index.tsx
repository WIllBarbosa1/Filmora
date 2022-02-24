import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieBanner from '../../components/MovieBanner';
import { IMovie } from '../../interfaces/IMovie';
import api from '../../services/api';

type Props = {}

const Movie = (props: Props) => {

    const [movie, setMovie] = useState<IMovie>();
    const { id } = useParams();

    useEffect(() => {
        api.get(`${id}`).then(({ data }) => setMovie(data));
    }, [id]);


    return (
        <div className='containerMovie'>
            {movie &&
                <MovieBanner movie={movie} />
            }
        </div>
    )
}

export default Movie;