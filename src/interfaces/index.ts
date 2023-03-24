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

export interface IPropsCheckOutOffer {
    text1: string;
    text2: string;
    text3: string;
    alt: string;
    link: string;
}

export interface iCategory {
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

export interface IPropsContainCategory {
    category: iCategory;
    setCategory: Function;
    text1: string;
    text2: string;
    index: number;
    icon1: string;
    icon2: string;
}

export interface IContainCategories {
    text1: string;
    text2: string;
    index: number;
    icon1: string;
    icon2: string;
}

export interface IPropsContainBenefitsApp {
    link: string;
    alt: string;
    title: string;
    content: string;
    linkBenefit: string;
    id?: number;
}
