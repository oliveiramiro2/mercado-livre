import React, { useEffect } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { IPropsContainBenefits } from "../../../interfaces";

const ContainBenefits: React.FC<IPropsContainBenefits> = ({
    alt,
    link1,
    link2,
    text1,
    text2,
    text3,
    showLoyalty4,
    refIndex,
    classAnimated
}) => {

    useEffect(() => {
        if (showLoyalty4) {
            gsap.fromTo(
                ".animate1",
                {
                    opacity: 1,
                    xPercent: 0,
                },
                {
                    opacity: 0,
                    xPercent: -100,
                    ease: "easeInOut",
                }
            );
            gsap.fromTo(
                ".animate2",
                {
                    opacity: 0,
                    xPercent: 100,
                },
                {
                    opacity: 1,
                    xPercent: 0,
                    ease: "easeInOut",
                }
            );
        } else {
            gsap.fromTo(
                ".animate2",
                {
                    opacity: 1,
                    xPercent: 0,
                },
                {
                    opacity: 0,
                    xPercent: 100,
                    ease: "easeInOut",
                }
            );
            gsap.fromTo(
                ".animate1",
                {
                    opacity: 0,
                    xPercent: -100,
                },
                {
                    opacity: 1,
                    xPercent: 0,
                    ease: "easeInOut",
                }
            );
        }
    }, [showLoyalty4]);

    const ternaryCondition: Function = (): boolean => {
        if (refIndex === undefined || showLoyalty4 === undefined) return false;
        if (refIndex === 1) return showLoyalty4
        return !showLoyalty4
    };

    return (
        <div
            className={clsx(`w-96 h-[260px] ${classAnimated}`, {
                hidden: ternaryCondition(),
            })}
        >
            <img
                src={link1}
                alt={alt}
                className="w-96 h-[250px] rounded-md cursor-pointer"
            />
            <div className="relative bottom-[100px] left-[13px] cursor-pointer">
                <div className="flex">
                    <img
                        src={link2}
                        alt="icon"
                        className="w-20 h-20 rounded-lg"
                    />
                    <div className="flex flex-col justify-center pl-4">
                        {text1.length > 1 && (
                            <span className="text-[12px] font-semibold text-white">
                                {text1}
                            </span>
                        )}
                        <span className="text-[22px] font-semibold text-white">
                            {text2}
                        </span>
                        <span className="text-white text-lg tracking-wide">
                            {text3}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainBenefits
