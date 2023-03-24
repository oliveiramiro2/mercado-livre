import React from "react";

import Header from "../../components/Header";
import SwiperMain from "../../components/SwiperMain";
import PaymentSection from "../../components/PaymentSection";
import TodayOffers from "../../components/TodayOffers";
import LevelSix from "../../components/LevelSix";
import Benefits from "../../components/Benefits";
import BrandOffer from "../../components/BrandOffer";
import CheckOutOffers from "../../components/CheckOutOffers";
import PopularCategories from "../../components/PopularCategories";
import BenefitsApp from "../../components/BenefitsApp";
import SemiFooter from "../../components/SemiFooter";

const Home: React.FC = () => {

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
            <BenefitsApp />
            <SemiFooter />
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
