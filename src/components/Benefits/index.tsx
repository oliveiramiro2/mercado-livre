import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { FcNext, FcPrevious } from "react-icons/fc";

import { IPropsContainBenefits } from "../../interfaces";
import { benefitsContent } from "../../utils/vars";

const ContainBenefits: React.FC<IPropsContainBenefits> = ({
    alt,
    link1,
    link2,
    text1,
    text2,
    text3,
    showLoyalty4,
    refIndex,
}) => {
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

    const ternaryCondition: Function = (): boolean => {
        if (refIndex === undefined || showLoyalty4 === undefined) return false;
        if (refIndex === 1) return showLoyalty4
        return !showLoyalty4
    };

    const refForContain = () => {
        if (refIndex === undefined) return null;
        if (refIndex === 1) return loyaltyRef1;
        return loyaltyRef4;
    };

    return (
        <div
            ref={() => refForContain()}
            className={clsx("w-96 h-[260px]", {
                hidden: ternaryCondition(),
            })}
        >
            <img
                src={link1}
                alt={alt}
                className="w-96 h-[250px] rounded-md cursor-pointer"
            />
            <div className="relative bottom-[100px] left-[13px] cursor-pointer">
                <div className="flex">
                    <img
                        src={link2}
                        alt="icon"
                        className="w-20 h-20 rounded-lg"
                    />
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
};

const Benefits: React.FC = () => {
    const [showLoyalty4, setShowLoyalty4] = useState<boolean>(false);

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
                <div className="flex gap-x-4">
                    {/* <div
                        ref={loyaltyRef1}
                        className={clsx("w-96 h-[260px]", {
                            hidden: showLoyalty4,
                        })}
                    >
                        <ContainBenefits
                            alt="Disney e Star Plus"
                            link1="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disney/hub-widget-disney-star/Widget_Multicontent_Latam_768-x-566px.jpg"
                            link2="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg"
                            text1=""
                            text2="Sem custo com o nível 6"
                            text3="Disney+ e Star+"
                        />
                    </div>
                    <div className="w-96 h-[260px]">
                        <ContainBenefits
                            alt="HBO Max"
                            link1="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mlb_@2x.webp"
                            link2="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1"
                            text1="7 DIAS GRÁTIS"
                            text2="Até 50% OFF"
                            text3="HBO Max"
                        />
                    </div>
                    <div className="w-96 h-[260px]">
                        <ContainBenefits
                            alt="Paramount Plus"
                            link1="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_mlb_@2x.jpg"
                            link2="https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png"
                            text1="7 DIAS GRÁTIS"
                            text2="Até 50% OFF"
                            text3="Paramount+"
                        />
                    </div>
                    <div
                        ref={loyaltyRef4}
                        className={clsx("w-96 h-[260px]", {
                            hidden: !showLoyalty4,
                        })}
                    >
                        <ContainBenefits
                            alt="Dreezer"
                            link1="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/vdp/deezer/deezer-widget-mlb@2x.jpg"
                            link2="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/deezer/deezer-logo-vdp-filled@2x.png"
                            text1="7 DIAS GRÁTIS"
                            text2="Até 50% OFF"
                            text3="Deezer / App de música"
                        />
                    </div> */}
                    {benefitsContent.map(value => (
                        <ContainBenefits
                            alt={value.alt}
                            link1={value.link1}
                            link2={value.link2}
                            text1={value.text1}
                            text2={value.text2}
                            text3={value.text3}
                            refIndex={value.refIndex}
                            showLoyalty4={showLoyalty4}
                            key={value.id}
                        />
                    ))}
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
