import Link from "next/link";
import Nav from "../../components/Nav/Nav";
import style from "../../styles/Food.module.css";

function Food() {
  return (
    <section className="flex_column margin_10">
      <Nav />
      <h3 className="section_title">TOP SPOTS</h3>
      <div className={style.card_display}>
        <div className={`${style.card} ${style.card_img}`}>
          <div className={style.card_title}>1</div>
          <div className={style.card_description}>
            <div className={style.item_title}>
              <h3>Nariwasa</h3>
            </div>
            <div className={style.item_rating}>
              <span className={style.item_rating_number}>
                4.6 <span className={style.item_rating_star}>&#x2606;</span>
              </span>
            </div>
            <div className={style.item_description}>
              <p>
                Fine-dining restaurant serving a seasonal & carefully sourced
                menu of innovative Japanese dishes.
              </p>
            </div>
            <div className={style.item_location}>
              <h5>2 Chome-6-15 Minamiaoyama, Minato City, Tokyo 107-0062, Japan</h5>
            </div>
            <div className={style.item_view_more}>
              <a href="https://shokuoku.com/restaurant/info1.php">View More</a>
            </div>
          </div>
        </div>
        <div className={`${style.card} ${style.card_img}`}>
          <div className={style.card_title}>2</div>
          <div className={style.card_description}>
            <div className={style.item_title}>
              <h3>Sushu Saito</h3>
            </div>
            <div className={style.item_rating}>
              <span className={style.item_rating_number}>
                4.5 <span className={style.item_rating_star}>&#x2606;</span>
              </span>
            </div>
            <div className={style.item_description}>
              <p>
                Sushi Saito is a Japanese cuisine restaurant in Minato, Tokyo,
                primarily known for serving sushi. It had three Michelin stars
                until it chose to stop accepting reservations from the general
                public.
              </p>
            </div>
            <div className={style.item_location}>
            <h5>Japan, 106-0032 Tokyo, Minato City, Roppongi, 1 Chome−4−5, ARK
                Hills South Tower, 1F</h5>
            </div>
            <div className={style.item_view_more}>
              <a href="http://www.narisawa-yoshihiro.com/">View More</a>
            </div>
          </div>
        </div>
        <div className={`${style.card} ${style.card_img}`}>
          <div className={style.card_title}>3</div>
          <div className={style.card_description}>
            <div className={style.item_title}>
              <h3>Sushisho Masa</h3>
            </div>
            <div className={style.item_rating}>
              <span className={style.item_rating_number}>
                4.7 <span className={style.item_rating_star}>&#x2606;</span>
              </span>
            </div>
            <div className={style.item_description}>
              <p>
                Fine-dining restaurant serving a seasonal & carefully sourced
                menu of innovative Japanese dishes.
              </p>
            </div>
            <div className={style.item_location}>
              <h5>Japan, 106-0031 Tokyo, Minato City, Nishiazabu, 4 Chome−1−15</h5>
            </div>
            <div className={style.item_view_more}>
              <a href="https://www.sushisyomasa.com/">View More</a>
            </div>
          </div>
        </div>
        <div className={`${style.card} ${style.card_img}`}>
          <div className={style.card_title}>4</div>
          <div className={style.card_description}>
            <div className={style.item_title}>
              <h3>Nihombashi Kakigaracho Sugita</h3>
            </div>
            <div className={style.item_rating}>
              <span className={style.item_rating_number}>
                4.7 <span className={style.item_rating_star}>&#x2606;</span>
              </span>
            </div>
            <div className={style.item_description}>
              <p>
                Takaaki Sugita sets great store by cooking according to the
                classic ways. The generously large toppings of the nigiri are
                placed on vinegared rice that has a refreshingly sour taste. The
                gizzard shad, a typical ingredient of Edomae sushi, tastes like
                the fish itself was born to be made into sushi. His sincerity
                and politeness are also reasons for the popularity of this
                restaurant. First-time customers get to use a private room.
              </p>
            </div>
            <div className={style.item_location}>
              <h5>Japan, 103-0014 Tokyo, Chuo City, Nihonbashikakigaracho, 1
                Chome−33</h5>
            </div>
            <div className={style.item_view_more}>
              <a href="https://www.tableall.com/restaurant/203">View More</a>
            </div>
          </div>
        </div>
        <div className={`${style.card} ${style.card_img}`}>
          <div className={style.card_title}>5</div>
          <div className={style.card_description}>
            <div className={style.item_title}>
              <h3>Sushi Arai</h3>
            </div>
            <div className={style.item_rating}>
              <span className={style.item_rating_number}>
                4.6 <span className={style.item_rating_star}>&#x2606;</span>
              </span>
            </div>
            <div className={style.item_description}>
              <p>
                Streamlined, sophisticated venue offering a menu of refined
                sushi & sashimi bites.
              </p>
            </div>
            <div className={style.item_location}>
              <h5>Japan, 103-0014 Tokyo, Chuo City, Nihonbashikakigaracho, 1
                Chome−33−6</h5>
            </div>
            <div className={style.item_view_more}>
              <a href="https://sushi-arai.com/">View More</a>
            </div>
          </div>
        </div>
        <div className={`${style.card} ${style.card_img}`}>
          <div className={style.card_title}>6</div>
          <div className={style.card_description}>
            <div className={style.item_title}>
              <h3>Kagurazaka Ishikawa</h3>
            </div>
            <div className={style.item_rating}>
              <span className={style.item_rating_number}>
                4.6 <span className={style.item_rating_star}>&#x2606;</span>
              </span>
            </div>
            <div className={style.item_description}>
              <p>
                Traditional Japanese cuisine offered in minimalist, compact
                quarters with a serene vibe.
              </p>
            </div>
            <div className={style.item_location}>
              <h5>Japan, 162-0825 Tokyo, Shinjuku City, Kagurazaka, 5 Chome−37</h5>
            </div>

            <div className={style.item_view_more}>
              <a href="http://kagurazaka-ishikawa.co.jp/">View More</a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={style.view_more}>
          <Link href="/food/locations"><a>VIEW MORE</a></Link>
      </div> */}
    </section>
  );
}

export default Food;
