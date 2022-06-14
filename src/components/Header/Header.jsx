import styles from "./header.module.css";
import img from "../../photo/Group 1.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.counter}>
        <img src={img} alt="" />
      </div>
      <div className={styles.header_menu}>
        <p>Главная</p>
        <p> О нас</p>
        <p> Контакты</p>
      </div>
    </div>
  );
};

export default Header;
