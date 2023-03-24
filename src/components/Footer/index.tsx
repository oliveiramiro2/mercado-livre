import React from "react";
import { footerLinks } from "../../utils/vars";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white z-20 flex justify-center pt-3 pb-3">
            <div className="w-[87%]">
                <div className="flex gap-x-6">
                    {footerLinks.map(value => (
                        <a
                            className="font-proxima text-[13px] max-md:text-[10px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                            key={value.id}
                        >
                            {value.text}
                        </a>
                    ))}
                </div>
                <div>
                    <p className="font-proxima text-xs max-md:text-[10px] mb-1 text-[#999] mt-2">
                        Copyright © 1999-2023 Ebazar.com.br LTDA.
                    </p>
                </div>
                <div>
                    <p className="font-proxima text-xs max-md:text-[10px] text-[#999]">
                        CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº
                        3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do
                        grupo Mercado Livre.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
