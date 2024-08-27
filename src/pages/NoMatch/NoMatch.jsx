import styles from './style.module.scss';
import cats from './constants';

const NoMatch = () => (
  <>
    <div className={styles.noMatch}>
      <h1>Sorry, there is nothing here</h1>
      <h4>But you can look at these cute cat gifs: </h4>
    </div>
    <div className={styles.noMatch}>
      {cats.map(cat => (
        <img
          key={cat.id}
          className={styles.noMatch__img}
          src={cat.src}
          alt="cute cat"
        />
      ))}
    </div>
  </>
);
export default NoMatch;
