import styles from "./style.module.scss";

import photo4 from "../images/Photo__4_-removebg-preview.png";
import arrow from "../images/Aerrow.svg";

function BannerExplore() {
  return (
    <div className={styles.explore__main}>
      <div className={`${styles.explore__now} ${styles.container}`}>
        <div className={styles.explore__then}>
          <div className={styles.explore__title}>
            <p className={styles.natural__food}>100% Natural Food</p>
            <p className={styles.healthy__live}>
              Choose the best healthier way of life
            </p>
          </div>
          <div className={styles.explore__button1}>
            <p className={styles.explore__word1}>
              Explore Now
              <span>
                <img src={arrow} className={styles.narrow} />
              </span>
            </p>
          </div>
        </div>
        <div className={styles.second__allimg}>
          <img src={photo4} className={styles.second__image} />
        </div>
      </div>
    </div>
  );
}

export default BannerExplore;
