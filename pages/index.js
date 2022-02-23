import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import docSlider from "../public/docSlider";
// Import Swiper styles
import "swiper/css";
import "docslider/docSlider.css";

export default function Home() {
  useEffect(() => {
    docSlider.init();
  }, []);

  return (
    <div>
      <Head>
        <title>wedding profile movie</title>
        <meta name="description" content="This page is wedding profile movie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="w-full h-screen bg-green-300">
              <Image src="/naoya/interhigh2.jpg" layout="fill" />
            </div>
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
        </Swiper> */}
        <div className="docSlider">
          <section>aaa</section>
          <section>...</section>
        </div>
      </main>
    </div>
  );
}
