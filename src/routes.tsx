import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from "./components/Header";
import Home from './pages/Home';

type Props = {}

const Rotas = (props: Props) => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Rotas;