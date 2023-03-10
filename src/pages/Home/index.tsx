import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import clsx from "clsx";
import gsap from "gsap";
import {
    GiSteeringWheel,
    GiChefToque,
    GiLipstick,
    GiBearFace,
    GiSofa,
    GiSmartphone,
    GiSoccerBall,
    GiBalloons,
    GiRetroController,
    GiFactory,
    GiTicket,
    GiViolin,
    GiWatch,
    GiBookCover,
    GiHeartPlus,
} from "react-icons/gi";
import {
    MdNavigateNext,
    MdPets,
    MdPalette,
    MdEngineering,
} from "react-icons/md";
import {
    FaTractor,
    FaBaby,
    FaTshirt,
    FaCar,
    FaMicrophone,
    FaTools,
    FaMusic,
    FaUsers,
} from "react-icons/fa";
import { BsHourglassSplit, BsCameraFill, BsBuilding } from "react-icons/bs";
import { FcNext, FcPrevious } from "react-icons/fc";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { SlScreenDesktop } from "react-icons/sl";
import { HiSquaresPlus } from "react-icons/hi2";
import { IoIosArrowUp } from "react-icons/io";

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

interface iCategory {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
    6: boolean;
    7: boolean;
    8: boolean;
    9: boolean;
    10: boolean;
    11: boolean;
    12: boolean;
    13: boolean;
    14: boolean;
    15: boolean;
    16: boolean;
    17: boolean;
    18: boolean;
    19: boolean;
    20: boolean;
    21: boolean;
    22: boolean;
    23: boolean;
    24: boolean;
    25: boolean;
    26: boolean;
    27: boolean;
    28: boolean;
    29: boolean;
    30: boolean;
    31: boolean;
    32: boolean;
}

const initCatergory: iCategory = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
};

const Home: React.FC = () => {
    const [showNavigation, setShowNavigation] = useState<boolean>(false);
    const [showInfoOffer, setShowInfoOffer] = useState<IOffer>(offerInit);
    const [showLoyalty4, setShowLoyalty4] = useState<boolean>(false);
    const [category, setCategory] = useState<iCategory>(initCatergory);
    const [showCategory, setShowCategory] = useState<number>(0);

    const loyaltyRef4 = useRef(null);
    const loyaltyRef1 = useRef(null);

    useEffect(() => {
        if (showLoyalty4) {
            gsap.fromTo(
                loyaltyRef1.current,
                {
                    opacity: 1,
                    xPercent: 0,
                },
                {
                    opacity: 0,
                    xPercent: -100,
                    ease: "easeInOut",
                }
            );
            gsap.fromTo(
                loyaltyRef4.current,
                {
                    opacity: 0,
                    xPercent: 100,
                },
                {
                    opacity: 1,
                    xPercent: 0,
                    ease: "easeInOut",
                }
            );
        } else {
            gsap.fromTo(
                loyaltyRef4.current,
                {
                    opacity: 1,
                    xPercent: 0,
                },
                {
                    opacity: 0,
                    xPercent: 100,
                    ease: "easeInOut",
                }
            );
            gsap.fromTo(
                loyaltyRef1.current,
                {
                    opacity: 0,
                    xPercent: -100,
                },
                {
                    opacity: 1,
                    xPercent: 0,
                    ease: "easeInOut",
                }
            );
        }
    }, [showLoyalty4]);

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

    const handleShowCategory: Function = (right: boolean): void => {
        if (right && showCategory < 2) setShowCategory(showCategory + 1);
        else if (!right && showCategory > 0) setShowCategory(showCategory - 1);
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
                <div className="bg-white w-[87%] h-[90px] flex shadow-lg shadow-slate-500">
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
                            <div
                                className={clsx("flex flex-col w-[224px]", {
                                    "shadow-xl shadow-zinc-400 delay-100 transition-shadow ease-linear":
                                        showInfoOffer.offer1,
                                })}
                            >
                                <img
                                    src="https://http2.mlstatic.com/D_Q_NP_802413-MLA50710963248_072022-AB.webp"
                                    alt="Celular"
                                    className="w-56 h-56"
                                />
                                <img
                                    src={
                                        showInfoOffer.offer1 ? offer12 : offer11
                                    }
                                    alt="oferta 1"
                                />
                            </div>
                        </div>
                        <div
                            className="w-[366px] cursor-pointer"
                            onMouseOver={() => handleShowOffer(2, true)}
                            onMouseOut={() => handleShowOffer(2, false)}
                            onFocus={() => handleShowOffer(2, true)}
                            onBlur={() => handleShowOffer(2, false)}
                        >
                            <div
                                className={clsx("flex flex-col w-[224px]", {
                                    "shadow-xl shadow-zinc-400 delay-100 transition-shadow ease-linear":
                                        showInfoOffer.offer2,
                                })}
                            >
                                <img
                                    src="https://http2.mlstatic.com/D_Q_NP_927250-MLB52007266563_102022-AB.webp"
                                    alt="Notebook"
                                    className="w-56 h-56"
                                />
                                <img
                                    src={
                                        showInfoOffer.offer2 ? offer22 : offer21
                                    }
                                    alt="oferta 2"
                                />
                            </div>
                        </div>
                        <div
                            className="w-[366px] cursor-pointer"
                            onMouseOver={() => handleShowOffer(3, true)}
                            onMouseOut={() => handleShowOffer(3, false)}
                            onFocus={() => handleShowOffer(3, true)}
                            onBlur={() => handleShowOffer(3, false)}
                        >
                            <div
                                className={clsx("flex flex-col w-[224px]", {
                                    "shadow-xl shadow-zinc-400 delay-100 transition-shadow ease-linear":
                                        showInfoOffer.offer3,
                                })}
                            >
                                <img
                                    src="https://http2.mlstatic.com/D_Q_NP_908551-MLB53668961915_022023-AB.webp"
                                    alt="Máquina de solda"
                                    className="w-56 h-56"
                                />
                                <img
                                    src={
                                        showInfoOffer.offer3 ? offer32 : offer31
                                    }
                                    alt="oferta 3"
                                />
                            </div>
                        </div>
                        <div
                            className="w-[366px] cursor-pointer"
                            onMouseOver={() => handleShowOffer(4, true)}
                            onMouseOut={() => handleShowOffer(4, false)}
                            onFocus={() => handleShowOffer(4, true)}
                            onBlur={() => handleShowOffer(4, false)}
                        >
                            <div
                                className={clsx("flex flex-col w-[224px]", {
                                    "shadow-xl shadow-zinc-400 delay-100 transition-shadow ease-linear":
                                        showInfoOffer.offer4,
                                })}
                            >
                                <img
                                    src="https://http2.mlstatic.com/D_Q_NP_775529-MLB51802661099_102022-AB.webp"
                                    alt="Câmera"
                                    className="w-56 h-56"
                                />
                                <img
                                    src={
                                        showInfoOffer.offer4 ? offer42 : offer41
                                    }
                                    alt="oferta 4"
                                />
                            </div>
                        </div>
                        <div
                            className="w-[366px] cursor-pointer"
                            onMouseOver={() => handleShowOffer(5, true)}
                            onMouseOut={() => handleShowOffer(5, false)}
                            onFocus={() => handleShowOffer(5, true)}
                            onBlur={() => handleShowOffer(5, false)}
                        >
                            <div
                                className={clsx("flex flex-col w-[224px]", {
                                    "shadow-xl shadow-zinc-400 delay-100 transition-shadow ease-linear":
                                        showInfoOffer.offer5,
                                })}
                            >
                                <img
                                    src="https://http2.mlstatic.com/D_Q_NP_781836-MLB52319224650_112022-AB.webp"
                                    alt="Whey"
                                    className="w-56 h-56"
                                />
                                <img
                                    src={
                                        showInfoOffer.offer5 ? offer52 : offer51
                                    }
                                    alt="oferta 5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-screen h-[420px] flex items-center justify-center">
                <div className="w-[87%] h-[340px] rounded-lg shadow-lg shadow-slate-500">
                    <div className="w-full flex h-[87px] rounded-t-lg pt-4 pr-6 pb-4 pl-6 bg-gradient-to-r from-[#a90f90] via-[#a90f90] to-[#0c1a51]  shadow-lg shadow-slate-500">
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
                    <div className="w-full h-[172px] bg-white p-6 border-b border-gray-200">
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
                    <div className="w-full flex justify-between h-[81px] bg-white rounded-b-lg pt-4 pb-4 pl-[30px] pr-[30px]">
                        <span />
                        <a
                            href="https://www.mercadolivre.com.br/assinaturas/nivel-6#origin=widget_l6#c_id=/home/user-loyalty-benefits&c_uid=d46711aa-5c69-475e-b84a-a00c93eb8578"
                            role="button"
                            className="h-12 pl-6 pr-6 text-center flex items-center bg-pallet-blue hover:bg-[#2a6bcc] transition-colors ease-in-out delay-75 text-white font-black rounded-md text-base"
                        >
                            Assine
                        </a>
                    </div>
                </div>
            </section>
            <section className="w-screen h-[400px] flex items-center justify-center">
                <div className="w-[87%] h-[320px]">
                    <div className="flex gap-x-5 mb-[22px]">
                        <h2 className="text-[26px] font-light">
                            Benefícios do Mercado Pontos
                        </h2>
                        <a
                            className="text-pallet-blue font-light relative bottom-1 self-end"
                            href="https://www.mercadolivre.com.br/mercado-pontos#origin=benefits-home"
                        >
                            Conferir todas as vantagens
                        </a>
                    </div>
                    <div className="flex gap-x-4 cursor-pointer">
                        <div
                            ref={loyaltyRef1}
                            className={clsx("w-96 h-[260px]", {
                                hidden: showLoyalty4,
                            })}
                        >
                            <img
                                src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disney/hub-widget-disney-star/Widget_Multicontent_Latam_768-x-566px.jpg"
                                alt="Disney e Star Plus"
                                className="w-96 h-[250px] rounded-md"
                            />
                            <div className="relative bottom-[100px] left-[13px]">
                                <div className="flex">
                                    <img
                                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg"
                                        alt="icon"
                                        className="w-20 h-20 rounded-lg"
                                    />
                                    <div className="flex flex-col justify-center pl-4">
                                        <span className="text-[22px] font-semibold text-white">
                                            Sem custo com o nível 6
                                        </span>
                                        <span className="text-white text-lg tracking-wide">
                                            Disney+ e Star+
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-96 h-[260px] cursor-pointer">
                            <img
                                src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mlb_@2x.webp"
                                alt="HBO Max"
                                className="w-96 h-[250px] rounded-md"
                            />
                            <div className="relative bottom-[100px] left-[13px]">
                                <div className="flex">
                                    <img
                                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1"
                                        alt="Icon"
                                        className="w-20 h-20 rounded-lg"
                                    />
                                    <div className="flex flex-col justify-center pl-4">
                                        <span className="text-[12px] font-semibold text-white">
                                            7 DIAS GRÁTIS
                                        </span>
                                        <span className="text-[22px] font-semibold text-white">
                                            Até 50% OFF
                                        </span>
                                        <span className="text-white text-lg tracking-wide">
                                            HBO Max
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-96 h-[260px] cursor-pointer">
                            <img
                                src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_mlb_@2x.jpg"
                                alt="Paramount Plus"
                                className="w-96 h-[250px] rounded-md"
                            />
                            <div className="relative bottom-[100px] left-[13px]">
                                <div className="flex">
                                    <img
                                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png"
                                        alt="Icon"
                                        className="w-20 h-20 rounded-lg"
                                    />
                                    <div className="flex flex-col justify-center pl-4">
                                        <span className="text-[12px] font-semibold text-white">
                                            7 DIAS GRÁTIS
                                        </span>
                                        <span className="text-[22px] font-semibold text-white">
                                            Até 50% OFF
                                        </span>
                                        <span className="text-white text-lg tracking-wide">
                                            Paramount+
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            ref={loyaltyRef4}
                            className={clsx("w-96 h-[260px] cursor-pointer", {
                                hidden: !showLoyalty4,
                            })}
                        >
                            <img
                                src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/vdp/deezer/deezer-widget-mlb@2x.jpg"
                                alt="Dreezer"
                                className="w-96 h-[250px] rounded-md"
                            />
                            <div className="relative bottom-[100px] left-[13px]">
                                <div className="flex">
                                    <img
                                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/deezer/deezer-logo-vdp-filled@2x.png"
                                        alt="Icon"
                                        className="w-20 h-20 rounded-lg"
                                    />
                                    <div className="flex flex-col justify-center pl-4">
                                        <span className="text-[12px] font-semibold text-white">
                                            7 DIAS GRÁTIS
                                        </span>
                                        <span className="text-[22px] font-semibold text-white">
                                            Até 50% OFF
                                        </span>
                                        <span className="text-white text-lg tracking-wide">
                                            Deezer / App de música
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowLoyalty4(!showLoyalty4)}
                        type="button"
                        className={clsx(
                            "relative left-[97.3%] border-none flex justify-center items-center bottom-40 bg-white bg-opacity-90 text-pallet-blue text-2xl w-16 h-16 rounded-full",
                            {
                                "-left-8": showLoyalty4,
                            }
                        )}
                    >
                        {showLoyalty4 ? <FcPrevious /> : <FcNext />}
                    </button>
                </div>
            </section>
            <section className="w-screen h-[380px] pt-16">
                <div className="flex items-center justify-center cursor-pointer">
                    <div className="w-[87%] h-[250px] flex">
                        <img
                            src="https://http2.mlstatic.com/D_NQ_945960-MLA53711315255_022023-OO.jpg"
                            alt="Mulheres"
                            className="w-[700px] h-[250px] rounded-l-[4px]"
                        />
                        <div className="w-[480px] h-[250px] p-16 bg-[#8533af] rounded-r-[4px]">
                            <div className="flex flex-col gap-y-7">
                                <div>
                                    <p className="text-white text-2xl font-semibold">
                                        MÊS DE OFERTAS
                                    </p>
                                    <p className="text-white text-2xl font-semibold">
                                        DESCONTOS ATÉ 40%
                                    </p>
                                </div>
                                <p className="text-white text-lg font-normal flex items-center gap-x-3">
                                    Confira{" "}
                                    <MdNavigateNext size={22} color="#fff" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bottom-40 left-[150px] p-3 pl-4 w-32 bg-white">
                    <img
                        src="https://http2.mlstatic.com/D_NQ_733938-MLA53711303917_022023-OO.jpg"
                        alt="Marisa"
                        className="w-24 h-16"
                    />
                </div>
            </section>
            <section className="w-screen h-[399px] flex items-center justify-center">
                <div className="h-[318px] w-[87%]">
                    <div className="pl-1 mb-[22px]">
                        <h2 className="text-[26px] font-light text-[#666]">
                            Confira
                        </h2>
                    </div>
                    <div className="rounded-[4px] flex justify-between">
                        <div className="rounded-[4px] w-[584px] h-[250px] bg-white flex justify-between items-center hover:shadow-xl hover:shadow-slate-500 transition-shadow ease-in-out delay-100 cursor-pointer">
                            <div className="w-[230px] h-[145px] flex flex-col justify-center text-start ml-8">
                                <span className="text-[#4b4b4b] font-semibold mb-1 text-[11px] tracking-[5px]">
                                    OFERTAS DA CASA
                                </span>
                                <span className="text-[28px] font-semibold text-[#4b4b4b]">
                                    COM ENTREGA
                                </span>
                                <span className="text-[28px] relative bottom-2 font-semibold text-[#4b4b4b]">
                                    FULL⚡⚡⚡
                                </span>
                                <button
                                    className="self-start w-24 h-12 rounded-sm bg-pallet-blue text-white font-semibold hover:bg-[#2a6bcc] transition-colors ease-in-out delay-75"
                                    type="button"
                                >
                                    Confira
                                </button>
                            </div>
                            <img
                                src="https://http2.mlstatic.com/D_NQ_943131-MLA53860827873_022023-C.webp"
                                alt="Entrega full"
                                className="w-[300px] h-[250px] rounded-r-[4px]"
                            />
                        </div>
                        <div className="rounded-[4px] w-[584px] h-[250px] bg-white flex justify-between items-center hover:shadow-xl hover:shadow-slate-500 transition-shadow ease-in-out delay-100 cursor-pointer">
                            <div className="w-[300px] h-[145px] flex flex-col justify-center text-start ml-8">
                                <span className="text-[#4b4b4b] font-semibold mb-3 text-[11px] tracking-[5px]">
                                    HYUNDAI DÁ JOGO
                                </span>
                                <span className="text-2xl font-semibold text-[#4b4b4b]">
                                    SAIA DE CRETA
                                </span>
                                <span className="text-2xl relative bottom-2 font-semibold text-[#4b4b4b]">
                                    OFERTA IMPERDÍVEL!
                                </span>
                                <button
                                    className="self-start w-24 h-10 rounded-sm bg-pallet-blue text-white font-semibold hover:bg-[#2a6bcc] transition-colors ease-in-out delay-75"
                                    type="button"
                                >
                                    Confira
                                </button>
                            </div>
                            <img
                                src="https://http2.mlstatic.com/D_NQ_915115-MLA53468402519_012023-C.webp"
                                alt="Hyundai"
                                className="w-[280px] h-[250px] rounded-r-[4px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-screen h-[420px] flex items-center justify-center">
                <div className="max-w-[87.5%] h-[389px] rounded-lg mb-5">
                    <div className="pl-1 mb-[22px] ml-2 mt-2 flex justify-between">
                        <h2 className="text-[26px] font-light text-[#666]">
                            Categorias populares
                        </h2>
                        <div className="flex items-center mr-1 gap-x-2">
                            <div
                                className={clsx(
                                    "h-[6px] w-[6px] transition-colors rounded-full bg-gray-500 bg-opacity-20",
                                    {
                                        "bg-[#3483fa] bg-opacity-100":
                                            showCategory === 0,
                                    }
                                )}
                            />
                            <div
                                className={clsx(
                                    "h-[6px] w-[6px] transition-colors rounded-full bg-gray-500 bg-opacity-20",
                                    {
                                        "bg-[#3483fa] bg-opacity-100":
                                            showCategory === 1,
                                    }
                                )}
                            />
                            <div
                                className={clsx(
                                    "h-[6px] w-[6px] transition-colors rounded-full bg-gray-500 bg-opacity-20",
                                    {
                                        "bg-[#3483fa] bg-opacity-100":
                                            showCategory === 2,
                                    }
                                )}
                            />
                        </div>
                    </div>
                    <div className="w-full overflow-x-hidden bg-white rounded">
                        <div
                            className={clsx(
                                "flex transition-all ease-in-out delay-200 relative",
                                {
                                    "right-0": showCategory === 0,
                                    "right-[100%]": showCategory === 1,
                                    "right-[128.6%]": showCategory === 2,
                                }
                            )}
                        >
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[1],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            1: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            1: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiSteeringWheel
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[1],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[1],
                                        })}
                                    >
                                        Acessórios para Veículos
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[2],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            2: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            2: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaTractor
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[2],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[2],
                                        })}
                                    >
                                        Agro
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[3],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            3: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            3: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiChefToque
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[3],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[3],
                                        })}
                                    >
                                        Alimentos e Bebidas
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[4],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            4: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            4: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <MdPets
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[4],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[4],
                                        })}
                                    >
                                        Animais
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[5],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            5: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            5: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <BsHourglassSplit
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[5],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima text-center w-[80%]",
                                            {
                                                "text-white": category[5],
                                            }
                                        )}
                                    >
                                        Antiguidades e Coleções
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[6],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            6: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            6: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <MdPalette
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[6],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima text-center",
                                            {
                                                "text-white": category[6],
                                            }
                                        )}
                                    >
                                        Arte, Papelaria e Armarinho
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[7],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            7: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            7: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaBaby
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[7],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[7],
                                        })}
                                    >
                                        Bebês
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[8],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            8: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            8: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiLipstick
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[8],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima text-center w-[80%]",
                                            {
                                                "text-white": category[8],
                                            }
                                        )}
                                    >
                                        Beleza e Cuidado Pessoal
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[9],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            9: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            9: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiBearFace
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[9],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[9],
                                        })}
                                    >
                                        Brinquedo e Hobbies
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[10],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            10: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            10: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaTshirt
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[10],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima text-center",
                                            {
                                                "text-white": category[10],
                                            }
                                        )}
                                    >
                                        Calçados, Roupas e Bolsas
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[11],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            11: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            11: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <BsCameraFill
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[11],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[11],
                                        })}
                                    >
                                        Câmera e Acessórios
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[12],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            12: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            12: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaCar
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[12],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[12],
                                        })}
                                    >
                                        Carros, Motos e Outros
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[13],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            13: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            13: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiSofa
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[13],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[13],
                                            }
                                        )}
                                    >
                                        Casa, Móveis e decoração
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[14],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            14: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            14: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiSmartphone
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[14],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[14],
                                        })}
                                    >
                                        Celulares e Telefones
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[15],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            15: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            15: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <MdEngineering
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[15],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[15],
                                            }
                                        )}
                                    >
                                        Construção
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[16],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            16: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            16: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <CgSmartHomeRefrigerator
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[16],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[16],
                                        })}
                                    >
                                        Eletrodomésticos
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[17],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            17: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            17: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaMicrophone
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[17],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[17],
                                            }
                                        )}
                                    >
                                        Eletrônicos, Áudio e Vídeo
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[18],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            18: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            18: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiSoccerBall
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[18],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[18],
                                        })}
                                    >
                                        Esportes e Fitness
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[19],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            19: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            19: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaTools
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[19],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[19],
                                            }
                                        )}
                                    >
                                        Ferramentas
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[20],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            20: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            20: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiBalloons
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[20],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[20],
                                        })}
                                    >
                                        Festas e Lembrancinhas
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[21],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            21: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            21: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiRetroController
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[21],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[21],
                                            }
                                        )}
                                    >
                                        Games
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[22],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            22: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            22: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <BsBuilding
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[22],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[22],
                                        })}
                                    >
                                        Imóveis
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[23],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            23: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            23: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiFactory
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[23],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[23],
                                            }
                                        )}
                                    >
                                        Indústria e Comércio
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[24],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            24: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            24: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <SlScreenDesktop
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[24],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[24],
                                        })}
                                    >
                                        Informática
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[25],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            25: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            25: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiTicket
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[25],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[25],
                                            }
                                        )}
                                    >
                                        Ingressos
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[26],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            26: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            26: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiViolin
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[26],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[26],
                                        })}
                                    >
                                        Instrumentos Musicais
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[27],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            27: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            27: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiWatch
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[27],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[27],
                                            }
                                        )}
                                    >
                                        Joias e Relógios
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[28],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            28: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            28: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiBookCover
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[28],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[28],
                                            }
                                        )}
                                    >
                                        Livros, Revistas e Comics
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[29],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            29: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            29: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaMusic
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[29],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[29],
                                            }
                                        )}
                                    >
                                        Música, Filmes e Seriados
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[30],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            30: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            30: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiHeartPlus
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[30],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[30],
                                            }
                                        )}
                                    >
                                        Saúde
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[31],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            31: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            31: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaUsers
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[31],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[31],
                                            }
                                        )}
                                    >
                                        Serviços
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[32],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            32: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            32: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <HiSquaresPlus
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[32],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[32],
                                            }
                                        )}
                                    >
                                        Mais Categorias
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    {showCategory < 2 && (
                        <button
                            onClick={() => handleShowCategory(true)}
                            type="button"
                            className="relative left-[97.3%] bottom-48 border-none flex justify-center items-center bg-white bg-opacity-90 text-pallet-blue text-2xl w-16 h-16 rounded-full hover:shadow-lg hover:shadow-slate-500 transition-shadow ease-in-out delay-75"
                        >
                            <FcNext />
                        </button>
                    )}
                    {showCategory > 0 && (
                        <button
                            onClick={() => handleShowCategory(false)}
                            type="button"
                            className={clsx(
                                "relative -left-[25px] bottom-64 border-none flex justify-center items-center bg-white bg-opacity-90 text-pallet-blue text-2xl w-16 h-16 rounded-full hover:shadow-lg hover:shadow-slate-500 transition-shadow ease-in-out delay-75",
                                {
                                    "bottom-[12rem]": showCategory === 2,
                                }
                            )}
                        >
                            <FcPrevious />
                        </button>
                    )}
                </div>
            </section>
            <div className="w-screen mt-20 flex border-b border-gray-200 flex-col justify-center items-center">
                <button
                    type="button"
                    className="bg-[#fff9f9] h-8 pl-5 pr-5 rounded-t-md"
                >
                    <p className="font-proxima text-[#666] text-sm flex gap-x-1">
                        Mais informações{" "}
                        <IoIosArrowUp
                            color="#777"
                            size={14}
                            className="relative top-[2px]"
                        />
                    </p>
                </button>
                <div className="bg-[#fff9f9] w-screen">
                    <div>
                        <h3>Sobre o</h3>
                        <ul>
                            <li>
                                <a href="http://https://www.mercadolivre.com.br/">
                                    Mercado Livre
                                </a>
                            </li>
                            <li>
                                <a href="http://https://www.mercadolivre.com.br/">
                                    Investor relations
                                </a>
                            </li>
                            <li>
                                <a href="http://https://www.mercadolivre.com.br/">
                                    Tendências
                                </a>
                            </li>
                            <li>
                                <a href="http://https://www.mercadolivre.com.br/">
                                    Sustentabilidade
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                        <h3>Outros sites</h3>
                        <ul></ul>
                    </div>
                    <div>
                        <h3>Contato</h3>
                        <ul></ul>
                    </div>
                    <div>
                        <h3>Redes sociais</h3>
                        <ul></ul>
                    </div>
                    <div>
                        <h3>Minha conta</h3>
                        <ul></ul>
                    </div>
                    <div>
                        <h3>Mercado Pontos</h3>
                        <ul></ul>
                    </div> */}
                </div>
            </div>
            <footer className="bg-white flex justify-center pt-3 pb-3">
                <div className="w-[87%]">
                    <div className="flex gap-x-6">
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Trabalhe conosco
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Termos e condições
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Como cuidamos da sua privacidade
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Acessibilidade
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Contato
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Informações sobre seguros
                        </a>
                    </div>
                    <div>
                        <p className="font-proxima text-xs text-[#999] mt-2">
                            Copyright © 1999-2023 Ebazar.com.br LTDA.
                        </p>
                    </div>
                    <div>
                        <p className="font-proxima text-xs text-[#999]">
                            CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas,
                            nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 -
                            empresa do grupo Mercado Livre.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
