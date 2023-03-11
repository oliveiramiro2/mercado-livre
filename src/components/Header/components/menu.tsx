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

const Menu: React.FC = () => (
    <div className="bg-white">
        <ul className="mt-7 pb-9 pl-10 flex flex-col gap-y-4 border-b border-gray-300">
            <li>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="flex items-end gap-x-3"
                >
                    <AiOutlineHome
                        className="text-pallet-black-opacity1"
                        size={25}
                    />
                    <span className="font-proxima text-sm text-pallet-black-opacity1">
                        Início
                    </span>
                </a>
            </li>
            <li>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="flex items-end gap-x-3"
                >
                    <GrTag className="text-pallet-black-opacity1" size={21} />
                    <span className="font-proxima text-sm text-pallet-black-opacity1">
                        Ofertas do dia
                    </span>
                </a>
            </li>
            <li>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="flex items-end gap-x-3"
                >
                    <AiOutlineClockCircle
                        className="text-pallet-black-opacity1"
                        size={25}
                    />
                    <span className="font-proxima text-sm text-pallet-black-opacity1">
                        Histórico
                    </span>
                </a>
            </li>
            <li>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="flex items-end gap-x-3"
                >
                    <TfiHeadphoneAlt
                        className="text-pallet-black-opacity1"
                        size={23}
                    />
                    <span className="font-proxima text-sm text-pallet-black-opacity1">
                        Contato
                    </span>
                </a>
            </li>
        </ul>
        <ul className="mt-7 pb-9 pl-10 flex flex-col gap-y-4 border-b border-gray-300">
            <li>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="flex items-end gap-x-3"
                >
                    <TbShirt className="text-pallet-black-opacity1" size={25} />
                    <span className="font-proxima text-sm text-pallet-black-opacity1">
                        Moda
                    </span>
                </a>
            </li>
            <li>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="flex items-end gap-x-3"
                >
                    <AiOutlineStar
                        className="text-pallet-black-opacity1"
                        size={25}
                    />
                    <span className="font-proxima text-sm text-pallet-black-opacity1">
                        Mais vendidos
                    </span>
                </a>
            </li>
            <li>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="flex items-end gap-x-3"
                >
                    <FaGlobeAmericas
                        className="text-pallet-black-opacity1"
                        size={23}
                    />
                    <span className="font-proxima text-sm text-pallet-black-opacity1">
                        Compra Internacional
                    </span>
                </a>
            </li>
            <li>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="flex items-end gap-x-3"
                >
                    <AiOutlineShop
                        className="text-pallet-black-opacity1"
                        size={25}
                    />
                    <span className="font-proxima text-sm text-pallet-black-opacity1">
                        Lojas oficiais
                    </span>
                </a>
            </li>
            <li>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="flex items-end gap-x-3"
                >
                    <AiOutlineUnorderedList
                        className="text-pallet-black-opacity1"
                        size={25}
                    />
                    <span className="font-proxima text-sm text-pallet-black-opacity1">
                        Categorias
                    </span>
                </a>
            </li>
        </ul>
        <ul className="mt-7 pb-9 pl-10 flex flex-col gap-y-4 border-b border-gray-300">
            <li>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="flex items-end gap-x-3"
                >
                    <IoMdPaper
                        className="text-pallet-black-opacity1"
                        size={25}
                    />
                    <span className="font-proxima text-sm text-pallet-black-opacity1">
                        Resumo
                    </span>
                </a>
            </li>
            <li>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="flex items-end gap-x-3"
                >
                    <AiOutlineTag
                        className="text-pallet-black-opacity1"
                        size={25}
                    />
                    <span className="font-proxima text-sm text-pallet-black-opacity1">
                        Vender
                    </span>
                </a>
            </li>
        </ul>
        <ul className="mt-7 pb-9 pl-10 flex flex-col gap-y-4 border-b border-gray-300">
            <li>
                <a
                    href="https://www.mercadolivre.com.br/"
                    className="flex items-end gap-x-3"
                >
                    <TfiDownload
                        className="text-pallet-black-opacity1"
                        size={19}
                    />
                    <span className="font-proxima text-sm text-pallet-black-opacity1">
                        Compre e venda com o app!
                    </span>
                </a>
            </li>
        </ul>
    </div>
);

export default Menu;
