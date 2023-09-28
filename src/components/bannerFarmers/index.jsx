import styles from "./style.module.scss";

import Photo1 from "../images/Photo (1).svg";
import VeganFood from "../images/Vegan Food.svg";
import Malbox from "../images/Mailbox Quality.svg";
import Arrow from "../images/Aerrow.svg";

function BannerFarm() {
  return (
    <div className={styles.allfarmers__working}>
      <div className={`${styles.farmers__working} ${styles.container}`}>
        <div className={styles.fruits}>
          <img src={Photo1} alt="" className={styles.fruits__img} />
        </div>
        <div className={styles.about__us}>
          <div className={styles.about__ustitle}>
            <p className={styles.aboutus__word}>About Us</p>
            <p className={styles.we__believe}>
              We Believe in Working Accredited Farmers
            </p>
            <p className={styles.lorem__words}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className={styles.organic__foodonly}>
            <div className={styles.food}>
              <div className={styles.plate}>
                <img src={VeganFood} alt="" className={styles.plate__img} />
              </div>
              <div className={styles.food__organic}>
                <p className={styles.organic__speech}>Organic Foods Only</p>
                <p className={styles.symply__organic}>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className={styles.food}>
              <div className={styles.plate}>
                <img src={Malbox} alt="" className={styles.plate__img} />
              </div>
              <div className={styles.food__organic}>
                <p className={styles.organic__speech}>Quality Standards</p>
                <p className={styles.symply__organic}>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className={styles.organic__button}>
              <p className={styles.organic__textword}>Explore More</p>

              <div>
                <img src={Arrow} alt="" className={styles.narrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerFarm;
