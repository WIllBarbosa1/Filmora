import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import ico from '../assets/icon.png';

type Props = {}

const Header = (props: Props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logoWreper}>
                <img className={styles.ico} src={ico} alt="popcorn" />
                <h1 className={styles.title}>Filmora</h1>
            </div>
            <nav>
                <Link className={styles.link} to={'/'}>Favoritos</Link>
            </nav>
        </header>
    )
}

export default Header