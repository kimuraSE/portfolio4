import { Swiper, SwiperSlide } from "swiper/react";

//css
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { EffectFade,Autoplay} from "swiper";

export const HeroSwiper = () =>{

    return(

        <Swiper
        spaceBetween={30}
        effect={"fade"}
        speed={2000}
        autoplay={{
            delay:4000,
            disableOnInteraction: false
        }}
        modules={[EffectFade,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div></div>
          <img className="hero-img-1" src="https://source.unsplash.com/wDDfbanbhl8" />
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          <img className="hero-img-2" src="https://source.unsplash.com/emqnSQwQQDo" />
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          <img className="hero-img-3" src="https://source.unsplash.com/tleCJiDOri0" />
        </SwiperSlide>

        <div className="swiper-logo-box">
            <div className="title">example</div>
            <div className="sub-title">羨む生活を日常に</div>
        </div>
      </Swiper>

    )
}