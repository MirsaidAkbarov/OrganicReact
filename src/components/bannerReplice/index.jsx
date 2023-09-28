import React from "react";
import styles from "./style.module.scss";

import Photo2 from "../images/Photo (2).svg";
import Star1 from "../images/Star (1).svg";

function BannerReplice() {
  return (
    <div className={styles.replies}>
      <div className={`${styles.costumer__repliec} ${styles.container}`}>
        <div className={styles.her__replice}>
          <p className={styles.testimonial}>Testimonial</p>
          <p className={styles.costumer__saying}>What Our Customer Saying?</p>
          <img src={Photo2} alt="" className={styles.ofcostumer} />
          <img src={Star1} alt="" className={styles.costumer__star} />
          <p className={styles.her__comment}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <p className={styles.hername}>Sara Taylor</p>
          <p className={styles.consumer}>Consumer</p>
        </div>
        <div className={styles.her__marks}>
          <div className={styles.sircle__marks}>
            <p className={styles.one__hundret}>45</p>
            <p className={styles.one__organic}>Organic</p>
          </div>
          <div className={styles.sircle__marks}>
            <p className={styles.one__hundret}>300+</p>
            <p className={styles.one__organic}>Organic</p>
          </div>
          <div className={styles.sircle__marks}>
            <p className={styles.one__hundret}>100</p>
            <p className={styles.one__organic}>Organic</p>
          </div>
          <div className={styles.sircle__marks}>
            <p className={styles.one__hundret}>130</p>
            <p className={styles.one__organic}>Organic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerReplice;
