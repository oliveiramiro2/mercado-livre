import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { photosSwiper } from "../../utils/vars";

const SwiperMain: React.FC = () => {
    const [showNavigation, setShowNavigation] = useState<boolean>(false);

    return (
        <section
            className="h-[340px] w-full"
            onMouseOver={() => setShowNavigation(true)}
            onMouseOut={() => setShowNavigation(false)}
            onFocus={() => setShowNavigation(true)}
            onBlur={() => setShowNavigation(false)}
        >
            <Swiper
                spaceBetween={0}
                slidesPerView="auto"
                modules={[Navigation, Pagination, Autoplay]}
                navigation={showNavigation}
                pagination={{
                    clickable: true,
                    bulletActiveClass: "activeDots",
                    bulletClass: "swiper-pagination-bullet allDots",
                }}
                loop
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                className="h-[340px] w-screen"
            >
                {photosSwiper.map(item => (
                    <SwiperSlide key={item.id}>
                        <img
                            className="h-[340px]"
                            src={item.link}
                            alt={item.alt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SwiperMain;
