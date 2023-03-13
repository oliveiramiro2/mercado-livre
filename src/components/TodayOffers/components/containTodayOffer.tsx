import React from 'react'
import clsx from "clsx";

import { IPropsContainTodayOffer } from '../../../interfaces';
import { offerInit } from '../../../utils/vars';

const ContainTodayOffer: React.FC<IPropsContainTodayOffer> = ({
    setShowInfoOffer,
    showInfoOffer,
    link,
    alt,
    id,
    img1,
    img2,
}) => {
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
    <div
        className="w-[366px] cursor-pointer max-xl:w-[210px]"
        onMouseOver={() => handleShowOffer(id, true)}
        onMouseOut={() => handleShowOffer(id, false)}
        onFocus={() => handleShowOffer(id, true)}
        onBlur={() => handleShowOffer(id, false)}
    >
        <div
            className={clsx("flex flex-col w-[224px] max-xl:w-[200px]", {
                "shadow-xl shadow-zinc-400 delay-100 transition-shadow ease-linear":
                    showInfoOffer,
            })}
        >
            <img src={link} alt={alt} className="w-56 h-56" />
            <img src={hoverImgOffer(id) ? img2 : img1} alt={alt} />
        </div>
    </div>
)};

export default ContainTodayOffer
