import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const logo =
    "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/logo-pt__large_plus.png";
const disneyPlus =
    "https://http2.mlstatic.com/D_NQ_618580-MLA52432822706_112022-OO.webp";

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <header className="h-[100px] w-screen flex flex-col bg-pallet-yellow pt-2 pl-20 pr-20">
            <div className="flex gap-x-14 max-sm:gap-x-0">
                <div className="flex max-md:hidden">
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
                <div className="hidden max-md:flex absolute top-[3%] right-[5%]">
                    <button type="button" className="cursor-pointer">
                        <GiHamburgerMenu />
                    </button>
                </div>
                <div className="flex max-xl:justify-center gap-x-14 w-full">
                    <div className="bg-white pl-2 pr-2 h-[38px] max-w-[600px] w-full min-2xl:w-[600px] flex rounded-sm shadow-md border-l-2 border-r-2 border-b border-[#fffb005d]">
                        <input
                            type="text"
                            className="outline-none h-[34px] relative top-[2px] w-full pl-2 font-proxima placeholder:text-gray-300 placeholder:font-thin placeholder:font-proxima"
                            placeholder="Buscar produtos, marcas e muitos mais..."
                        />
                        <div className="border-l border-[#e7e4e4] flex justify-center items-center h-4/6 self-center">
                            <button type="button" className="pl-3 pr-1 h-4/5">
                                <IoIosSearch
                                    color="#888585"
                                    className="relative bottom-1"
                                    size={21}
                                />
                            </button>
                        </div>
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
            <div className="flex">
                <button
                    type="button"
                    className="mr-16 w-[100px] h-10 relative top-2 left-2 transition-all ease-out delay-100 hover:border border-[#eadd61] rounded max-xl:absolute max-xl:top-[8.5%] max-xl:left-[9%] max-sm:hidden"
                >
                    <div className="w-[101px] h-8 flex justify-start text-left">
                        <CiLocationOn size={30} />
                        <span className="text-xs font-proxima relative top-1 font-thin text-[#00000080]">
                            Informe seu{" "}
                            <span className="relative bottom-[2px] text-[13px]">
                                CEP
                            </span>
                        </span>
                    </div>
                </button>
                <ul className="flex mt-4 gap-x-5 relative left-[2%] justify-center max-sm:static max-md:left-[12%] max-sm:gap-x-2 max-lg:left-[15%] max-xl:w-full">
                    <li className="ml-[6px] relative top-2 cursor-pointer">
                        <div className="flex items-center">
                            <span className="font-proxima tracking-wider text-[#00000080] text-sm max-sm:text-xs">
                                Categorias
                            </span>
                            <BiChevronDown color="#9e9d9d" size={17} />
                        </div>
                    </li>
                    <li className="relative top-1 cursor-pointer min-w-[100px]">
                        <span className="font-proxima tracking-wider text-[#00000080] text-sm max-sm:text-xs">
                            Ofertas do dia
                        </span>
                    </li>
                    <li className="relative top-1 cursor-pointer">
                        <span className="font-proxima tracking-wider text-[#00000080] text-sm max-sm:text-xs">
                            Histórico
                        </span>
                    </li>
                    <li className="relative top-1 cursor-pointer">
                        <span className="font-proxima tracking-wider text-[#00000080] text-sm max-sm:text-xs">
                            Moda
                        </span>
                    </li>
                    <li className="relative top-1 cursor-pointer">
                        <span className="font-proxima tracking-wider text-[#00000080] text-sm max-sm:text-xs">
                            Vender
                        </span>
                    </li>
                    <li className="relative top-1 cursor-pointer">
                        <span className="font-proxima tracking-wider text-[#00000080] text-sm max-sm:text-xs">
                            Contato
                        </span>
                    </li>
                </ul>
                <ul className="flex w-full justify-end items-center gap-x-5 mr-5 mt-5 max-xl:hidden">
                    <li>
                        <span className="font-proxima cursor-pointer tracking-wider text-[#00000080] text-sm">
                            Crie sua conta
                        </span>
                    </li>
                    <li>
                        <span className="font-proxima cursor-pointer tracking-wider text-[#00000080] text-sm">
                            Entre
                        </span>
                    </li>
                    <li>
                        <span className="font-proxima cursor-pointer tracking-wider text-[#00000080] text-sm">
                            Compras
                        </span>
                    </li>
                    <li className="font-proxima cursor-pointer">
                        <FiShoppingCart color="#00000080" size={18} />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
