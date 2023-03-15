import React from "react";
import { MdNavigateNext } from "react-icons/md";

const BrandOffer: React.FC = () => (
    <section className="w-screen h-[380px] pt-16 max-xl:scale-95 max-lg:scale-75 max-md:scale-50">
        <div className="flex items-center justify-center max-lg:relative max-lg:right-36 cursor-pointer">
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
                            Confira <MdNavigateNext size={22} color="#fff" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative bottom-40 max-lg:left-[0px] max-md:-left-[50px] max-sm:-left-[70px] left-[150px] p-3 pl-4 w-32 bg-white">
            <img
                src="https://http2.mlstatic.com/D_NQ_733938-MLA53711303917_022023-OO.jpg"
                alt="Marisa"
                className="w-24 h-16"
            />
        </div>
    </section>
);

export default BrandOffer;
