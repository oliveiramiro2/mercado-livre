import React, { useState } from "react";
import clsx from "clsx";

import { IOffer, IPropsContainTodayOffer } from "../../interfaces";
import { offerInit, offerTodayContent } from "../../utils/vars";

const ContainTodayOffer: React.FC<IPropsContainTodayOffer> = ({
    handleShowOffer,
    showInfoOffer,
    link,
    alt,
    id,
    img1,
    img2,
}) => (
    <div
        className="w-[366px] cursor-pointer"
        onMouseOver={() => handleShowOffer(id, true)}
        onMouseOut={() => handleShowOffer(id, false)}
        onFocus={() => handleShowOffer(id, true)}
        onBlur={() => handleShowOffer(id, false)}
    >
        <div
            className={clsx("flex flex-col w-[224px]", {
                "shadow-xl shadow-zinc-400 delay-100 transition-shadow ease-linear":
                    showInfoOffer,
            })}
        >
            <img src={link} alt={alt} className="w-56 h-56" />
            <img src={showInfoOffer() ? img2 : img1} alt={alt} />
        </div>
    </div>
);

const TodayOffers: React.FC = () => {
    const [showInfoOffer, setShowInfoOffer] = useState<IOffer>(offerInit);

    const handleShowOffer: Function = (index: number, action: boolean): void => {
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

    const hoverImgOffer: Function = (index: number): boolean => {
        switch (index) {
            case 1:
                return showInfoOffer.offer1
            case 2:
                return showInfoOffer.offer2
            case 3:
                return showInfoOffer.offer3
            case 4:
                return showInfoOffer.offer4
            default:
                return showInfoOffer.offer5
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
                    {offerTodayContent.map(value => (
                        <ContainTodayOffer
                            alt={value.alt}
                            handleShowOffer={handleShowOffer}
                            link={value.link}
                            id={value.id}
                            showInfoOffer={() => hoverImgOffer(value.id)}
                            img1={value.img1}
                            img2={value.img2}
                            key={value.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TodayOffers;
