import styles from "./style.module.scss";
import orgLogo from "../images/Logo.svg";
import cartIcon from "../images/Cart Icon.svg";
import searchIcon from "../images/Search Icon.svg";
import respMenu from "../images/icons8-меню.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.organic__header} ${styles.container}`}>
        <div className={styles.logo}>
          <img src={orgLogo} alt="" className={styles.org} />
          <p className={styles.organic__logo}>Organick</p>
        </div>
        <div className={styles.home__section}>
          <p className={styles.Home}>Home</p>
          <p className={styles.Home}>About</p>
          <p className={styles.Home}>Pages</p>
          <p className={styles.Home}>Shop</p>
          <p className={styles.Home}>Projects</p>
          <p className={styles.Home}>News</p>
        </div>
        <div className={styles.search__section}>
          <div className={styles.search__button}>
            <input className={styles.type} type="text" />
            <img src={searchIcon} alt="" />
          </div>
          <div className={styles.payment__button}>
            <img src={cartIcon} alt="" className={styles.card__button} />
            <p className={styles.cart}>Cart(0)</p>
          </div>
          <div className={styles.menu__section}>
            <img src={respMenu} alt="" className={styles.menu} />
          </div>
        </div>
      </div>

      {/* <div className={styles.sidenav}  >
        <span  className={styles.closebtn} >&times;</span>
        <p className={styles.Home}></p>
        <p className={styles.Home1} >About</p>
            <p className={styles.Home1}>Pages</p>
            <p className={styles.Home1}>Shop</p>
            <p className={styles.Home1}>Projects</p>
            <p classNameclass={styles.Home1}>News</p>
      </div> */}
    </header>
  );
}

export default Header;
