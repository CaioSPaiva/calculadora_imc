import styles from './Header.module.css';

const Header = () => {

    return (
        <div className="container">
            <header className={styles.header}>Calculadora de IMC</header>
        </div>
    )
}

export default Header;