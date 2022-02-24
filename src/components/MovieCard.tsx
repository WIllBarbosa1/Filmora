import { Link } from 'react-router-dom';
import { IMovie } from '../interfaces/IMovie';
import styles from './MovieCard.module.css';

interface Props {
    movie: IMovie;
}

const MovieCard = ({ movie }: Props) => {

    return (
        <div className={styles.card}>
            <div className={styles.contentWraper}>
                <h2 className={styles.title}>{movie.nome}</h2>
                <div className={styles.posterWraper}>
                    <img className={styles.poster} src={movie.foto} alt={movie.nome} />
                </div>
                <p> <span className={styles.sinopse}>Sinopse: </span> {movie.sinopse}</p>
            </div>
            <Link className={styles.trailer} to={`/filme/${movie.id}`} >Acessar</Link>
        </div>
    )
}

export default MovieCard