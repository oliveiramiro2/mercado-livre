import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Header from "../../components/Header";

import offer11 from "../../assets/imgs/offer1-1.png";
import offer12 from "../../assets/imgs/offer1-2.png";
import offer21 from "../../assets/imgs/offer2-1.png";
import offer22 from "../../assets/imgs/offer2-2.png";
import offer31 from "../../assets/imgs/offer3-1.png";
import offer32 from "../../assets/imgs/offer3-2.png";
import offer41 from "../../assets/imgs/offer4-1.png";
import offer42 from "../../assets/imgs/offer4-2.png";
import offer51 from "../../assets/imgs/offer5-1.png";
import offer52 from "../../assets/imgs/offer5-2.png";

interface IOffer {
    offer1: boolean;
    offer2: boolean;
    offer3: boolean;
    offer4: boolean;
    offer5: boolean;
}

const offerInit: IOffer = {
    offer1: false,
    offer2: false,
    offer3: false,
    offer4: false,
    offer5: false,
};

const Home: React.FC = () => {
    const [showNavigation, setShowNavigation] = useState<boolean>(false);
    const [showInfoOffer, setShowInfoOffer] = useState<IOffer>(offerInit);

    const handleShowNavigation = (): void => {
        setShowNavigation(true);
    };

    const handleHideNavigation = (): void => {
        setShowNavigation(false);
    };

    const handleShowOffer = (index: number, action: boolean): void => {
        switch (index) {
            case 1:
                setShowInfoOffer({ ...offerInit, offer1: action });
                break;
            case 2:
                setShowInfoOffer({ ...offerInit, offer2: action });
                break;
            case 3:
                setShowInfoOffer({ ...offerInit, offer3: action });
                break;
            case 4:
                setShowInfoOffer({ ...offerInit, offer4: action });
                break;
            default:
                setShowInfoOffer({ ...offerInit, offer5: action });
                break;
        }
    };

    return (
        <div className="flex flex-col w-screen min-h-screen bg-[#ebebeb]">
            <Header />
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
            <section className="w-screen h-[170px] flex justify-center items-center">
                <div className="bg-white w-[87%] h-[90px] flex shadow-md shadow-pallet-blue">
                    <div className="w-[260px] h-[90px] border-r border-[#eee] p-1 flex">
                        <div className="w-1 h-full bg-pallet-blue" />
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
                                className="text-pallet-blue text-sm relative bottom-1"
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
                                className="text-pallet-blue text-sm relative bottom-1"
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
                                className="text-pallet-blue text-sm relative bottom-1"
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
            </section>
            <section className="flex justify-center">
                <div className="w-[87%] h-[460px]">
                    <div className="flex gap-x-3">
                        <h2 className="text-[26px] text-[#666] font-thin">
                            Ofertas do dia
                        </h2>
                        <a
                            className="text-[#1259c3] text-base relative top-[10px]"
                            href="https://www.mercadolivre.com.br/ofertas#c_id=/home/promotions-recommendations/element&c_uid=83303aa3-ee29-49ff-b9ba-0edf5efc870d"
                        >
                            Ver todas
                        </a>
                    </div>
                    <div className="flex mt-4">
                        <div
                            className="w-[366px] cursor-pointer"
                            onMouseOver={() => handleShowOffer(1, true)}
                            onMouseOut={() => handleShowOffer(1, false)}
                            onFocus={() => handleShowOffer(1, true)}
                            onBlur={() => handleShowOffer(1, false)}
                        >
                            <img
                                src="https://http2.mlstatic.com/D_Q_NP_802413-MLA50710963248_072022-AB.webp"
                                alt="Celular"
                                className="w-56 h-56"
                            />
                            <img
                                src={showInfoOffer.offer1 ? offer12 : offer11}
                                alt="oferta 1"
                            />
                        </div>
                        <div
                            className="w-[366px] cursor-pointer"
                            onMouseOver={() => handleShowOffer(2, true)}
                            onMouseOut={() => handleShowOffer(2, false)}
                            onFocus={() => handleShowOffer(2, true)}
                            onBlur={() => handleShowOffer(2, false)}
                        >
                            <img
                                src="https://http2.mlstatic.com/D_Q_NP_927250-MLB52007266563_102022-AB.webp"
                                alt="Notebook"
                                className="w-56 h-56"
                            />
                            <img
                                src={showInfoOffer.offer2 ? offer22 : offer21}
                                alt="oferta 2"
                            />
                        </div>
                        <div
                            className="w-[366px] cursor-pointer"
                            onMouseOver={() => handleShowOffer(3, true)}
                            onMouseOut={() => handleShowOffer(3, false)}
                            onFocus={() => handleShowOffer(3, true)}
                            onBlur={() => handleShowOffer(3, false)}
                        >
                            <img
                                src="https://http2.mlstatic.com/D_Q_NP_908551-MLB53668961915_022023-AB.webp"
                                alt="Máquina de solda"
                                className="w-56 h-56"
                            />
                            <img
                                src={showInfoOffer.offer3 ? offer32 : offer31}
                                alt="oferta 3"
                            />
                        </div>
                        <div
                            className="w-[366px] cursor-pointer"
                            onMouseOver={() => handleShowOffer(4, true)}
                            onMouseOut={() => handleShowOffer(4, false)}
                            onFocus={() => handleShowOffer(4, true)}
                            onBlur={() => handleShowOffer(4, false)}
                        >
                            <img
                                src="https://http2.mlstatic.com/D_Q_NP_775529-MLB51802661099_102022-AB.webp"
                                alt="Câmera"
                                className="w-56 h-56"
                            />
                            <img
                                src={showInfoOffer.offer4 ? offer42 : offer41}
                                alt="oferta 4"
                            />
                        </div>
                        <div
                            className="w-[366px] cursor-pointer"
                            onMouseOver={() => handleShowOffer(5, true)}
                            onMouseOut={() => handleShowOffer(5, false)}
                            onFocus={() => handleShowOffer(5, true)}
                            onBlur={() => handleShowOffer(5, false)}
                        >
                            <img
                                src="https://http2.mlstatic.com/D_Q_NP_781836-MLB52319224650_112022-AB.webp"
                                alt="Whey"
                                className="w-56 h-56"
                            />
                            <img
                                src={showInfoOffer.offer5 ? offer52 : offer51}
                                alt="oferta 5"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-screen h-[420px] flex items-center justify-center">
                <div className="w-[87%] h-[340px] rounded-lg shadow-lg shadow-[#a90f90]">
                    <div className="w-full flex h-[87px] rounded-t-lg pt-4 pr-6 pb-4 pl-6 bg-gradient-to-r from-[#a90f90] via-[#a90f90] to-[#0c1a51]">
                        <div className="flex w-full items-center">
                            <span className="text-white text-[26px]">
                                Assine o nível 6
                            </span>
                        </div>
                        <div className="w-[139px] h-10 self-center pl-2 border-l-2 border-white">
                            <span className="text-white text-sm relative bottom-1 line-through">
                                R$ 49,99
                            </span>
                            <div className="relative bottom-3">
                                <span className="text-white font-black text-2xl">
                                    R$ 14
                                </span>
                                <span className="text-white font-black text-base relative left-1 bottom-2">
                                    99
                                </span>
                                <span className="text-white font-medium relative left-1 text-sm">
                                    /mês
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[172px] bg-white p-6 border-b border-gray-200 shadow-lg shadow-[#a90f90]">
                        <div>
                            <span className="text-[20px]">
                                Conte com os melhores benefícios no Mercado
                                Livre e do Mercado Pago
                            </span>
                            <div className="flex w-full mt-8">
                                <div className="w-[273px] h-[74px] flex items-center">
                                    <img
                                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg"
                                        alt="Disney Plus"
                                    />
                                    <span className="text-base ml-4 mr-4">
                                        Disney+ sem custo
                                    </span>
                                </div>
                                <div className="w-[273px] h-[74px] flex items-center">
                                    <img
                                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/starplus.svg"
                                        alt="Star Plus"
                                    />
                                    <span className="text-base ml-4 mr-4">
                                        Star+ sem custo
                                    </span>
                                </div>
                                <div className="w-[300px] h-[74px] flex items-center">
                                    <img
                                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png"
                                        alt="Frete Grátis"
                                    />
                                    <span className="text-sm ml-4 mr-4 tracking-tighter">
                                        Frete grátis e rápido a partir de R$ 79
                                        e 45% OFF em fretes de menos de R$ 79
                                    </span>
                                </div>
                                <div className="w-[300px] h-[74px] flex items-center">
                                    <img
                                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/ultrapasse-widget@2x.png"
                                        alt="Descontos"
                                    />
                                    <span className="text-base ml-4 mr-4">
                                        60% OFF no Ultrapasse e outros
                                        benefícios
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between h-[81px] bg-white rounded-b-lg pt-4 pb-4 pl-[30px] pr-[30px] shadow-lg shadow-[#0c1a51]">
                        <span />
                        <a
                            href="https://www.mercadolivre.com.br/assinaturas/nivel-6#origin=widget_l6#c_id=/home/user-loyalty-benefits&c_uid=d46711aa-5c69-475e-b84a-a00c93eb8578"
                            role="button"
                            className="h-12 pl-6 pr-6 text-center flex items-center bg-pallet-blue hover:bg-[#2a6bcc] text-white font-black rounded-md text-base"
                        >
                            Assine
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
