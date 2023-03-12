import React from "react";

export interface IPropsFirstLevelHeader {
    setShowMenu: Function;
    showMenu: boolean;
}

export interface IPropsSecondLevelHeader {
    showMenu: boolean;
}

export interface IPropsMenuListContain {
    children: React.ReactNode;
    text: string;
}
