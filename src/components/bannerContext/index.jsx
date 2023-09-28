import styles from "./style.module.scss";

import Arrow from "../images/Aerrow.svg";
import Vector from "../images/Vector.svg";

function BannerContext() {
  return (
    <div className={`${styles.weekly__contex} ${styles.container}`}>
      <div className={styles.news}>
        <div className={styles.news__title}>
          <p className={styles.news__text}>News</p>
          <p className={styles.weekly__discover}>
            Discover weekly content about organic food, & more
          </p>
        </div>
        <div className={styles.morenews__button}>
          <p className={styles.morenews__textword}>
            More News
            <span>
              <img src={Arrow} alt="" className={styles.narrow} />
            </span>
          </p>
        </div>
      </div>

      <div className={styles.news__chat}>
        <div className={styles.chat__box}>
          <div className={styles.november}>25 nov</div>
          <div className={styles.benefits}>
            <p className={styles.byrachi}>
              <span className={styles.humanvector}>
                <img src={Vector} alt="" />
              </span>
              By Rachi Card
            </p>
            <p className={styles.vitamin__d}>
              The Benefits of Vitamin D & How to Get It
            </p>
            <p className={styles.vitamind__text}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
            <div className={styles.explore__button}>
              <p className={styles.explore__word}>
                Read More
                <span>
                  <img src={Arrow} alt="" className={styles.narrow} />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.chat__box1}>
          <div className={styles.november}>25 nov</div>
          <div className={styles.benefits}>
            <p className={styles.byrachi}>
              <span className={styles.humanvector}>
                <img src={Vector} alt="" />
              </span>
              By Rachi Card
            </p>
            <p className={styles.vitamin__d}>
              The Benefits of Vitamin D & How to Get It
            </p>
            <p className={styles.vitamind__text}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
            <div className={styles.explore__button}>
              <p className={styles.explore__word}>
                Read More
                <span>
                  <img src={Arrow} alt="" className={styles.narrow} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerContext;
