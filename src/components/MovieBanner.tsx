import { useEffect } from 'react';
import { useState } from 'react';
import { IMovie } from '../interfaces/IMovie';
import styles from './MovieBanner.module.css';

interface Props {
    movie: IMovie;
}

const MovieBanner = ({ movie }: Props) => {

    const [hasMovie, setHasMovie] = useState<boolean>(false);
    const [MyFavMovies, setMyFavMovies] = useState<IMovie[]>([]);

    useEffect(() => {

        const { id } = movie;
        const myMovies: string | null = localStorage.getItem('movies');
        const saveMovies: IMovie[] = myMovies ? JSON.parse(myMovies) : [];

        const hasMyMovie: boolean = saveMovies.some((saveMovie: IMovie) => saveMovie.id === id);

        setMyFavMovies(saveMovies);
        setHasMovie(hasMyMovie);

    }, [movie]);

    const handleMovie = () => {

        if (hasMovie) {
            const newFav = MyFavMovies.filter((favMovie) => movie.id !== favMovie.id);
            localStorage.setItem('movies', JSON.stringify(newFav));
            setMyFavMovies(newFav);
            setHasMovie(false);
        } else {
            MyFavMovies.push(movie);
            localStorage.setItem('movies', JSON.stringify(MyFavMovies));
            setHasMovie(true);
        }

    }

    return (
        <article className={styles.card}>
            <div className={styles.contentWraper}>
                <h2 className={styles.title}>{movie.nome}</h2>
                <div className={styles.posterWraper}>
                    <img className={styles.poster} src={movie.foto} alt={movie.nome} />
                </div>
                <p> <span className={styles.sinopse}>Sinopse: </span> {movie.sinopse}</p>
            </div>
            <a className={styles.trailer} href={`https://www.youtube.com/results?search_query=trailer+${movie.nome}`} target='_blank' rel="noreferrer">Trailer</a>
            <button className={styles.trailer} onClick={handleMovie}>{hasMovie ? 'Desfavoritar' : 'Favoritar'}</button>
        </article>
    )
}

export default MovieBanner;