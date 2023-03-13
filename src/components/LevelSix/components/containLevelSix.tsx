import React from "react";

import { IPropsContainLevelSix } from "../../../interfaces";

const ContainLevelSix: React.FC<IPropsContainLevelSix> = ({
    alt,
    link,
    text,
    classWidth,
}) => (
    <div className={`h-[74px] flex items-center ${classWidth}`}>
        <img src={link} alt={alt} />
        <span className="text-base ml-4 mr-4">{text}</span>
    </div>
);

export default ContainLevelSix
