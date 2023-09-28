import styles from "./style.module.scss"

import logoSvg from "../images/Logo.svg"
import images1 from "../images/1.svg"
import images2 from "../images/2.svg"
import images3 from "../images/3.svg"
import images4 from "../images/4.svg"




function Footer () {
    return (
        <footer className={styles.footer}>
        <div className ={`${styles.contacts1} ${styles.container}`}>
          <div className ={`${styles.contacts} ${styles.container}`}>
            <div className ={styles.contact__us}>
              <p className ={styles.contact__main}>Contact Us</p>
              <div className ={styles.email}>
                <p className ={styles.email__all}>Email</p>
                <p className ={styles.phone}>needhelp@Organia.com</p>
              </div>
              <div className ={styles.phone1}>
                <p className ={styles.email__all}>Phone</p>
                <p className ={styles.phone}>666 888 888</p>
              </div>
              <div className ={styles.adress}>
                <p className ={styles.email__all}>Adress</p>
                <p className ={styles.phone}>88 road, borklyn streets</p>
              </div>
            </div>
            <div className ={styles.contact__media}>
              <div className ={styles.combine__logo}>
                <div className ={styles.logo__section}>
                  <img src={logoSvg} alt="" className ={styles.org} />
                  <p className ={styles.organic__logo}>Organick</p>
                </div>
                <p className ={styles.about}>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing
                </p>
              </div>
              <div className ={styles.social__media}>
                <img src={images1}  class={styles.social} />
                <img src={images2}  class={styles.social} />
                <img src={images3}  class={styles.social} />
                <img src={images4}  class={styles.social} />
              </div>
            </div>
            <div className = {styles.utility__pages}>
              <p className = {styles.contact__main1}>Unity Pages</p>
              <p className = {styles.unity__words}>Style Guide</p>
              <p className = {styles.unity__words}>404 Not Found</p>
              <p className = {styles.unity__words}>Password Protected</p>
              <p className = {styles.unity__words}>Licences</p>
              <p className = {styles.unity__words}>Changelog</p>
            </div>
          </div>
  
          <div className ={styles.contact__media1}>
            <div className ={styles.combine__logo}>
              <div className ={styles.logo__section}>
                <img src="./images/Logo.svg" alt="" class={styles.org} />
                <p className ={styles.organic__logo}>Organick</p>
              </div>
              <p className ={styles.about}>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
              </p>
            </div>
            <div className ={styles.social__media}>
              <img src={images1}  class={styles.social} />
              <img src={images2}  class={styles.social} />
              <img src={images3}  class={styles.social} />
              <img src={images4}  class={styles.social} />
            </div>
          </div>
          <div className ={styles.copyright}>
            <p className ={styles.copy}>
              Copyright © <span class={styles.organic}>Organick</span>
            </p>
          </div>
        </div>
      </footer>
    )
}

export default Footer