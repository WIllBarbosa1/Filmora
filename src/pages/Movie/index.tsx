import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MovieBanner from '../../components/MovieBanner';
import { IMovie } from '../../interfaces/IMovie';
import api from '../../services/api';

type Props = {}

const Movie = (props: Props) => {

    const [movie, setMovie] = useState<IMovie>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        async function loadMovie() {
            const { data } = await api.get(`${id}`);

            if (data.length === 0) {
                navigate('/');
            } else {
                setMovie(data);
            }
        }

        loadMovie();

    }, [id, navigate]);


    return (
        <div className='containerMovie'>
            {movie
                ? <MovieBanner movie={movie} />
                : <img className='loading' src='https://cdn.dribbble.com/users/1015854/screenshots/3625317/day289_popcorn.gif' alt='loading'></img>
            }
        </div>
    )
}

export default Movie;