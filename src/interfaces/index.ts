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

export interface IPropsMidSecondLevelHeader {
    classVariant?: string;
    text: string;
    id?: number;
}

export interface IPropsRightSecondLevelHeader {
    text: string;
}
