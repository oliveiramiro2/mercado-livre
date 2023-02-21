import React from "react";

const logo =
    "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/logo-pt__large_plus.png";
const disneyPlus =
    "https://http2.mlstatic.com/D_NQ_618580-MLA52432822706_112022-OO.webp";

const Header: React.FC = () => {
    return (
        <header className="h-[100px] w-screen flex flex-col bg-pallet-yellow pt-2 pl-20 pr-20">
            <div className="flex gap-x-14">
                <div className="flex">
                    <a href="https://www.mercadolivre.com.br/">
                        <div
                            className="h-[34px] w-[134px] bg-no-repeat -indent-[999px] mt-1"
                            style={{ backgroundImage: `url(${logo})` }}
                        >
                            <a
                                href="https://www.mercadolivre.com.br/"
                                tabIndex={-2}
                            >
                                Mercado Livre Brasil - Onde comprar e vender de
                                Tudo
                            </a>
                        </div>
                    </a>
                </div>
                <div className="flex gap-x-14">
                    <div className="bg-white pl-2 pr-2 h-[38px] w-[600px] flex rounded-sm shadow border-l border-r border-b border-[#bebebe1a]">
                        <input
                            type="text"
                            className="outline-none h-[34px] w-full pl-2 placeholder:text-gray-300 placeholder:w"
                            placeholder="Buscar produtos, marcas e muitos mais..."
                            aria-placeholder="fdsfsdfds"
                        />
                        <div className="border-l border-[#eee] flex justify-center items-center h-4/6 self-center">
                            <button type="button" className="pl-3 pr-2 h-4/5">

                            </button>
                        </div>
                    </div>
                    <div className="flex">
                        <a href="https://www.mercadolivre.com.br/assinaturas/nivel-6#origin=banner-menu#DEAL_ID=&S=MKT&V=7&T=MENU&L=LOYALTYNIVEL6T3_NIVEL6&origin=banner-menu&me.position=0&me.bu_line=26&me.flow=-1&me.bu=3&me.audience=all&me.content_id=BANNER_MENU_NIVEL_1A5&me.component_id=banner_menu_web_ml&me.logic=user_journey">
                            <img
                                src={disneyPlus}
                                alt="DisneyPlus"
                                className="max-w-[340px]"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <ul className="flex mt-4 gap-x-4">
                    <li className="mr-14">
                        <span>Informe seu CEP</span>
                    </li>
                    <li className="ml-1">
                        <span>Categorias</span>
                    </li>
                    <li>
                        <span>Ofertas do dia</span>
                    </li>
                    <li>
                        <span>Histórico</span>
                    </li>
                    <li>
                        <span>Moda</span>
                    </li>
                    <li>
                        <span>Vender</span>
                    </li>
                    <li>
                        <span>Contato</span>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
