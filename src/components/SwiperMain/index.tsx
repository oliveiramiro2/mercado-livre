import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const SwiperMain: React.FC = () => {
    const [showNavigation, setShowNavigation] = useState<boolean>(false);

    const handleShowNavigation = (): void => {
        setShowNavigation(true);
    };

    const handleHideNavigation = (): void => {
        setShowNavigation(false);
    };

  return (
    <section
                className="h-[340px] w-full"
                onMouseOver={handleShowNavigation}
                onMouseOut={handleHideNavigation}
                onFocus={handleShowNavigation}
                onBlur={handleHideNavigation}
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
                    <SwiperSlide>
                        <img
                            className="h-[340px]"
                            src="https://http2.mlstatic.com/D_NQ_698675-MLA53861274292_022023-OO.webp"
                            alt="bbb23"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="h-[340px]"
                            src="https://http2.mlstatic.com/D_NQ_973121-MLA53828765774_022023-OO.webp"
                            alt="Aproveite o verão"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="h-[340px]"
                            src="https://http2.mlstatic.com/D_NQ_939429-MLA53879648181_022023-OO.webp"
                            alt="Detox"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="h-[340px]"
                            src="https://http2.mlstatic.com/D_NQ_989972-MLA53831254570_022023-OO.webp"
                            alt="Grandes marcas"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="h-[340px]"
                            src="https://http2.mlstatic.com/D_NQ_634797-MLA53858146978_022023-OO.webp"
                            alt="Gamers"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="h-[340px]"
                            src="https://http2.mlstatic.com/D_NQ_858900-MLA53880103142_022023-OO.webp"
                            alt="Smartphone"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="h-[340px]"
                            src="https://http2.mlstatic.com/D_NQ_937944-MLA53924707389_022023-OO.webp"
                            alt="Ofertas do dia"
                        />
                    </SwiperSlide>
                </Swiper>
            </section>
  )
}

export default SwiperMain
