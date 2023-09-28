import styles from "./style.module.scss";

function BannerJuice() {
  return (
    <div className={styles.juice__all}>
      <div className={`${styles.juice} ${styles.container}`}>
        <div className={styles.organic__juicetable}>
          <div className={styles.juicetable__button}>
            <p className={styles.juicetable__textword}>Organic Juice</p>
          </div>
        </div>
        <div className={styles.organic__juicetable1}>
          <div className={styles.juicetable__button}>
            <p className={styles.juicetable__textword}>Organic Food</p>
          </div>
        </div>
        <div className={styles.organic__juicetable2}>
          <div className={styles.juicetable__button}>
            <p className={styles.juicetable__textword}>Nuts Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerJuice;
