import React from "react";
import { IPropsPaymentMidContent } from "../../../interfaces";

const ContainPayment: React.FC<IPropsPaymentMidContent> = ({
    alt,
    description,
    link,
    title,
}) => (
    <div className="flex w-[293px] pl-4 items-center">
        <img src={link} alt={alt} className="w-12 h-12 cursor-pointer" />
        <div className="pl-4">
            <p className="text-lg text-black">{title}</p>
            <a
                className="text-pallet-blue text-sm relative bottom-1"
                href="https://www.mercadolivre.com.br/gz/home/payments/methods"
            >
                {description}
            </a>
        </div>
    </div>
);

export default ContainPayment;
