import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import CarouselLeftNav from "./CarouselLeftNav";
import CarouselRightNav from "./CarouselRightNav";

// const Controls = ({ data }) => {
//     const swiper = useSwiper();
//     useEffect(() => {
//       if (swiper) {
//         swiper.slideTo(0);
//       }
//     }, [data, swiper]);

//     return <></>;
//   };

export default function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <Swiper
          style={{paddingTop: "258px"}}
          initialSlide={0}
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={"auto"}
          allowTouchMove
        >
          {/* <Controls data={data} /> */}
          <div className={styles.head}>
          <div className={styles.heading}>What says our happy Clients</div>
          <div className={styles.buttonsWrapper}>
            <CarouselLeftNav />
            <CarouselRightNav />
          </div>
          </div>
          {data.map((ele, index) => (
            <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
