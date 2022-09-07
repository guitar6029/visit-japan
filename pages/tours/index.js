import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "../../components/Nav/Nav";
import style from "../../styles/Tours.module.css";
import Link from "next/link";

function Tours() {
  const images = [
    "/images/pexels-photo-1028429.webp",
    "/images/pexels-photo-2339009.jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newImage = index >= images.length - 1 ? 0 : index + 1;

      setIndex(newImage);
    }, 6000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="flex_column margin_10">
      <Nav />
      <h3 className="section_title">TOP TOURS</h3>

      {/* <div>
        <img  src={images[index]} alt='japan tour location'/>
      </div> */}

      <div className={style.tours}>

        <div className={style.tour}>
          <div className={`${style.tour_img} ${style.tour_bg_img}`}></div>
          <div className={style.tour_description}>
            <h3>DISCOVER JAPAN</h3>
            <Link href='tours/discover'><a>MORE INFO</a></Link>
          </div>
        </div>

        <div className={style.tour}>
          <div className={`${style.tour_img} ${style.tour_bg_img}`}></div>
          <div className={style.tour_description}>
            <h3>JAPAN ART &amp; POP CULTURE</h3>
            <Link href='tours/pop_culture'><a>MORE INFO</a></Link>
          </div>
        </div>

        <div className={style.tour}>
          <div className={`${style.tour_img} ${style.tour_bg_img}`}></div>
          <div className={style.tour_description}>
            <h3>JAPAN &apos; S BEST FOOD</h3>
            <Link href='tours/food'><a>MORE INFO</a></Link>
          </div>
        </div>


      </div>
      
      
    </section>
  );
}

export default Tours;
