import styles from "./style.module.scss";

function BannerEmail() {
  return (
    <div className={`${styles.all__emailmessage} ${styles.container}`}>
      <div className={styles.email__message}>
        <div className={styles.subscribe}>
          <p className={styles.subscribe__word}>Subscribe to our Newsletter</p>
        </div>
        <div className={styles.email__sending}>
          <input type="text" className={styles.your__adress} />
          <div className={styles.subscribe__button}>
            <p className={styles.subscribe__textword}>Subscribe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerEmail;
