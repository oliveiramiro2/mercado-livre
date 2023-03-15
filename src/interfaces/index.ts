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
    setShowInfoOffer: Function;
    showInfoOffer: IOffer;
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

export interface IPropsContainLevelSix {
    alt: string;
    link: string;
    text: string;
    classWidth: string;
    id?: number;
}

export interface IPropsContainBenefits {
    link1: string;
    link2: string;
    alt: string;
    text1: string;
    text2: string;
    text3: string;
    showLoyalty4?: boolean;
    refIndex?: number;
    classAnimated: string;
}

export interface IContainBenefits extends IPropsContainBenefits {
    id: number;
}
