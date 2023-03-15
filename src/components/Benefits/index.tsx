import React, { useState } from "react";
import clsx from "clsx";
import { FcNext } from "react-icons/fc";

import { benefitsContent } from "../../utils/vars";
import ContainBenefits from "./components/containBenefits";

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
                <div className="flex gap-x-4 max-lg:flex-wrap">
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
                            classAnimated={value.classAnimated}
                            key={value.id}
                        />
                    ))}
                </div>
                <button
                    onClick={() => setShowLoyalty4(!showLoyalty4)}
                    type="button"
                    className={clsx(
                        "max-lg:hidden relative left-[97.3%] max-xl:left-[96.5%] max-md:left-[95%] border-none transition-transform ease-in-out duration-400 flex justify-center items-center bottom-40 bg-white bg-opacity-90 text-pallet-blue text-2xl w-16 h-16 max-lg:h-12 max-lg:w-12 rounded-full",
                        {
                            "rotate-180": showLoyalty4,
                            "rotate-0": !showLoyalty4,
                        }
                    )}
                >
                    <FcNext />
                </button>
            </div>
        </section>
    );
};

export default Benefits;
