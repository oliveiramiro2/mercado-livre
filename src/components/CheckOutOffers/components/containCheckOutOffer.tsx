import React from "react";
import { IPropsCheckOutOffer } from "../../../interfaces";

const ContainCheckOutOffer: React.FC<IPropsCheckOutOffer> = ({
    alt,
    link,
    text1,
    text2,
    text3,
}) => (
    <div className="rounded-[4px] w-[584px] h-[250px] bg-white flex justify-between items-center hover:shadow-xl hover:shadow-slate-500 transition-shadow ease-in-out delay-100 cursor-pointer max-xl:scale-95 max-lg:scale-90 max-md:scale-75 max-md:relative max-md:right-[10%]">
        <div className="min-w-[230px] h-[145px] flex flex-col justify-center text-start ml-8">
            <span className="text-[#4b4b4b] font-semibold mb-1 text-[11px] tracking-[5px]">
                {text1}
            </span>
            <span className="text-[28px] font-semibold text-[#4b4b4b]">
                {text2}
            </span>
            <span className="text-[28px] relative bottom-2 font-semibold text-[#4b4b4b]">
                {text3}
            </span>
            <button
                className="self-start w-24 h-12 rounded-sm bg-pallet-blue text-white font-semibold hover:bg-[#2a6bcc] transition-colors ease-in-out delay-75"
                type="button"
            >
                Confira
            </button>
        </div>
        <img
            src={link}
            alt={alt}
            className="w-[300px] h-[250px] rounded-r-[4px]"
        />
    </div>
);

export default ContainCheckOutOffer
