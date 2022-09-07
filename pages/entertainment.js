import Nav from "../components/Nav/Nav";
import styles from "../styles/Entertainment.module.css";

function Entertainment() {
  return (
    <section className="flex_column margin_10">
      <Nav />
      <h3 className="section_title">FUN ACTIVITIES</h3>
      <div className={styles.entertainment_grid}>
        <div className={styles.area1}>
          <h3 className={styles.area_title}>SHOPPING</h3>
        </div>
        <div className={styles.area2}>
          <h3 className={styles.area_title}>KYOTO GEISHA</h3>
        </div>
        <div className={styles.area3}>
          <h3 className={styles.area_title}>NATIONAL PARKS</h3>
        </div>
        <div className={styles.area4}>
          <h3 className={styles.area_title}>YOGA</h3>
        </div>
        <div className={styles.area5}>
          <h3 className={styles.area_title}>UNIQUE STORES</h3>
        </div>
        <div className={styles.area6}>
          <h3 className={styles.area_title}>FOOD &amp; DINING</h3>
        </div>
        <div className={styles.area7}>
          <h3 className={styles.area_title}>LOCAL&apos;S FAVORITE</h3>
        </div>
        <div className={styles.area8}>
          <h3 className={styles.area_title}>EXPLORE</h3>
        </div>
        <div className={styles.area9}>
          <h3 className={styles.area_title}>FESTIVAL TOURS</h3>
        </div>
        <div className={styles.area10}>
          <h3 className={styles.area_title}>SUMO</h3>
        </div>
        <div className={styles.area11}>
          <h3 className={styles.area_title}>BARS</h3>
        </div>
      </div>
    </section>
  );
}

export default Entertainment;
