import First_img from "../Images/First_card_img.avif"
import Second_img from "../Images/Second_card_img.avif"
import Third_img from "../Images/Third_card_img.avif"
import Fourth_img from "../Images/Fourth_card_img.avif"
import Fifth_img from "../Images/Fifth_card_img.avif"
import Sixth_img from "../Images/Sixth_card_img.avif"
import Seventh_img from "../Images/Seventh_card_img.avif"
import Eight_img from "../Images/Eight_card_img.avif"
import Ninth_img from "../Images/Ninth_card_img.avif"
import Tenth_img from "../Images/Tenth_card_img.avif"
import Eleventh_img from "../Images/Eleventh_card_img.avif"
import Twelveth_img from "../Images/Twelveth_card_img.avif"
import Second_card_First_img from "../Images/Second_card_First_img.avif"
import Second_card_Second_img from "../Images/Second_card_Second_img.avif"
import Second_card_Third_img from "../Images/Second_card_Third_img.avif"
import Second_card_Fourth_img from "../Images/Second_card_Fourth_img.avif"
import Second_card_Fifth_img from "../Images/Second_card_Fifth_img.avif"
import Second_card_Sixth_img from "../Images/Second_card_Sixth_img.avif"
import Second_card_Seventh_img from "../Images/Second_card_Seventh_img.avif"
import Second_card_Eight_img from "../Images/Second_card_Eight_img.avif"
import Second_card_Ninth_img from "../Images/Second_card_Ninth_img.avif"
import Second_card_Tenth_img from "../Images/Second_card_Tenth_img.avif"
import Second_card_Eleventh_img from "../Images/Second_card_Eleventh_img.avif"
import Second_card_Twelveth_img from "../Images/Second_card_Twelveth_img.avif"
import Third_card_First_img from "../Images/Third_card_first_img.avif"
import Third_card_Second_img from "../Images/Third_card_Second_img.avif"
import Third_card_Third_img from "../Images/Third_card_Third_img.avif"
import Third_card_Fourth_img from "../Images/Third_card_Fourth_img.avif"
import Third_card_Fifth_img from "../Images/Third_card_Fifth_img.avif"
import Third_card_Sixth_img from "../Images/Third_card_Sixth_img.avif"
import Third_card_Seventh_img from "../Images/Third_card_Seventh_img.avif"
import Third_card_Eight_img from "../Images/Third_card_Eight_img.avif"
import Third_card_Ninth_img from "../Images/Third_card_Ninth_img.avif"
import Third_card_Tenth_img from "../Images/Third_card_Tenth_img.avif"
import Third_card_Eleventh_img from "../Images/Third_card_Eleventh_img.avif"
import Third_card_Twelve_img from "../Images/Third_card_Twelve_img.avif"
import First_Banner from "../Images/First_Banner.avif"




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';


const CardsDiv = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className="mb-4 p-2 container- lahgtbcfg">
            <img className="p-2" src={First_img} alt="" />
            <img className="p-2" src={Second_img} alt="" />
            <img className="p-2" src={Third_img} alt="" />
            <img className="p-2" src={Fourth_img} alt="" />
            <img className="p-2" src={Fifth_img} alt="" />
            <img className="p-2" src={Sixth_img} alt="" />
            <img className="p-2" src={Seventh_img} alt="" />
            <img className="p-2" src={Eight_img} alt="" />
            <img className="p-2" src={Ninth_img} alt="" />
            <img className="p-2" src={Tenth_img} alt="" />
            <img className="p-2" src={Eleventh_img} alt="" />
            <img className="p-2" src={Twelveth_img} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className="mb-4 p-2 container- lahgtbcfg">
            <img className="p-2" src={Second_card_First_img} alt="" />
            <img className="p-2" src={Second_card_Second_img} alt="" />
            <img className="p-2" src={Second_card_Third_img} alt="" />
            <img className="p-2" src={Second_card_Fourth_img} alt="" />
            <img className="p-2" src={Second_card_Fifth_img} alt="" />
            <img className="p-2" src={Second_card_Sixth_img} alt="" />
            <img className="p-2" src={Second_card_Seventh_img} alt="" />
            <img className="p-2" src={Second_card_Eight_img} alt="" />
            <img className="p-2" src={Second_card_Ninth_img} alt="" />
            <img className="p-2" src={Second_card_Tenth_img} alt="" />
            <img className="p-2" src={Second_card_Eleventh_img} alt="" />
            <img className="p-2" src={Second_card_Twelveth_img} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-4 p-2 container-  lahgtbcfg">
            <img className="p-2" src={Third_card_First_img} alt="" />
            <img className="p-2" src={Third_card_Second_img} alt="" />
            <img className="p-2" src={Third_card_Third_img} alt="" />
            <img className="p-2" src={Third_card_Fourth_img} alt="" />
            <img className="p-2" src={Third_card_Fifth_img} alt="" />
            <img className="p-2" src={Third_card_Sixth_img} alt="" />
            <img className="p-2" src={Third_card_Seventh_img} alt="" />
            <img className="p-2" src={Third_card_Eight_img} alt="" />
            <img className="p-2" src={Third_card_Ninth_img} alt="" />
            <img className="p-2" src={Third_card_Tenth_img} alt="" />
            <img className="p-2" src={Third_card_Eleventh_img} alt="" />
            <img className="p-2" src={Third_card_Twelve_img} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export { CardsDiv, First_Banner }
