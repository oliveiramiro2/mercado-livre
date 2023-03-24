import React from "react";

import { allBenefitsApp } from "../../utils/vars";
import ContainBenefitsApp from "./components/containBenefitsApp";

const BenefitsApp: React.FC = () => (
    <section className="w-screen mt-20 bg-white min-h-[300px] pt-10 pb-8 flex justify-evenly">
        {allBenefitsApp.map(value => (
            <ContainBenefitsApp
                link={value.link}
                alt={value.alt}
                content={value.content}
                linkBenefit={value.linkBenefit}
                title={value.title}
                id={value.id}
                key={value.id}
            />
        ))}
    </section>
);

export default BenefitsApp;
