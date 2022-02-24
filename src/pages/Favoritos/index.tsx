import { useEffect, useState } from 'react';
import { IMovie } from '../../interfaces/IMovie';

type Props = {}

const Favoritos = (props: Props) => {

    const [myFavMovies, setMyFavMovies] = useState<IMovie[]>([]);

    useEffect(() => {

        const myMovies: string | null = localStorage.getItem('movies');
        const saveMovies: IMovie[] = myMovies ? JSON.parse(myMovies) : [];

        setMyFavMovies(saveMovies);
    }, []);

    return (
        <div className='containerFav'>
            <div className='content'>
                <h2>Favoritos</h2>
                {myFavMovies.length > 0 && myFavMovies.map((movie) =>
                    <div key={movie.id}>
                        <h3>{movie.nome}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Favoritos;