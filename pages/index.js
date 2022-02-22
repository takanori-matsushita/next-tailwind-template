import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>wedding profile movie</title>
        <meta name="description" content="This page is wedding profile movie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="w-full h-screen bg-green-300">Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-screen bg-blue-300">Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-screen bg-red-300">Slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-screen bg-yellow-300">Slide 4</div>
          </SwiperSlide>
        </Swiper>
      </main>

      <footer className={styles.footer}>
        Powered by&nbsp;
        <span className="italic font-semibold">Takanori Matsushita</span>
      </footer>
    </div>
  );
}
