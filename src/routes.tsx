import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from "./components/Header";
import Favoritos from './pages/Favoritos';
import Home from './pages/Home';
import Movie from './pages/Movie';

type Props = {}

const Rotas = (props: Props) => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favoritos' element={<Favoritos />} />
                <Route path='/filme/:id' element={<Movie />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Rotas;