import { useEffect, useState } from 'react';
import Favorites from '../../components/Favorites';
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
                <h2 className='titleFav'>Favoritos</h2>
                {myFavMovies.length > 0
                    ? myFavMovies.map((movie) => <Favorites movie={movie} key={movie.id} refresh={(movies: IMovie[]) => setMyFavMovies(movies)} />)
                    : <h3>Sem favoritos.</h3>}
            </div>
        </div>
    )
}

export default Favoritos;