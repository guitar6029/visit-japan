import Link from "next/link";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.main_nav}>
      <div className={styles.top}>
        <div className={styles.top_links}>
          <div className={styles.circle}></div>
          <div>
            <h3>VISIT JAPAN</h3>
          </div>
          <div>|</div>
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>|</div>
          <div>
            <Link href="about">About</Link>
          </div>
          <div>|</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.main_title}>VISIT</h3>
        <h3 className={styles.main_title}>JAPAN</h3>
      </div>

      <div className={styles.main_items}>
        <div>
          <h3><Link href="food">Food</Link></h3>
        </div>
        <div>
          <h3><Link href="tours">Tours</Link></h3>
        </div>
        <div>
          <h3><Link href="entertainment">Entertainment</Link></h3>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
