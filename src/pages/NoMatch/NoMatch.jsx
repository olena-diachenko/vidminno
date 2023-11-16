import styles from './style.module.scss';

const NoMatch = () => (
    <>
        <div className={styles.noMatch}>
            <h1>Sorry, there is nothing here</h1>
            <h4>But you can look at these cute cat gifs: </h4>
        </div>
        <div className={styles.noMatch}>
            <img
                className={styles.noMatch__img}
                src="https://diachenko.me/visitpay/1.webp"
                alt="cute cat"
            />
            <img
                className={styles.noMatch__img}
                src="https://diachenko.me/visitpay/2.webp"
                alt="cute cat"
            />
            <img
                className={styles.noMatch__img}
                src="https://diachenko.me/visitpay/3.webp"
                alt="cute cat"
            />
        </div>
    </>
);
export default NoMatch;
