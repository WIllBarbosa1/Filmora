import { Link } from 'react-router-dom';
import { IMovie } from '../interfaces/IMovie';
import styles from './MovieCard.module.css';

interface Props {
    movie: IMovie;
}

const MovieCard = ({ movie }: Props) => {

    return (
        <article className={styles.card}>
            <div className={styles.contentWraper}>
                <h2 className={styles.title}>{movie.nome}</h2>
                <img className={styles.poster} src={movie.foto} alt={movie.nome} />
            </div>
            <Link className={styles.acess} to={`/filme/${movie.id}`} >Acessar</Link>
        </article>
    )
}

export default MovieCard