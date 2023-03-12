import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

import {
    IPropsMidSecondLevelHeader,
    IPropsRightSecondLevelHeader,
    IPropsSecondLevelHeader,
} from "../../../interfaces";
import { midHeader } from "../../../utils/vars";

const ContainMidListHeader: React.FC<IPropsMidSecondLevelHeader> = ({
    text,
    classVariant,
}) => (
    <li className={`relative top-1 cursor-pointer ${classVariant}`}>
        <span className="font-proxima tracking-wider text-pallet-black-opacity2 text-sm max-sm:text-xs">
            {text}
        </span>
    </li>
);

const ContainRightListHeader: React.FC<IPropsRightSecondLevelHeader> = ({
    text,
}) => (
    <li>
        <span className="font-proxima cursor-pointer tracking-wider text-pallet-black-opacity2 text-sm">
            {text}
        </span>
    </li>
);

const SecondLevelHeader: React.FC<IPropsSecondLevelHeader> = ({ showMenu }) => (
    <div className="flex w-screen">
        <button
            type="button"
            className="mr-16 w-[100px] h-10 relative top-2 left-2 transition-all ease-out delay-100 hover:border border-[#eadd61] rounded max-xl:absolute max-xl:top-[8.5%] max-xl:left-[9%] max-sm:hidden"
        >
            <div className="w-[101px] h-8 flex justify-start text-left">
                <CiLocationOn size={30} />
                <span className="text-xs font-proxima relative top-1 font-thin text-pallet-black-opacity2">
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
                            Entra na sua conta para ver suas compras, favoritos
                            etc.
                        </p>
                    </div>
                </div>
                <div className="flex gap-x-1 mb-3 ml-5 mt-3">
                    <button
                        type="button"
                        className="w-[40%] h-9 rounded-md bg-pallet-blue"
                    >
                        <span className="font-proxima text-white">Entre</span>
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
                        <span className="font-proxima tracking-wider text-pallet-black-opacity2 text-sm max-sm:text-xs">
                            Categorias
                        </span>
                        <BiChevronDown color="#9e9d9d" size={17} />
                    </div>
                </li>
                {midHeader.map(value => (
                    <ContainMidListHeader
                        key={value.id}
                        text={value.text}
                        classVariant={value.classVariant}
                    />
                ))}
            </ul>
        )}
        <ul className="flex w-full max-w-[39%] justify-end items-center gap-x-5 mr-5 mt-5 max-xl:hidden">
            <ContainRightListHeader text="Crie sua conta" />
            <ContainRightListHeader text="Entre" />
            <ContainRightListHeader text="Compras" />
            <li className="font-proxima cursor-pointer">
                <FiShoppingCart color="#00000080" size={18} />
            </li>
        </ul>
    </div>
);

export default SecondLevelHeader;
