import styles from "./style.module.scss";

import Arrow from "../images/Aerrow.svg";
import Remove1 from "../images/Photo-1-removebg-preview (1).png";
import Star from "../images/Star.svg";
import Remove2 from "../images/Photo-2-removebg-preview (1).png";
import Remove3 from "../images/Photo-3-removebg-preview (1).png";
import Remove from "../images/Photo-removebg-preview (1).png";

function BannerOffer() {
  return (
    <div className={styles.offer__organic}>
      <div className={`${styles.offer__organicc} ${styles.container} `}>
        <div className={styles.offer__textsection}>
          <div className={styles.organic__textsection}>
            <p className={styles.offer__theword}>Offer</p>
            <p className={styles.weord__organic}>We Offer Organic For You</p>
          </div>
          <div className={styles.explore__button}>
            <p className={styles.explore__word}>
              Explore Now
              <span>
                <img src={Arrow} alt="" className={styles.narrow} />
              </span>
            </p>
          </div>
        </div>
        <div className={styles.breanches}>
          <div className={styles.typeof__products}>
            <div className={styles.food__types}>
              <div className={styles.vegatebles__button}>
                <p className={styles.vegatebles__textword}>vegatebles</p>
              </div>
              <img src={Remove1} alt="" className={styles.vegatevle__img} />
              <p className={styles.calebrese}>Calabrese Broccoli</p>
              <div className={styles.broccoli__prise}>
                <p className={styles.prise__number}>
                  <span className={styles.overflow__prise}>$20.00</span>$13.00
                </p>
                <img src={Star} alt="" className={styles.stars__img} />
              </div>
            </div>
          </div>
          <div className={styles.typeof__products}>
            <div className={styles.food__types}>
              <div className={styles.vegatebles__button}>
                <p className={styles.vegatebles__textword}>vegatebles</p>
              </div>
              <img src={Remove2} alt="" className={styles.vegatevle__img} />
              <p className={styles.calebrese}>Calabrese Broccoli</p>
              <div className={styles.broccoli__prise}>
                <p className={styles.prise__number}>
                  <span className={styles.overflow__prise}>$20.00</span>$13.00
                </p>
                <img src={Star} alt="" className={styles.stars__img} />
              </div>
            </div>
          </div>
          <div class={styles.typeof__products}>
            <div className={styles.food__types}>
              <div className={styles.vegatebles__button}>
                <p className={styles.vegatebles__textword}>vegatebles</p>
              </div>
              <img src={Remove3} alt="" className={styles.vegatevle__img} />
              <p className={styles.calebrese}>Calabrese Broccoli</p>
              <div className={styles.broccoli__prise}>
                <p className={styles.prise__number}>
                  <span className={styles.overflow__prise}>$20.00</span>$13.00
                </p>
                <img src={Star} alt="" className={styles.stars__img} />
              </div>
            </div>
          </div>
          <div className={styles.typeof__products}>
            <div className={styles.food__types}>
              <div className={styles.vegatebles__button}>
                <p className={styles.vegatebles__textword}>vegatebles</p>
              </div>
              <img src={Remove} alt="" className={styles.vegatevle__img} />
              <p className={styles.calebrese}>Calabrese Broccoli</p>
              <div className={styles.broccoli__prise}>
                <p className={styles.prise__number}>
                  <span className={styles.overflow__prise}>$20.00</span>$13.00
                </p>
                <img src={Star} alt="" className={styles.stars__img} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerOffer;
