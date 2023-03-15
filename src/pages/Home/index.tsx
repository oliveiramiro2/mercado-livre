import React, { useState } from "react";
import clsx from "clsx";
import gsap from "gsap";
import {
    GiSteeringWheel,
    GiChefToque,
    GiLipstick,
    GiBearFace,
    GiSofa,
    GiSmartphone,
    GiSoccerBall,
    GiBalloons,
    GiRetroController,
    GiFactory,
    GiTicket,
    GiViolin,
    GiWatch,
    GiBookCover,
    GiHeartPlus,
} from "react-icons/gi";
import {
    MdPets,
    MdPalette,
    MdEngineering,
} from "react-icons/md";
import {
    FaTractor,
    FaBaby,
    FaTshirt,
    FaCar,
    FaMicrophone,
    FaTools,
    FaMusic,
    FaUsers,
} from "react-icons/fa";
import { BsHourglassSplit, BsCameraFill, BsBuilding } from "react-icons/bs";
import { FcNext, FcPrevious } from "react-icons/fc";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { SlScreenDesktop } from "react-icons/sl";
import { HiSquaresPlus } from "react-icons/hi2";
import { IoIosArrowUp } from "react-icons/io";

import Header from "../../components/Header";
import SwiperMain from "../../components/SwiperMain";
import PaymentSection from "../../components/PaymentSection";
import TodayOffers from "../../components/TodayOffers";
import LevelSix from "../../components/LevelSix";
import Benefits from "../../components/Benefits";
import BrandOffer from "../../components/BrandOffer";

interface iCategory {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
    6: boolean;
    7: boolean;
    8: boolean;
    9: boolean;
    10: boolean;
    11: boolean;
    12: boolean;
    13: boolean;
    14: boolean;
    15: boolean;
    16: boolean;
    17: boolean;
    18: boolean;
    19: boolean;
    20: boolean;
    21: boolean;
    22: boolean;
    23: boolean;
    24: boolean;
    25: boolean;
    26: boolean;
    27: boolean;
    28: boolean;
    29: boolean;
    30: boolean;
    31: boolean;
    32: boolean;
}

const initCatergory: iCategory = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
};

const Home: React.FC = () => {
    const [category, setCategory] = useState<iCategory>(initCatergory);
    const [showCategory, setShowCategory] = useState<number>(0);
    const [showSemiFooter, setShowSemiFooter] = useState<boolean>(false);

    const handleShowCategory: Function = (right: boolean): void => {
        if (right && showCategory < 2) setShowCategory(showCategory + 1);
        else if (!right && showCategory > 0) setShowCategory(showCategory - 1);
    };

    const handleSemiFooter: Function = (): void => {
        if (!showSemiFooter) {
            gsap.to(".semi-footer", {
                yPercent: 200,
                ease: "easeInOut",
                duration: 0.5,
                display: "none",
            });
        } else {
            gsap.to(".semi-footer", {
                yPercent: 0,
                ease: "easeInOut",
                duration: 0.5,
                display: "flex",
            });
        }
        setShowSemiFooter(!showSemiFooter);
    };

    return (
        <div className="flex flex-col w-screen min-h-screen bg-[#ebebeb]">
            <Header />
            <SwiperMain />
            <PaymentSection />
            <TodayOffers />
            <LevelSix />
            <Benefits />
            <BrandOffer />
            
            <section className="w-screen h-[420px] flex items-center justify-center">
                <div className="max-w-[87.5%] h-[389px] rounded-lg mb-5">
                    <div className="pl-1 mb-[22px] ml-2 mt-2 flex justify-between">
                        <h2 className="text-[26px] font-light text-[#666]">
                            Categorias populares
                        </h2>
                        <div className="flex items-center mr-1">
                            <button
                                type="button"
                                onClick={() => setShowCategory(0)}
                                className="pl-1 pr-1"
                            >
                                <div
                                    className={clsx(
                                        "h-[6px] w-[6px] transition-colors rounded-full bg-gray-500 bg-opacity-20",
                                        {
                                            "bg-pallet-blue bg-opacity-95":
                                                showCategory === 0,
                                        }
                                    )}
                                />
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowCategory(1)}
                                className="pl-1 pr-1"
                            >
                                <div
                                    className={clsx(
                                        "h-[6px] w-[6px] transition-colors rounded-full bg-gray-500 bg-opacity-20",
                                        {
                                            "bg-pallet-blue bg-opacity-95":
                                                showCategory === 1,
                                        }
                                    )}
                                />
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowCategory(2)}
                                className="pl-1 pr-1"
                            >
                                <div
                                    className={clsx(
                                        "h-[6px] w-[6px] transition-colors rounded-full bg-gray-500 bg-opacity-20",
                                        {
                                            "bg-pallet-blue bg-opacity-95":
                                                showCategory === 2,
                                        }
                                    )}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="w-full overflow-x-hidden bg-white rounded">
                        <div
                            className={clsx(
                                "flex transition-all ease-in-out delay-200 relative",
                                {
                                    "right-0": showCategory === 0,
                                    "right-[100%]": showCategory === 1,
                                    "right-[128.6%]": showCategory === 2,
                                }
                            )}
                        >
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[1],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            1: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            1: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiSteeringWheel
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[1],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[1],
                                        })}
                                    >
                                        Acessórios para Veículos
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[2],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            2: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            2: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaTractor
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[2],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[2],
                                        })}
                                    >
                                        Agro
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[3],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            3: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            3: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiChefToque
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[3],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[3],
                                        })}
                                    >
                                        Alimentos e Bebidas
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[4],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            4: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            4: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <MdPets
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[4],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[4],
                                        })}
                                    >
                                        Animais
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[5],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            5: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            5: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <BsHourglassSplit
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[5],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima text-center w-[80%]",
                                            {
                                                "text-white": category[5],
                                            }
                                        )}
                                    >
                                        Antiguidades e Coleções
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[6],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            6: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            6: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <MdPalette
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[6],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima text-center",
                                            {
                                                "text-white": category[6],
                                            }
                                        )}
                                    >
                                        Arte, Papelaria e Armarinho
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[7],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            7: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            7: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaBaby
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[7],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[7],
                                        })}
                                    >
                                        Bebês
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[8],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            8: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            8: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiLipstick
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[8],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima text-center w-[80%]",
                                            {
                                                "text-white": category[8],
                                            }
                                        )}
                                    >
                                        Beleza e Cuidado Pessoal
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[9],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            9: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            9: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiBearFace
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[9],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[9],
                                        })}
                                    >
                                        Brinquedo e Hobbies
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[10],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            10: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            10: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaTshirt
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[10],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima text-center",
                                            {
                                                "text-white": category[10],
                                            }
                                        )}
                                    >
                                        Calçados, Roupas e Bolsas
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[11],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            11: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            11: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <BsCameraFill
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[11],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[11],
                                        })}
                                    >
                                        Câmera e Acessórios
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[12],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            12: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            12: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaCar
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[12],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[12],
                                        })}
                                    >
                                        Carros, Motos e Outros
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[13],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            13: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            13: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiSofa
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[13],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[13],
                                            }
                                        )}
                                    >
                                        Casa, Móveis e decoração
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[14],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            14: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            14: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiSmartphone
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[14],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[14],
                                        })}
                                    >
                                        Celulares e Telefones
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[15],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            15: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            15: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <MdEngineering
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[15],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[15],
                                            }
                                        )}
                                    >
                                        Construção
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[16],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            16: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            16: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <CgSmartHomeRefrigerator
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[16],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[16],
                                        })}
                                    >
                                        Eletrodomésticos
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[17],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            17: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            17: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaMicrophone
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[17],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[17],
                                            }
                                        )}
                                    >
                                        Eletrônicos, Áudio e Vídeo
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[18],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            18: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            18: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiSoccerBall
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[18],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[18],
                                        })}
                                    >
                                        Esportes e Fitness
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[19],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            19: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            19: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaTools
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[19],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[19],
                                            }
                                        )}
                                    >
                                        Ferramentas
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[20],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            20: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            20: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiBalloons
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[20],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[20],
                                        })}
                                    >
                                        Festas e Lembrancinhas
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[21],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            21: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            21: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiRetroController
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[21],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[21],
                                            }
                                        )}
                                    >
                                        Games
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[22],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            22: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            22: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <BsBuilding
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[22],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[22],
                                        })}
                                    >
                                        Imóveis
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[23],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            23: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            23: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiFactory
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[23],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[23],
                                            }
                                        )}
                                    >
                                        Indústria e Comércio
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[24],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            24: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            24: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <SlScreenDesktop
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[24],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[24],
                                        })}
                                    >
                                        Informática
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[25],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            25: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            25: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiTicket
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[25],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[25],
                                            }
                                        )}
                                    >
                                        Ingressos
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[26],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            26: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            26: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiViolin
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[26],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx("font-proxima", {
                                            "text-white": category[26],
                                        })}
                                    >
                                        Instrumentos Musicais
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[27],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            27: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            27: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiWatch
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[27],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[27],
                                            }
                                        )}
                                    >
                                        Joias e Relógios
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[28],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            28: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            28: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiBookCover
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[28],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[28],
                                            }
                                        )}
                                    >
                                        Livros, Revistas e Comics
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[29],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            29: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            29: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaMusic
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[29],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[29],
                                            }
                                        )}
                                    >
                                        Música, Filmes e Seriados
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[30],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            30: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            30: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <GiHeartPlus
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[30],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[30],
                                            }
                                        )}
                                    >
                                        Saúde
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[31],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            31: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            31: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <FaUsers
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[31],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[31],
                                            }
                                        )}
                                    >
                                        Serviços
                                    </p>
                                </a>
                                <a
                                    href="https://www.mercadolivre.com.br/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                                        {
                                            "bg-pallet-blue": category[32],
                                        }
                                    )}
                                    onMouseOver={() =>
                                        setCategory({
                                            ...initCatergory,
                                            32: true,
                                        })
                                    }
                                    onMouseOut={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                    onFocus={() =>
                                        setCategory({
                                            ...initCatergory,
                                            32: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setCategory({ ...initCatergory })
                                    }
                                >
                                    <div>
                                        <HiSquaresPlus
                                            size={50}
                                            className={clsx(
                                                "text-pallet-blue",
                                                {
                                                    "text-white": category[32],
                                                }
                                            )}
                                        />
                                    </div>
                                    <p
                                        className={clsx(
                                            "font-proxima w-[90%] text-center",
                                            {
                                                "text-white": category[32],
                                            }
                                        )}
                                    >
                                        Mais Categorias
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    {showCategory < 2 && (
                        <button
                            onClick={() => handleShowCategory(true)}
                            type="button"
                            className="relative left-[97.3%] bottom-48 border-none flex justify-center items-center bg-white bg-opacity-90 text-pallet-blue text-2xl w-16 h-16 rounded-full hover:shadow-lg hover:shadow-slate-500 transition-shadow ease-in-out delay-75"
                        >
                            <FcNext />
                        </button>
                    )}
                    {showCategory > 0 && (
                        <button
                            onClick={() => handleShowCategory(false)}
                            type="button"
                            className={clsx(
                                "relative -left-[25px] bottom-64 border-none flex justify-center items-center bg-white bg-opacity-90 text-pallet-blue text-2xl w-16 h-16 rounded-full hover:shadow-lg hover:shadow-slate-500 transition-shadow ease-in-out delay-75",
                                {
                                    "bottom-[12rem]": showCategory === 2,
                                }
                            )}
                        >
                            <FcPrevious />
                        </button>
                    )}
                </div>
            </section>
            <section className="w-screen mt-20 bg-white h-[300px] pt-10 pb-8 flex justify-evenly">
                <div className="flex flex-col items-center w-[23%]">
                    <img
                        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg"
                        alt="Pagamento"
                        className="h-[20%] mb-5"
                    />
                    <div className="flex flex-col items-center gap-y-2">
                        <h2 className="font-proxima text-[#4b4b4b] text-xl">
                            Escolha como pagar
                        </h2>
                        <span className="text-center font-proxima text-[#999] text-[15px]">
                            Com o Mercado Pago, você paga com cartão, boleto ou
                            Pix. Você também pode pagar em até 12x no boleto com
                            o Mercado Crédito.
                        </span>
                        <a
                            href="https://www.mercadolivre.com.br/"
                            className="text-pallet-blue relative -bottom-5 font-proxima"
                        >
                            Como pagar com Mercado Pago
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[29%]">
                    <img
                        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg"
                        alt="Frete Gratis"
                        className="h-[20%] mb-5"
                    />
                    <div className="flex flex-col items-center gap-y-2">
                        <h2 className="font-proxima text-[#4b4b4b] text-xl">
                            Frete grátis a partir de R$ 79
                        </h2>
                        <span className="border-r border-l border-gray pr-16 pl-16 text-center font-proxima text-[#999] text-[15px]">
                            Só por estar cadastrado no Mercado Livre, você tem
                            frete grátis em milhares de produtos. É um benefício
                            do Mercado Pontos.
                        </span>
                        <a
                            href="https://www.mercadolivre.com.br/"
                            className="text-pallet-blue relative bottom-0 font-proxima"
                        >
                            Saiba mais sobre este benefício
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[23%]">
                    <img
                        src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg"
                        alt="Seguro"
                        className="h-[20%] mb-5"
                    />
                    <div className="flex flex-col items-center gap-y-2">
                        <h2 className="font-proxima text-[#4b4b4b] text-xl">
                            Segurança, do início ao fim
                        </h2>
                        <span className="text-center font-proxima text-[#999] text-[15px]">
                            Você não gostou do que comprou? Devolva! No Mercado
                            Livre não há nada que você não possa fazer, porque
                            você está sempre protegido.
                        </span>
                        <a
                            href="https://www.mercadolivre.com.br/"
                            className="text-pallet-blue relative -bottom-5 font-proxima"
                        >
                            Como te protegemos
                        </a>
                    </div>
                </div>
            </section>
            <section className="w-screen flex bg-white border-b border-gray-200 flex-col justify-center items-center">
                <button
                    type="button"
                    className="bg-[#f3f3f0] h-8 pl-5 pr-5 rounded-t-md relative top-1"
                    onClick={() => handleSemiFooter()}
                >
                    <p className="font-proxima text-[#666] text-sm flex gap-x-1 font-semibold">
                        {!showSemiFooter ? "Menos" : "Mais"} informações{" "}
                        <IoIosArrowUp
                            color="#777"
                            size={14}
                            className={clsx(
                                "relative top-[2px] transition-transform delay-150 duration-300 ease",
                                {
                                    "rotate-180": !showSemiFooter,
                                }
                            )}
                        />
                    </p>
                </button>
                <div className="semi-footer z-10 bg-[#f3f3f0] w-screen visible transition-opacity ease-in-out duration-500 delay-300 flex justify-center pt-10 pb-8 border-t border-gray-200">
                    <div className="w-[87%] flex justify-around">
                        <div className="">
                            <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm">
                                Sobre o
                            </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Mercado Livre
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Investor relations
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Tendências
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Sustentabilidade
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm">
                                Outros sites
                            </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Desenvolvedores
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Mercado Pago
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Mercado Envios
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Mercado Shops
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Mercado Ads
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm">
                                Contato
                            </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Comprar
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Vender
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Solução de problemas
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Segurança
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm">
                                Redes sociais
                            </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        YouTube
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm">
                                Minha conta
                            </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Entre
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Vender
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-proxima text-[#333] mb-[14px] font-medium text-sm">
                                Mercado Pontos
                            </h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Nivel 6
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Disney+
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Star+
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        HBO MAX
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Paramount+
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.mercadolivre.com.br/"
                                        className="font-proxima text-[#999] font-light text-sm hover:underline"
                                    >
                                        Deezer
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-white z-20 flex justify-center pt-3 pb-3">
                <div className="w-[87%]">
                    <div className="flex gap-x-6">
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Trabalhe conosco
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Termos e condições
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Como cuidamos da sua privacidade
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Acessibilidade
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Contato
                        </a>
                        <a
                            className="font-proxima text-[13px] text-[#333]"
                            href="http://https://www.mercadolivre.com.br/"
                        >
                            Informações sobre seguros
                        </a>
                    </div>
                    <div>
                        <p className="font-proxima text-xs text-[#999] mt-2">
                            Copyright © 1999-2023 Ebazar.com.br LTDA.
                        </p>
                    </div>
                    <div>
                        <p className="font-proxima text-xs text-[#999]">
                            CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas,
                            nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 -
                            empresa do grupo Mercado Livre.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
