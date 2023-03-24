import React, { useState } from "react";
import clsx from "clsx";
import gsap from "gsap";

import { IoIosArrowUp } from "react-icons/io";
import {
    semiFooter1,
    semiFooter2,
    semiFooter3,
    semiFooter4,
    semiFooter5,
    semiFooter6,
} from "../../utils/vars";
import ContainSemiFooter from "./components/containSemiFooter";

const SemiFooter: React.FC = () => {
    const [showSemiFooter, setShowSemiFooter] = useState<boolean>(false);

    const handleSemiFooter: Function = (): void => {
        if (!showSemiFooter) {
            gsap.to(".semi-footer", {
                yPercent: 200,
                ease: "easeInOut",
                duration: 0.5,
                display: "none",
            });
        } else {
            gsap.to(".semi-footer", {
                yPercent: 0,
                ease: "easeInOut",
                duration: 0.5,
                display: "flex",
            });
        }
        setShowSemiFooter(!showSemiFooter);
    };

    return (
        <section className="w-screen flex bg-white border-b border-gray-200 flex-col justify-center items-center">
            <button
                type="button"
                className="bg-[#f3f3f0] h-8 pl-5 pr-5 rounded-t-md relative top-1"
                onClick={() => handleSemiFooter()}
            >
                <p className="font-proxima text-[#666] text-sm flex gap-x-1 font-semibold">
                    {!showSemiFooter ? "Menos" : "Mais"} informações{" "}
                    <IoIosArrowUp
                        color="#777"
                        size={14}
                        className={clsx(
                            "relative top-[2px] transition-transform delay-150 duration-300 ease",
                            {
                                "rotate-180": !showSemiFooter,
                            }
                        )}
                    />
                </p>
            </button>
            <div className="semi-footer z-10 bg-[#f3f3f0] w-screen visible transition-opacity ease-in-out duration-500 delay-300 flex justify-center pt-10 pb-8 border-t border-gray-200">
                <div className="w-[87%] flex justify-around max-md:justify-between max-md:flex-wrap">
                    <div className="">
                        <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm max-md:text-[10px]">
                            Sobre o
                        </h3>
                        <ul>
                            {semiFooter1.map(value => (
                                <ContainSemiFooter
                                    text={value.text}
                                    id={value.id}
                                />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm max-md:text-[10px]">
                            Outros sites
                        </h3>
                        <ul>
                            {semiFooter2.map(value => (
                                <ContainSemiFooter
                                    text={value.text}
                                    id={value.id}
                                />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm max-md:text-[10px]">
                            Contato
                        </h3>
                        <ul>
                            {semiFooter3.map(value => (
                                <ContainSemiFooter
                                    text={value.text}
                                    id={value.id}
                                />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm max-md:text-[10px]">
                            Redes sociais
                        </h3>
                        <ul>
                            {semiFooter4.map(value => (
                                <ContainSemiFooter
                                    text={value.text}
                                    id={value.id}
                                />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm max-md:text-[10px]">
                            Minha conta
                        </h3>
                        <ul>
                            {semiFooter5.map(value => (
                                <ContainSemiFooter
                                    text={value.text}
                                    id={value.id}
                                />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm max-md:text-[10px]">
                            Mercado Pontos
                        </h3>
                        <ul>
                            {semiFooter6.map(value => (
                                <ContainSemiFooter
                                    text={value.text}
                                    id={value.id}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SemiFooter;
