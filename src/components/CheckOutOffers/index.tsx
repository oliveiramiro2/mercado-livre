import React from "react";
import { IPropsCheckOutOffer } from "../../interfaces";

const ContainCheckOutOffer: React.FC<IPropsCheckOutOffer> = ({
    alt,
    link,
    text1,
    text2,
    text3,
}) => (
    <div className="rounded-[4px] w-[584px] h-[250px] bg-white flex justify-between items-center hover:shadow-xl hover:shadow-slate-500 transition-shadow ease-in-out delay-100 cursor-pointer">
        <div className="w-[230px] h-[145px] flex flex-col justify-center text-start ml-8">
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

const CheckOutOffers: React.FC = () => (
    <section className="w-screen h-[399px] flex items-center justify-center">
        <div className="h-[318px] w-[87%]">
            <div className="pl-1 mb-[22px]">
                <h2 className="text-[26px] font-light text-[#666]">Confira</h2>
            </div>
            <div className="rounded-[4px] flex justify-between">
                <ContainCheckOutOffer alt="Entrega full" link="https://http2.mlstatic.com/D_NQ_943131-MLA53860827873_022023-C.webp" text1="OFERTAS DA CASA" text2="COM ENTREGA" text3="FULL⚡⚡⚡" />
                <ContainCheckOutOffer alt="Hyundai" link="https://http2.mlstatic.com/D_NQ_915115-MLA53468402519_012023-C.webp" text1="HYUNDAI DÁ JOGO" text2="SAIA DE CRETA" text3="OFERTA IMPERDÍVEL!" />
            </div>
        </div>
    </section>
);

export default CheckOutOffers;
