import React from "react";
import clsx from "clsx";

import { IPropsContainBenefitsApp } from "../../interfaces";

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
            <span className="text-center font-proxima text-[#999] text-[15px]">
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
        {/* <div className="flex flex-col items-center w-[23%]">
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
                    Com o Mercado Pago, você paga com cartão, boleto ou Pix.
                    Você também pode pagar em até 12x no boleto com o Mercado
                    Crédito.
                </span>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="text-pallet-blue relative -bottom-5 font-proxima"
                >
                    Como pagar com Mercado Pago
                </a>
            </div>
        </div> */}
        <ContainBenefitsApp
            link="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg"
            alt="Pagamento"
            content="Com o Mercado Pago, você paga com cartão, boleto ou Pix.
            Você também pode pagar em até 12x no boleto com o Mercado
            Crédito."
            linkBenefit="Como pagar com Mercado Pago"
            title="Escolha como pagar"
            id={0}
        />
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
                    Só por estar cadastrado no Mercado Livre, você tem frete
                    grátis em milhares de produtos. É um benefício do Mercado
                    Pontos.
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
                    Você não gostou do que comprou? Devolva! No Mercado Livre
                    não há nada que você não possa fazer, porque você está
                    sempre protegido.
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
);

export default BenefitsApp;
