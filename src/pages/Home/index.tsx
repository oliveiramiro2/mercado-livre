import React, { useState } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { IoIosArrowUp } from "react-icons/io";

import Header from "../../components/Header";
import SwiperMain from "../../components/SwiperMain";
import PaymentSection from "../../components/PaymentSection";
import TodayOffers from "../../components/TodayOffers";
import LevelSix from "../../components/LevelSix";
import Benefits from "../../components/Benefits";
import BrandOffer from "../../components/BrandOffer";
import CheckOutOffers from "../../components/CheckOutOffers";
import PopularCategories from "../../components/PopularCategories";

const Home: React.FC = () => {
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
        <div className="flex flex-col w-screen min-h-screen bg-[#ebebeb]">
            <Header />
            <SwiperMain />
            <PaymentSection />
            <TodayOffers />
            <LevelSix />
            <Benefits />
            <BrandOffer />
            <CheckOutOffers />
            <PopularCategories />
            <section className="w-screen mt-20 bg-white h-[300px] pt-10 pb-8 flex justify-evenly">
                <div className="flex flex-col items-center w-[23%]">
                    <img
                        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg"
                        alt="Pagamento"
                        className="h-[20%] mb-5"
                    />
                    <div className="flex flex-col items-center gap-y-2">
                        <h2 className="font-proxima text-[#4b4b4b] text-xl">
                            Escolha como pagar
                        </h2>
                        <span className="text-center font-proxima text-[#999] text-[15px]">
                            Com o Mercado Pago, você paga com cartão, boleto ou
                            Pix. Você também pode pagar em até 12x no boleto com
                            o Mercado Crédito.
                        </span>
                        <a
                            href="https://www.mercadolivre.com.br/"
                            className="text-pallet-blue relative -bottom-5 font-proxima"
                        >
                            Como pagar com Mercado Pago
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[29%]">
                    <img
                        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg"
                        alt="Frete Gratis"
                        className="h-[20%] mb-5"
                    />
                    <div className="flex flex-col items-center gap-y-2">
                        <h2 className="font-proxima text-[#4b4b4b] text-xl">
                            Frete grátis a partir de R$ 79
                        </h2>
                        <span className="border-r border-l border-gray pr-16 pl-16 text-center font-proxima text-[#999] text-[15px]">
                            Só por estar cadastrado no Mercado Livre, você tem
                            frete grátis em milhares de produtos. É um benefício
                            do Mercado Pontos.
                        </span>
                        <a
                            href="https://www.mercadolivre.com.br/"
                            className="text-pallet-blue relative bottom-0 font-proxima"
                        >
                            Saiba mais sobre este benefício
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[23%]">
                    <img
                        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg"
                        alt="Seguro"
                        className="h-[20%] mb-5"
                    />
                    <div className="flex flex-col items-center gap-y-2">
                        <h2 className="font-proxima text-[#4b4b4b] text-xl">
                            Segurança, do início ao fim
                        </h2>
                        <span className="text-center font-proxima text-[#999] text-[15px]">
                            Você não gostou do que comprou? Devolva! No Mercado
                            Livre não há nada que você não possa fazer, porque
                            você está sempre protegido.
                        </span>
                        <a
                            href="https://www.mercadolivre.com.br/"
                            className="text-pallet-blue relative -bottom-5 font-proxima"
                        >
                            Como te protegemos
                        </a>
                    </div>
                </div>
            </section>
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
            <footer className="bg-white z-20 flex justify-center pt-3 pb-3">
                <div className="w-[87%]">
                    <div className="flex gap-x-6">
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Trabalhe conosco
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Termos e condições
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Como cuidamos da sua privacidade
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Acessibilidade
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Contato
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Informações sobre seguros
                        </a>
                    </div>
                    <div>
                        <p className="font-proxima text-xs text-[#999] mt-2">
                            Copyright © 1999-2023 Ebazar.com.br LTDA.
                        </p>
                    </div>
                    <div>
                        <p className="font-proxima text-xs text-[#999]">
                            CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas,
                            nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 -
                            empresa do grupo Mercado Livre.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
