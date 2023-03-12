import React from "react";

import { containMidPaymentContent } from "../../utils/vars";
import ContainPayment from "./components/contain";

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
            {containMidPaymentContent.map(value => (
                <ContainPayment
                    key={value.key}
                    alt={value.alt}
                    link={value.link}
                    title={value.title}
                    description={value.description}
                />
            ))}
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
