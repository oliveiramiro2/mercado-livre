import React from "react";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import { logo, disneyPlus } from "../../../utils/imgsImported";
import { IPropsFirstLevelHeader } from "../../../interfaces";

const FirstLevelHeader: React.FC<IPropsFirstLevelHeader> = ({
    setShowMenu,
    showMenu,
}) => (
    <div className="flex gap-x-14 max-sm:gap-x-0">
        <div className="hidden max-md:flex absolute top-4 left-1">
            <a href="https://www.mercadolivre.com.br/">
                <img
                    src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__small@2x.png"
                    alt="Logo"
                    className="h-6 w-10"
                />
            </a>
        </div>
        <div className="flex max-md:hidden">
            <a href="https://www.mercadolivre.com.br/">
                <div
                    className="h-[34px] w-[134px] bg-no-repeat -indent-[999px] mt-1"
                    style={{ backgroundImage: `url(${logo})` }}
                >
                    <a href="https://www.mercadolivre.com.br/" tabIndex={-2}>
                        Mercado Livre Brasil - Onde comprar e vender de Tudo
                    </a>
                </div>
            </a>
        </div>
        <div className="flex max-xl:justify-center gap-x-14 w-full">
            <div className="bg-white pl-2 pr-2 h-[38px] max-w-[600px] max-md:w-[75%] w-full min-2xl:w-[600px] flex rounded-sm shadow-md border-l-2 border-r-2 border-b border-[#fffb005d]">
                <input
                    type="text"
                    className="outline-none h-[34px] relative top-[2px] w-full pl-2 font-proxima placeholder:text-gray-300 placeholder:font-thin placeholder:font-proxima"
                    placeholder="Buscar produtos, marcas e muitos mais..."
                />
                <div className="border-l border-[#e7e4e4] flex justify-center items-center h-4/6 self-center">
                    <button type="button" className="pl-3 pr-1 h-4/5">
                        <IoIosSearch
                            color="#888585"
                            className="relative"
                            size={21}
                        />
                    </button>
                </div>
            </div>
            <div className="hidden max-md:flex absolute top-[3%] right-[3%]">
                <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    {showMenu ? <IoMdClose /> : <GiHamburgerMenu />}
                </button>
            </div>
            <div className="flex max-xl:hidden">
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
);

export default FirstLevelHeader;
