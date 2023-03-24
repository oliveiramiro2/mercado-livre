import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import clsx from "clsx";

import { iCategory } from "../../interfaces";
import { allCategories, initCatergory } from "../../utils/vars";
import ContainPopularCategory from "./components/containCategory";

const PopularCategories: React.FC = () => {
    const [category, setCategory] = useState<iCategory>(initCatergory);
    const [showCategory, setShowCategory] = useState<number>(0);

    const handleShowCategory: Function = (right: boolean): void => {
        if (right && showCategory < 2) setShowCategory(showCategory + 1);
        else if (!right && showCategory > 0) setShowCategory(showCategory - 1);
    };

    return (
        <section className="w-screen min-h-[420px] flex items-center justify-center">
            <div className="max-w-[87.5%] min-h-[389px] rounded-lg mb-5">
                <div className="pl-1 mb-[22px] ml-2 mt-2 flex justify-between">
                    <h2 className="text-[26px] font-light text-[#666]">
                        Categorias populares
                    </h2>
                    <div className="flex max-xl:hidden items-center mr-1">
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
                            "flex max-xl:flex-wrap max-xl:justify-center max-xl:mb-9 max-xl:mt-9 transition-all ease-in-out delay-200 relative",
                            {
                                "right-0": showCategory === 0,
                                "right-[100%]": showCategory === 1,
                                "right-[128.6%]": showCategory === 2,
                            }
                        )}
                    >
                        {allCategories.map(value => (
                            <ContainPopularCategory
                                key={value.index}
                                category={category}
                                setCategory={setCategory}
                                text1={value.text1}
                                text2={value.text2}
                                index={value.index}
                                icon1={value.icon1}
                                icon2={value.icon2}
                            />
                        ))}
                    </div>
                </div>
                {showCategory < 2 && (
                    <button
                        onClick={() => handleShowCategory(true)}
                        type="button"
                        className="relative max-xl:hidden left-[97.3%] bottom-48 border-none flex justify-center items-center bg-white bg-opacity-90 text-pallet-blue text-2xl w-16 h-16 rounded-full hover:shadow-lg hover:shadow-slate-500 transition-shadow ease-in-out delay-75"
                    >
                        <FcNext />
                    </button>
                )}
                {showCategory > 0 && (
                    <button
                        onClick={() => handleShowCategory(false)}
                        type="button"
                        className={clsx(
                            "relative max-xl:hidden -left-[25px] bottom-64 border-none flex justify-center items-center bg-white bg-opacity-90 text-pallet-blue text-2xl w-16 h-16 rounded-full hover:shadow-lg hover:shadow-slate-500 transition-shadow ease-in-out delay-75",
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
    );
};

export default PopularCategories;
