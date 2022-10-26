import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";
import slider4 from "../../../assets/images/slider4.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slideshow(){
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000}}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className="swiper-img" src={slider1} alt="slider1"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={slider2} alt="slider2"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={slider3} alt="slider3"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-img" src={slider4} alt="slider4"/>
      </SwiperSlide>
    </Swiper>
  );
};
