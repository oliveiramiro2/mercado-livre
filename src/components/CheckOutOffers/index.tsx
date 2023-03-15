import React from "react";

const CheckOutOffers: React.FC = () => (
    <section className="w-screen h-[399px] flex items-center justify-center">
        <div className="h-[318px] w-[87%]">
            <div className="pl-1 mb-[22px]">
                <h2 className="text-[26px] font-light text-[#666]">Confira</h2>
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
);

export default CheckOutOffers;
