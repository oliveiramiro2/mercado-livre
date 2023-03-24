import React from "react";
import clsx from "clsx";

import { IPropsContainBenefitsApp } from "../../interfaces";
import { allBenefitsApp } from "../../utils/vars";

const ContainBenefitsApp: React.FC<IPropsContainBenefitsApp> = ({
    alt,
    content,
    link,
    linkBenefit,
    title,
    id,
}) => (
    <div
        className={clsx("flex flex-col items-center w-[23%]", {
            "w-[29%]": id === 1,
        })}
    >
        <img src={link} alt={alt} className="h-[20%] mb-5" />
        <div className="flex flex-col items-center gap-y-2">
            <h2 className="font-proxima text-[#4b4b4b] text-xl">{title}</h2>
            <span className={clsx("text-center font-proxima text-[#999] text-[15px]",{
                "border-r": id === 1,
                "border-l": id === 1,
                "border-gray": id === 1,
                "pr-16": id === 1,
                "pl-16": id === 1,
            })}>
                {content}
            </span>
            <a
                href="https://www.mercadolivre.com.br/"
                className="text-pallet-blue relative -bottom-5 font-proxima"
            >
                {linkBenefit}
            </a>
        </div>
    </div>
);

const BenefitsApp: React.FC = () => (
    <section className="w-screen mt-20 bg-white h-[300px] pt-10 pb-8 flex justify-evenly">
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
