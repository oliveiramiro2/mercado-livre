import React from "react";
import {
    AiOutlineHome,
    AiOutlineClockCircle,
    AiOutlineStar,
    AiOutlineShop,
    AiOutlineUnorderedList,
    AiOutlineTag,
} from "react-icons/ai";
import { IoMdPaper } from "react-icons/io";
import { GrTag } from "react-icons/gr";
import { TfiHeadphoneAlt, TfiDownload } from "react-icons/tfi";
import { TbShirt } from "react-icons/tb";
import { FaGlobeAmericas } from "react-icons/fa";

import { IPropsMenuListContain } from "../../../interfaces";

const MenuListContain: React.FC<IPropsMenuListContain> = ({
    children,
    text,
}) => (
    <li>
        <a
            href="https://www.mercadolivre.com.br/"
            className="flex items-end gap-x-3"
        >
            {children}
            <span className="font-proxima text-sm text-pallet-black-opacity1">
                {text}
            </span>
        </a>
    </li>
);

const Menu: React.FC = () => (
    <div className="bg-white">
        <ul className="mt-7 pb-9 pl-10 flex flex-col gap-y-4 border-b border-gray-300">
            <MenuListContain text="Início">
                <AiOutlineHome
                    className="text-pallet-black-opacity1"
                    size={25}
                />
            </MenuListContain>
            <MenuListContain text="Ofertas do dia">
                <GrTag className="text-pallet-black-opacity1" size={21} />
            </MenuListContain>
            <MenuListContain text="Histórico">
                <AiOutlineClockCircle
                    className="text-pallet-black-opacity1"
                    size={25}
                />
            </MenuListContain>
            <MenuListContain text="Contato">
                <TfiHeadphoneAlt
                    className="text-pallet-black-opacity1"
                    size={23}
                />
            </MenuListContain>
        </ul>
        <ul className="mt-7 pb-9 pl-10 flex flex-col gap-y-4 border-b border-gray-300">
            <MenuListContain text="Moda">
                <TbShirt className="text-pallet-black-opacity1" size={25} />
            </MenuListContain>
            <MenuListContain text="Mais vendidos">
                <AiOutlineStar
                    className="text-pallet-black-opacity1"
                    size={25}
                />
            </MenuListContain>
            <MenuListContain text="Compra Internacional">
                <FaGlobeAmericas
                    className="text-pallet-black-opacity1"
                    size={23}
                />
            </MenuListContain>
            <MenuListContain text="Lojas oficiais">
                <AiOutlineShop
                    className="text-pallet-black-opacity1"
                    size={25}
                />
            </MenuListContain>
            <MenuListContain text="Categorias">
                <AiOutlineUnorderedList
                    className="text-pallet-black-opacity1"
                    size={25}
                />
            </MenuListContain>
        </ul>
        <ul className="mt-7 pb-9 pl-10 flex flex-col gap-y-4 border-b border-gray-300">
            <MenuListContain text="Resumo">
                <IoMdPaper className="text-pallet-black-opacity1" size={25} />
            </MenuListContain>
            <MenuListContain text="Vender">
                <AiOutlineTag
                    className="text-pallet-black-opacity1"
                    size={25}
                />
            </MenuListContain>
        </ul>
        <ul className="mt-7 pb-9 pl-10 flex flex-col gap-y-4 border-b border-gray-300">
            <MenuListContain text="Compre e venda com o app!">
                <TfiDownload className="text-pallet-black-opacity1" size={19} />
            </MenuListContain>
        </ul>
    </div>
);

export default Menu;
