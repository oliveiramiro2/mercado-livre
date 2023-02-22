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
        <div className="flex flex-col w-screen min-h-screen bg-[#ebebeb]">
            <Header />
            <Swiper
                spaceBetween={0}
                slidesPerView="auto"
                modules={[Navigation, Pagination, Autoplay]}
                navigation
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
            <div className="w-screen h-[170px] flex justify-center items-center">
                <div className="bg-white w-[87%] h-[90px] flex shadow-md shadow-[#3483fa]">
                    <div className="w-[260px] h-[90px] border-r border-[#eee] p-1 flex">
                        <div className="w-1 h-full bg-[#3483fa]" />
                        <div className="w-full text-left flex flex-col justify-center pl-4">
                            <p className="text-xl text-[#333]">
                                Pagamento rápido e seguro
                            </p>
                            <p className="text-[#999] text-sm">
                                com Mercado Pago
                            </p>
                        </div>
                    </div>
                    <div className="flex w-[293px] pl-4 items-center">
                        <img
                            src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg"
                            alt="cartão crédito"
                            className="w-12 h-12 cursor-pointer"
                        />
                        <div className="pl-4">
                            <p className="text-xl text-black">
                                Até 10 parcelas sem juros
                            </p>
                            <a
                                className="text-[#3483fa] text-sm relative bottom-1"
                                href="https://www.mercadolivre.com.br/gz/home/payments/methods"
                            >
                                Ver mais
                            </a>
                        </div>
                    </div>
                    <div className="flex w-[293px] pl-4 items-center">
                        <img
                            src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg"
                            alt="Parcelamento"
                            className="w-12 h-12 cursor-pointer"
                        />
                        <div className="pl-4">
                            <p className="text-xl text-black">
                                Parcelamento sem cartão
                            </p>
                            <a
                                className="text-[#3483fa] text-sm relative bottom-1"
                                href="https://www.mercadolivre.com.br/mercado-credito/boleto-parcelado/?sk=RHRsnBTf"
                            >
                                Conheça o Mercado Crédito
                            </a>
                        </div>
                    </div>
                    <div className="flex w-[233px] pl-4 items-center">
                        <img
                            src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/qr.svg"
                            alt="Via PIX"
                            className="w-12 h-12 cursor-pointer"
                        />
                        <div className="pl-4">
                            <p className="text-xl text-black">Via Pix</p>
                            <a
                                className="text-[#3483fa] text-sm relative bottom-1"
                                href="https://www.mercadolivre.com.br/gz/home/payments/methods#pix"
                            >
                                Ver mais
                            </a>
                        </div>
                    </div>
                    <div className="w-[130px] flex items-center justify-center">
                        <img
                            src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg"
                            alt="Mais"
                            className="w-12 h-12 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
