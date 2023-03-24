import React from 'react'
import clsx from "clsx";
import { iconMapCategoty } from '../../../utils/vars';

const DinamycIcon = ({ param, color }: { param: string; color: boolean }) => {
    const IconComponent = (iconMapCategoty as any)[param];

    if (!IconComponent) {
        return null;
    }

    return (
        <IconComponent
            size={50}
            className={clsx("text-pallet-blue", {
                "text-white": color,
            })}
        />
    );
};

export default DinamycIcon;
