import Meteors from "../Meteors/Meteors";
import Chase from "../Chase/Chase";
import styles from "./FooterBg.module.scss";

const FooterBg = () => {
  return (
    <div className={styles.top}>
      <Meteors />
      <div className={styles.background}>
        <Chase />
      </div>
    </div>
  );
};

export default FooterBg;
