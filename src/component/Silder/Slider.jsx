import ReviewSection from "../ReviewSection/ReviewSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
const Slider = () => {
    return (
        <div className="mx-20">
            {/* <ReviewSection></ReviewSection> */}
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}

                navigation={true}
                modules={[Pagination, Navigation,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ReviewSection></ReviewSection>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewSection></ReviewSection>
                </SwiperSlide>
                <SwiperSlide>
                <ReviewSection></ReviewSection>
                </SwiperSlide>
                <SwiperSlide>
                <ReviewSection></ReviewSection>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Slider;