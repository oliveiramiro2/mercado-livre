import React, { useState } from 'react'
import clsx from "clsx";
import gsap from "gsap";

import { IoIosArrowUp } from 'react-icons/io'

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
                    <div className="w-[87%] flex justify-around">
                        <div className="">
                            <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm">
                                Sobre o
                            </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Mercado Livre
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Investor relations
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Tendências
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Sustentabilidade
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm">
                                Outros sites
                            </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Desenvolvedores
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Mercado Pago
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Mercado Envios
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Mercado Shops
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Mercado Ads
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm">
                                Contato
                            </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Comprar
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Vender
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Solução de problemas
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Segurança
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm">
                                Redes sociais
                            </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        YouTube
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm">
                                Minha conta
                            </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Entre
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Vender
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm">
                                Mercado Pontos
                            </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Nivel 6
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Disney+
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Star+
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        HBO MAX
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Paramount+
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Deezer
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default SemiFooter