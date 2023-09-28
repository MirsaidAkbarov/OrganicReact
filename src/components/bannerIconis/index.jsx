import styles from "./style.module.scss";

function BannerIconis() {
  return (
    <div className={styles.iconis}>
      <div className={`${styles.freandly__iconis} ${styles.container}`}>
        <p className={styles.eco__freandly}>Eco Friendly</p>
        <p className={styles.econis__isfreandly}>
          Econis is a Friendly Organic Store
        </p>
        <div className={styles.ourcompany}>
          <p className={styles.start__withus}>Start with Our Company First</p>
          <p className={styles.setup__comment}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
          <div className={styles.ourcompany}>
            <p className={styles.start__withus}>Start with Our Company First</p>
            <p className={styles.setup__comment}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
            <div className={styles.ourcompany}>
              <p className={styles.start__withus}>
                Start with Our Company First
              </p>
              <p className={styles.setup__comment}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerIconis;
