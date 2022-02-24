import styles from './Footer.module.css';

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className={styles.footer}>
            <p>Feito em 2022 por: <a href='https://github.com/WIllBarbosa1' target='_blank' rel="noreferrer" >?</a></p>
        </footer>
    )
}

export default Footer;