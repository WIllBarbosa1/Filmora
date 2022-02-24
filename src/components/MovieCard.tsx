import React from 'react';
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
            <a className={styles.trailer} href={`https://www.youtube.com/results?search_query=trailer+${movie.nome}`} target='_blank' rel="noreferrer">Trailer</a>
        </div>
    )
}

export default MovieCard