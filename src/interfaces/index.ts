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

export interface IPhotosSwiper {
    link: string;
    alt: string;
    id: number;
}

export interface IPropsPaymentMidContent {
    link: string;
    alt: string;
    title: string;
    description: string;
    key?: number;
}

export interface IOffer {
    offer1: boolean;
    offer2: boolean;
    offer3: boolean;
    offer4: boolean;
    offer5: boolean;
}

export interface IPropsContainTodayOffer {
    handleShowOffer: Function;
    showInfoOffer: () => boolean;
    link: string;
    alt: string;
    id: number;
    img1: string;
    img2: string;
}

export interface IPropsContentTodayOffer {
    link: string;
    alt: string;
    id: number;
    img1: string;
    img2: string;
}
