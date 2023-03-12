import React from "react";

import { IPropsPaymentMidContent } from "../../interfaces";

const PaymentMidContain: React.FC<IPropsPaymentMidContent> = ({
    alt,
    description,
    link,
    title,
}) => (
    <div className="flex w-[293px] pl-4 items-center">
        <img
            src={link}
            alt={alt}
            className="w-12 h-12 cursor-pointer"
        />
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

const PaymentSection: React.FC = () => (
    <section className="w-screen min-h-[170px] max-xl:mb-10 max-xl:mt-10 flex justify-center items-center">
        <div className="bg-white w-[87%] gap-y-6 min-h-[90px] flex shadow-lg shadow-slate-500 max-xl:flex-wrap">
            <div className="w-[260px] h-[90px] max-sm:border-none border-r border-[#eee] p-1 flex">
                <div className="w-1 h-full bg-pallet-blue" />
                <div className="w-full text-left flex flex-col justify-center pl-4">
                    <p className="text-lg text-[#333]">
                        Pagamento rápido e seguro
                    </p>
                    <p className="text-[#999] text-sm">com Mercado Pago</p>
                </div>
            </div>
            <PaymentMidContain
                alt="cartão crédito"
                link="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg"
                title="Até 10 parcelas sem juros"
                description="Ver mais"
            />
            <PaymentMidContain
                alt="Parcelamento"
                link="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg"
                title="Parcelamento sem cartão"
                description="Conheça o Mercado Crédito"
            />
            <PaymentMidContain
                alt="Via PIX"
                link="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/qr.svg"
                title="Via Pix"
                description="Ver mais"
            />
            <div className="w-[130px] flex items-center justify-center">
                <img
                    src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg"
                    alt="Mais"
                    className="w-12 h-12 cursor-pointer"
                />
            </div>
        </div>
    </section>
);

export default PaymentSection;
