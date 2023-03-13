import React from "react";

import { IPropsContainLevelSix } from "../../interfaces";
import { levelSixContent } from "../../utils/vars";

const ContainLevelSix: React.FC<IPropsContainLevelSix> = ({
    alt,
    link,
    text,
    classWidth,
}) => (
    <div className={`h-[74px] flex items-center ${classWidth}`}>
        <img src={link} alt={alt} />
        <span className="text-base ml-4 mr-4">{text}</span>
    </div>
);

const LevelSix: React.FC = () => (
    <section className="w-screen h-[420px] flex items-center justify-center">
        <div className="w-[87%] h-[340px] rounded-lg shadow-lg shadow-slate-500">
            <div className="w-full flex h-[87px] rounded-t-lg pt-4 pr-6 pb-4 pl-6 bg-gradient-to-r from-[#a90f90] via-[#a90f90] to-[#0c1a51]  shadow-lg shadow-slate-500">
                <div className="flex w-full items-center">
                    <span className="text-white text-[26px]">
                        Assine o nível 6
                    </span>
                </div>
                <div className="w-[139px] h-10 self-center pl-2 border-l-2 border-white">
                    <span className="text-white text-sm relative bottom-1 line-through">
                        R$ 49,99
                    </span>
                    <div className="relative bottom-3">
                        <span className="text-white font-black text-2xl">
                            R$ 14
                        </span>
                        <span className="text-white font-black text-base relative left-1 bottom-2">
                            99
                        </span>
                        <span className="text-white font-medium relative left-1 text-sm">
                            /mês
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[172px] bg-white p-6 border-b border-gray-200">
                <div>
                    <span className="text-[20px]">
                        Conte com os melhores benefícios no Mercado Livre e do
                        Mercado Pago
                    </span>
                    <div className="flex w-full mt-8">
                        {levelSixContent.map(value => (
                            <ContainLevelSix
                                alt={value.alt}
                                classWidth={value.classWidth}
                                link={value.link}
                                text={value.text}
                                key={value.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between h-[81px] bg-white rounded-b-lg pt-4 pb-4 pl-[30px] pr-[30px]">
                <span />
                <a
                    href="https://www.mercadolivre.com.br/assinaturas/nivel-6#origin=widget_l6#c_id=/home/user-loyalty-benefits&c_uid=d46711aa-5c69-475e-b84a-a00c93eb8578"
                    role="button"
                    className="h-12 pl-6 pr-6 text-center flex items-center bg-pallet-blue hover:bg-[#2a6bcc] transition-colors ease-in-out delay-75 text-white font-black rounded-md text-base"
                >
                    Assine
                </a>
            </div>
        </div>
    </section>
);

export default LevelSix;
