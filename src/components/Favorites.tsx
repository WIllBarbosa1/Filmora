import { Link, useNavigate } from 'react-router-dom';
import { IMovie } from '../interfaces/IMovie';
import styles from './Favorites.module.css';

type Props = {
    movie: IMovie;
    refresh(movies: IMovie[]): void;
}

const Favorites = ({ movie, refresh }: Props) => {

    const removeMovie = () => {
        const myMovies: string | null = localStorage.getItem('movies');
        const saveMovies: IMovie[] = myMovies ? JSON.parse(myMovies) : [];
        const newFav = saveMovies.filter((favMovie) => movie.id !== favMovie.id);
        localStorage.setItem('movies', JSON.stringify(newFav));
        refresh(newFav);
    }

    return (
        <div className={styles.container}>
            <h3>{movie.nome}</h3>
            <div>
                <button className={styles.button} onClick={removeMovie}>Desfavoritar</button>
                <Link className={styles.button} to={`/filme/${movie.id}`}>Detalhes</Link>
            </div>
        </div>
    )
}

export default Favorites;