import React from 'react'
import clsx from "clsx";

import { IPropsContainCategory } from '../../../interfaces';
import { initCatergory } from '../../../utils/vars';
import DinamycIcon from './dinamycIcon';

const ContainPopularCategory: React.FC<IPropsContainCategory> = ({
    category,
    setCategory,
    text1,
    text2,
    index,
    icon1,
    icon2,
}) => (
    <div>
        <a
            href="https://www.mercadolivre.com.br/"
            target="_blank"
            rel="noreferrer"
            className={clsx(
                "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                {
                    "bg-pallet-blue": (category as any)[index - 1],
                }
            )}
            onMouseOver={() =>
                setCategory({
                    ...initCatergory,
                    [index - 1]: true,
                })
            }
            onMouseOut={() => setCategory({ ...initCatergory })}
            onFocus={() =>
                setCategory({
                    ...initCatergory,
                    [index - 1]: true,
                })
            }
            onBlur={() => setCategory({ ...initCatergory })}
        >
            <div>
                <DinamycIcon
                    param={icon1}
                    color={(category as any)[index - 1]}
                />
            </div>
            <p
                className={clsx("font-proxima w-[90%] text-center", {
                    "text-white": (category as any)[index - 1],
                })}
            >
                {text1}
            </p>
        </a>
        <a
            href="https://www.mercadolivre.com.br/"
            target="_blank"
            rel="noreferrer"
            className={clsx(
                "w-[170px] h-[160px] flex flex-col justify-around items-center border-r border-b border-gray-300 rounded-md",
                {
                    "bg-pallet-blue": (category as any)[index],
                }
            )}
            onMouseOver={() =>
                setCategory({
                    ...initCatergory,
                    [index]: true,
                })
            }
            onMouseOut={() => setCategory({ ...initCatergory })}
            onFocus={() =>
                setCategory({
                    ...initCatergory,
                    [index]: true,
                })
            }
            onBlur={() => setCategory({ ...initCatergory })}
        >
            <div>
                <DinamycIcon param={icon2} color={(category as any)[index]} />
            </div>
            <p
                className={clsx("font-proxima w-[90%] text-center", {
                    "text-white": (category as any)[index],
                })}
            >
                {text2}
            </p>
        </a>
    </div>
);

export default ContainPopularCategory;
