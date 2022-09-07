//import Image from "next/image";
import Nav from "../components/Nav/Nav"
import style from '../styles/About.module.css';
function About() {
  return (

    <section className="flex_column margin_10">
      <Nav />
      <div className={style.about}>
        {/* <Image width={500} height={500} src="/images/photo-1545569341-9eb8b30979d9.avif" alt='test'/> */}
        <p>Hello, this website uses Next.JS and all images are all from unsplash.com </p>
      </div>
      </section>
  )
}

export default About