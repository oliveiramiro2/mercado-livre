import React from "react";

import ContainCheckOutOffer from "./components/containCheckOutOffer";

const CheckOutOffers: React.FC = () => (
    <section className="w-screen min-h-[399px] flex items-center justify-center">
        <div className="min-h-[318px] w-[87%]">
            <div className="pl-1 mb-[22px]">
                <h2 className="text-[26px] font-light text-[#666]">Confira</h2>
            </div>
            <div className="rounded-[4px] flex justify-between max-xl:flex-wrap">
                <ContainCheckOutOffer
                    alt="Entrega full"
                    link="https://http2.mlstatic.com/D_NQ_943131-MLA53860827873_022023-C.webp"
                    text1="OFERTAS DA CASA"
                    text2="COM ENTREGA"
                    text3="FULL⚡⚡⚡"
                />
                <ContainCheckOutOffer
                    alt="Hyundai"
                    link="https://http2.mlstatic.com/D_NQ_915115-MLA53468402519_012023-C.webp"
                    text1="HYUNDAI DÁ JOGO"
                    text2="SAIA DE CRETA"
                    text3="OFERTA IMPERDÍVEL!"
                />
            </div>
        </div>
    </section>
);

export default CheckOutOffers;
