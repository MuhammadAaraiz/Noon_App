import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Slider_image1 from "../Images/Sliders_image_1.avif"
import Slider_image2 from "../Images/Sliders_image_2.avif"
import First_Slider_image from "../Images/First_Slider.avif"
import Second_Slider_image from "../Images/Second_Slider.avif"
import Third_Slider_image from "../Images/Third_Slider.gif"
import Fourth_Slider_image from "../Images/Fourth_Slider.avif"
import Fifth_Slider_image from "../Images/Fifth_Slider.avif"
import Sixth_Slider_image from "../Images/Sixth_Slider.avif"
import Seventh_Slider_image from "../Images/Seventh_Slider.avif"
import Eight_Slider_image from "../Images/Eight_Slider.avif"

const Sliders_Div = () => {
    return (
        <>
        <div className='Main_Container'>
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
                modules={[Pagination, Navigation,Autoplay]}
                className="mySwiper"
            >


            
                <SwiperSlide  className='Sliders_Container' >
                    <div className="container- Sliders_Containers">
                        <img className="" src={First_Slider_image} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="container- Sliders_Containers">
                        <img className="" src={Second_Slider_image} alt="" />
                    </div>
                </SwiperSlide>


                <SwiperSlide >
                    <img className="" src={Third_Slider_image} alt="" />

                </SwiperSlide>

                <SwiperSlide >
                    <img className="" src={Fourth_Slider_image} alt="" />

                </SwiperSlide>

                <SwiperSlide >
                    <img className="" src={Fifth_Slider_image} alt="" />

                </SwiperSlide>

                <SwiperSlide >
                    <img className="" src={Sixth_Slider_image} alt="" />

                </SwiperSlide>

                <SwiperSlide >
                    <img className="" src={Seventh_Slider_image} alt="" />

                </SwiperSlide>

                <SwiperSlide >
                    <img className="" src={Eight_Slider_image} alt="" />

                </SwiperSlide>
            </Swiper>
            </div>
{/* 
            <div className="Sliders_Images_Container">
                        <img src={Slider_image1} alt="" />
                        <img src={Slider_image2} alt="" />
                    </div> */}
        </>
    );
}
export { Sliders_Div }
