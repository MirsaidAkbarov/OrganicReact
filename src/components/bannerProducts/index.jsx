import styles from "./style.module.scss";

import remove from "../images/Photo-removebg-preview.png";
import star from "../images/Star.svg";
import remove1 from "../images/Photo-1-removebg-preview.png";
import remove2 from "../images/Photo-2-removebg-preview.png";
import remove3 from "../images/image_13-removebg-preview.png";
import remove4 from "../images/image_14-removebg-preview.png";
import remove5 from "../images/Photo-3-removebg-preview.png";
import remove6 from "../images/Photo-4-removebg-preview.png";
import remove7 from "../images/Photo-5-removebg-preview.png";
import arrow from "../images/Aerrow.svg";

function BannerProducts() {
  return (
    <div className={`${styles.products} ${styles.container}`}>
      <div className={styles.categories}>
        <p className={styles.category__text}>Categories</p>
        <p className={styles.category__products}>Our Products</p>
      </div>

      <div className={styles.type__allproducts}>
        <div className={styles.typeof__products}>
          <div className={styles.food__types}>
            <div className={styles.vegatebles__button}>
              <p className={styles.vegatebles__textword}>vegatebles</p>
            </div>
            <img src={remove} alt="" className={styles.vegatevle__img} />
            <p className={styles.calebrese}>Calabrese Broccoli</p>
            <div className={styles.broccoli__prise}>
              <p className={styles.prise__number}>
                <span className={styles.overflow__prise}>$20.00</span>$13.00
              </p>
              <img src={star} alt="" className={styles.stars__img} />
            </div>
          </div>
        </div>

        <div className={styles.typeof__products}>
          <div className={styles.food__types}>
            <div className={styles.vegatebles__button}>
              <p className={styles.vegatebles__textword}>Fresh</p>
            </div>
            <img src={remove1} alt="" className={styles.vegatevle__img} />
            <p className={styles.calebrese}>Fresh Banana Fruites</p>
            <div className={styles.broccoli__prise}>
              <p className={styles.prise__number}>
                <span className={styles.overflow__prise}>$20.00</span>$13.00
              </p>
              <img src={star} alt="" className={styles.stars__img} />
            </div>
          </div>
        </div>

        <div className={styles.typeof__products}>
          <div className={styles.food__types}>
            <div className={styles.vegatebles__button}>
              <p className={styles.vegatebles__textword}>Millets</p>
            </div>
            <img src={remove2} alt="" className={styles.vegatevle__img} />
            <p className={styles.calebrese}>White Nuts</p>
            <div className={styles.broccoli__prise}>
              <p className={styles.prise__number}>
                <span className={styles.overflow__prise}>$20.00</span>$13.00
              </p>
              <img src={star} alt="" className={styles.stars__img} />
            </div>
          </div>
        </div>

        <div className={styles.typeof__products}>
          <div className={styles.food__types}>
            <div className={styles.vegatebles__button}>
              <p className={styles.vegatebles__textword}>vegatebles</p>
            </div>
            <img src={remove3} alt="" className={styles.vegatevle__img} />
            <p className={styles.calebrese}>Vegan Red Tomato</p>
            <div className={styles.broccoli__prise}>
              <p className={styles.prise__number}>
                <span className={styles.overflow__prise}>$20.00</span>$13.00
              </p>
              <img src={star} alt="" className={styles.stars__img} />
            </div>
          </div>
        </div>

        <div className={styles.typeof__products}>
          <div className={styles.food__types}>
            <div className={styles.vegatebles__button}>
              <p className={styles.vegatebles__textword}>Health</p>
            </div>
            <img src={remove4} alt="" className={styles.vegatevle__img} />
            <p className={styles.calebrese}>Mung Bean</p>
            <div className={styles.broccoli__prise}>
              <p className={styles.prise__number}>
                <span className={styles.overflow__prise}>$20.00</span>$13.00
              </p>
              <img src={star} alt="" className={styles.stars__img} />
            </div>
          </div>
        </div>

        <div className={styles.typeof__products}>
          <div className={styles.food__types}>
            <div className={styles.vegatebles__button}>
              <p className={styles.vegatebles__textword}>Nuts</p>
            </div>
            <img src={remove5} alt="" className={styles.vegatevle__img} />
            <p className={styles.calebrese}>Brown Hazelnut</p>
            <div className={styles.broccoli__prise}>
              <p className={styles.prise__number}>
                <span className={styles.overflow__prise}>$20.00</span>$13.00
              </p>
              <img src={star} alt="" className={styles.stars__img} />
            </div>
          </div>
        </div>

        <div className={styles.typeof__products}>
          <div className={styles.food__types}>
            <div className={styles.vegatebles__button}>
              <p className={styles.vegatebles__textword}>Fresh</p>
            </div>
            <img src={remove6} alt="" className={styles.vegatevle__img} />
            <p className={styles.calebrese}>Eggs</p>
            <div className={styles.broccoli__prise}>
              <p className={styles.prise__number}>
                <span className={styles.overflow__prise}>$20.00</span>$13.00
              </p>
              <img src={star} alt="" className={styles.stars__img} />
            </div>
          </div>
        </div>

        <div className={styles.typeof__products}>
          <div className={styles.food__types}>
            <div className={styles.vegatebles__button}>
              <p className={styles.vegatebles__textword}>Fresh</p>
            </div>
            <img src={remove7} alt="" className={styles.vegatevle__img} />
            <p className={styles.calebrese}>Zelco Suji Elaichi Rusk</p>
            <div className={styles.broccoli__prise}>
              <p className={styles.prise__number}>
                <span className={styles.overflow__prise}>$20.00</span>$13.00
              </p>
              <img src={star} alt="" className={styles.stars__img} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.show__morebutton}>
        <div className={styles.organic__button}>
          <p className={styles.organic__textword}>Explore More</p>

          <div>
            <img src={arrow} alt="" className={styles.narrow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerProducts;
