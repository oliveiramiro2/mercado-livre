import React, { useState } from "react";

import { IOffer } from "../../interfaces";
import { offerInit, offerTodayContent } from "../../utils/vars";
import ContainTodayOffer from "./components/containTodayOffer";

const TodayOffers: React.FC = () => {
    const [showInfoOffer, setShowInfoOffer] = useState<IOffer>(offerInit);

    return (
        <section className="flex justify-center">
            <div className="w-[87%] min-h-[460px]">
                <div className="flex gap-x-3">
                    <h2 className="text-[26px] text-[#666] font-thin">
                        Ofertas do dia
                    </h2>
                    <a
                        className="text-[#1259c3] text-base relative top-[10px]"
                        href="https://www.mercadolivre.com.br/ofertas#c_id=/home/promotions-recommendations/element&c_uid=83303aa3-ee29-49ff-b9ba-0edf5efc870d"
                    >
                        Ver todas
                    </a>
                </div>
                <div className="flex mt-4 max-xl:flex-wrap max-xl:gap-y-5">
                    {offerTodayContent.map(value => (
                        <ContainTodayOffer
                            alt={value.alt}
                            setShowInfoOffer={setShowInfoOffer}
                            link={value.link}
                            id={value.id}
                            showInfoOffer={showInfoOffer}
                            img1={value.img1}
                            img2={value.img2}
                            key={value.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TodayOffers;
