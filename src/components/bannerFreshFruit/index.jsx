import styles from "./style.module.scss";

function BannerFreshFruit() {
  return (
    <div className={`${styles.fresh__fruit} ${styles.container}`}>
      <div className={styles.get__garden}>
        <p className={styles.natural}>Natural!!</p>
        <p className={styles.garden__word}>Get Garden Fresh Fruits</p>
      </div>
      <div className={styles.i0__percent}>
        <div className={styles.get__offer}>
          <p className={styles.offer}>Offer!!</p>
          <p className={styles.vegatebles__word}>Get Garden Fresh Fruits</p>
        </div>
      </div>
    </div>
  );
}

export default BannerFreshFruit;
