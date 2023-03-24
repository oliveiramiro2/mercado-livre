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
            
        </div>
    );
};

export default Home;
