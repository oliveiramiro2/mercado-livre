import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import Menu from "./components/menu";

const logo =
    "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/logo-pt__large_plus.png";
const disneyPlus =
    "https://http2.mlstatic.com/D_NQ_618580-MLA52432822706_112022-OO.webp";

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <header className="min-h-[100px] w-screen flex flex-col bg-pallet-yellow pt-2 max-md:pl-0 max-md:pr-0 pl-20 pr-20">
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
            <div className="flex w-screen">
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
                {showMenu ? (
                    <div className="w-screen h-full pl-4 pt-1 flex flex-col">
                        <div className="w-screen pl-4 pt-1 flex">
                            <div className="w-12 h-12 rounded-full  bg-[#ededed] flex items-center justify-center">
                                <AiOutlineUser size={40} color="#ccc" />
                            </div>
                            <div className="pl-3">
                                <p className="font-proxima text-lg text-[#333] font-bold">
                                    Bem-vindo
                                </p>
                                <p className="font-proxima text-sm text-[#00000073]">
                                    Entra na sua conta para ver suas compras,
                                    favoritos etc.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-1 mb-3 ml-5 mt-3">
                            <button
                                type="button"
                                className="w-[40%] h-9 rounded-md bg-pallet-blue"
                            >
                                <span className="font-proxima text-white">
                                    Entre
                                </span>
                            </button>
                            <button
                                type="button"
                                className="w-[40%] h-9 rounded-md bg-white border border-pallet-blue"
                            >
                                <span className="font-proxima text-pallet-blue">
                                    Crie a sua conta
                                </span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <ul className="flex mt-4 gap-x-5 relative left-[2%] justify-center max-sm:static max-md:left-[12%] max-sm:gap-x-2 max-xl:w-full">
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
                )}
                <ul className="flex w-full max-w-[39%] justify-end items-center gap-x-5 mr-5 mt-5 max-xl:hidden">
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
            {showMenu && <Menu />}
        </header>
    );
};

export default Header;
