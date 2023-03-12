import React from "react";

const PaymentSection: React.FC = () => (
        <section className="w-screen h-[170px] flex justify-center items-center">
            <div className="bg-white w-[87%] h-[90px] flex shadow-lg shadow-slate-500">
                <div className="w-[260px] h-[90px] border-r border-[#eee] p-1 flex">
                    <div className="w-1 h-full bg-pallet-blue" />
                    <div className="w-full text-left flex flex-col justify-center pl-4">
                        <p className="text-xl text-[#333]">
                            Pagamento rápido e seguro
                        </p>
                        <p className="text-[#999] text-sm">com Mercado Pago</p>
                    </div>
                </div>
                <div className="flex w-[293px] pl-4 items-center">
                    <img
                        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg"
                        alt="cartão crédito"
                        className="w-12 h-12 cursor-pointer"
                    />
                    <div className="pl-4">
                        <p className="text-xl text-black">
                            Até 10 parcelas sem juros
                        </p>
                        <a
                            className="text-pallet-blue text-sm relative bottom-1"
                            href="https://www.mercadolivre.com.br/gz/home/payments/methods"
                        >
                            Ver mais
                        </a>
                    </div>
                </div>
                <div className="flex w-[293px] pl-4 items-center">
                    <img
                        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg"
                        alt="Parcelamento"
                        className="w-12 h-12 cursor-pointer"
                    />
                    <div className="pl-4">
                        <p className="text-xl text-black">
                            Parcelamento sem cartão
                        </p>
                        <a
                            className="text-pallet-blue text-sm relative bottom-1"
                            href="https://www.mercadolivre.com.br/mercado-credito/boleto-parcelado/?sk=RHRsnBTf"
                        >
                            Conheça o Mercado Crédito
                        </a>
                    </div>
                </div>
                <div className="flex w-[233px] pl-4 items-center">
                    <img
                        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/qr.svg"
                        alt="Via PIX"
                        className="w-12 h-12 cursor-pointer"
                    />
                    <div className="pl-4">
                        <p className="text-xl text-black">Via Pix</p>
                        <a
                            className="text-pallet-blue text-sm relative bottom-1"
                            href="https://www.mercadolivre.com.br/gz/home/payments/methods#pix"
                        >
                            Ver mais
                        </a>
                    </div>
                </div>
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
