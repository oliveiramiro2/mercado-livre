import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { FcNext, FcPrevious } from "react-icons/fc";

import { IPropsContainBenefits } from "../../interfaces";

const ContainBenefits: React.FC<IPropsContainBenefits> = ({
    alt,
    link1,
    link2,
    text1,
    text2,
    text3,
}) => (
    <div>
        <img src={link1} alt={alt} className="w-96 h-[250px] rounded-md" />
        <div className="relative bottom-[100px] left-[13px]">
            <div className="flex">
                <img src={link2} alt="icon" className="w-20 h-20 rounded-lg" />
                <div className="flex flex-col justify-center pl-4">
                    {text1.length > 1 && (
                        <span className="text-[12px] font-semibold text-white">
                            {text1}
                        </span>
                    )}
                    <span className="text-[22px] font-semibold text-white">
                        {text2}
                    </span>
                    <span className="text-white text-lg tracking-wide">
                        {text3}
                    </span>
                </div>
            </div>
        </div>
    </div>
);

const Benefits: React.FC = () => {
    const [showLoyalty4, setShowLoyalty4] = useState<boolean>(false);

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

    return (
        <section className="w-screen min-h-[400px] flex items-center justify-center">
            <div className="w-[87%] min-h-[320px]">
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
                        {/* <img
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
                        </div> */}
                        
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
    );
};

export default Benefits;
