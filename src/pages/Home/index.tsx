import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Header from "../../components/Header";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col w-screen min-h-screen">
            <Header />
            <Swiper
                spaceBetween={0}
                slidesPerView="auto"
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{
                    clickable: true,
                    bulletActiveClass: "scale-150",
                }}
                loop
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                className="h-[340px]"
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
        </div>
    );
};

export default Home;
