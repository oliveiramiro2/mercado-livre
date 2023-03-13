import React, { useState } from "react";
import clsx from "clsx";
import {
    offer12,
    offer11,
    offer21,
    offer22,
    offer31,
    offer32,
    offer41,
    offer42,
    offer51,
    offer52,
} from "../../utils/imgsImported";
import { IOffer } from "../../interfaces";
import { offerInit } from "../../utils/vars";

const TodayOffers: React.FC = () => {
    const [showInfoOffer, setShowInfoOffer] = useState<IOffer>(offerInit);

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
                            src={showInfoOffer.offer1 ? offer12 : offer11}
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
                            src={showInfoOffer.offer2 ? offer22 : offer21}
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
                            src={showInfoOffer.offer3 ? offer32 : offer31}
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
                            src={showInfoOffer.offer4 ? offer42 : offer41}
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
                            src={showInfoOffer.offer5 ? offer52 : offer51}
                            alt="oferta 5"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
)};

export default TodayOffers;
