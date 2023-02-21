import React from "react";

const logo =
    "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/logo-pt__large_plus.png";

const Header: React.FC = () => {
    return (
        <div className="h-[100px] w-screen bg-pallet-yellow pt-3 pl-20 pr-20">
            <a href="https://www.mercadolivre.com.br/">
                <div
                    className="h-[34px] w-[134px] bg-no-repeat -indent-[999px]"
                    style={{ backgroundImage: `url(${logo})` }}
                >
                    <a href="https://www.mercadolivre.com.br/" tabIndex={-2}>
                        Mercado Livre Brasil - Onde comprar e vender de Tudo
                    </a>
                </div>
            </a>
        </div>
    );
};

export default Header;
