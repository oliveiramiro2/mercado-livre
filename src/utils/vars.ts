import { IPropsMidSecondLevelHeader, IPhotosSwiper, IPropsPaymentMidContent, IOffer, IPropsContentTodayOffer, IPropsContainLevelSix, IContainBenefits } from "../interfaces"
import {
    offer12,
    offer11,
    offer21,
    offer22,
    offer31,
    offer32,
    offer41,
    offer42,
    offer51,
    offer52,
} from "../utils/imgsImported";

export const midHeader: IPropsMidSecondLevelHeader[] = [
    {text: "Ofertas do dia", classVariant: "min-w-[100px]", id: 0},
    {text: "Histórico", id: 1},
    {text: "Moda", id: 2},
    {text: "Vender", id: 3},
    {text: "Contato", id: 4},
]

export const photosSwiper: IPhotosSwiper[] = [
    {link: "https://http2.mlstatic.com/D_NQ_698675-MLA53861274292_022023-OO.webp", alt: "bbb23", id: 0},
    {link: "https://http2.mlstatic.com/D_NQ_973121-MLA53828765774_022023-OO.webp", alt: "Aproveite o verão", id: 1},
    {link: "https://http2.mlstatic.com/D_NQ_939429-MLA53879648181_022023-OO.webp", alt: "Detox", id: 2},
    {link: "https://http2.mlstatic.com/D_NQ_989972-MLA53831254570_022023-OO.webp", alt: "Grandes marcas", id: 3},
    {link: "https://http2.mlstatic.com/D_NQ_634797-MLA53858146978_022023-OO.webp", alt: "Gamers", id: 4},
    {link: "https://http2.mlstatic.com/D_NQ_858900-MLA53880103142_022023-OO.webp", alt: "Smartphone", id: 5},
    {link: "https://http2.mlstatic.com/D_NQ_937944-MLA53924707389_022023-OO.webp", alt: "Ofertas do dia", id: 6},
]

export const containMidPaymentContent: IPropsPaymentMidContent[] = [
    {
        alt: "cartão crédito",
        link: "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg",
        title: "Até 10 parcelas sem juros",
        description: "Ver mais",
        key: 0,
    },
    {
        alt: "Parcelamento",
        link: "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg",
        title: "Parcelamento sem cartão",
        description: "Conheça o Mercado Crédito",
        key: 1,
    },
    {
        alt: "Via PIX",
        link: "https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/qr.svg",
        title: "Via Pix",
        description: "Ver mais",
        key: 2,
    },
]

export const offerInit: IOffer = {
    offer1: false,
    offer2: false,
    offer3: false,
    offer4: false,
    offer5: false,
};

export const offerTodayContent: IPropsContentTodayOffer[] = [
    {alt: "oferta 1", link: "https://http2.mlstatic.com/D_Q_NP_802413-MLA50710963248_072022-AB.webp", id: 1, img1: offer11, img2: offer12},
    {alt: "oferta 2", link: "https://http2.mlstatic.com/D_Q_NP_927250-MLB52007266563_102022-AB.webp", id: 2, img1: offer21, img2: offer22},
    {alt: "oferta 3", link: "https://http2.mlstatic.com/D_Q_NP_908551-MLB53668961915_022023-AB.webp", id: 3, img1: offer31, img2: offer32},
    {alt: "oferta 4", link: "https://http2.mlstatic.com/D_Q_NP_775529-MLB51802661099_102022-AB.webp", id: 4, img1: offer41, img2: offer42},
    {alt: "oferta 5", link: "https://http2.mlstatic.com/D_Q_NP_781836-MLB52319224650_112022-AB.webp", id: 5, img1: offer51, img2: offer52},
]

export const levelSixContent: IPropsContainLevelSix[] = [
    {alt: "Disney Plus", classWidth: "w-[250px]", link: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg", text: "Disney+ sem custo", id: 0},
    {alt: "Star Plus", classWidth: "w-[250px]", link: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/starplus.svg", text: "Star+ sem custo", id: 1},
    {alt: "Frete Grátis", classWidth: "w-[300px]", link: "https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png", text: "Frete grátis e rápido a partir de R$ 79 e 45% OFF em fretes de menos de R$ 79", id: 2},
    {alt: "Descontos", classWidth: " w-[300px]", link: "https://http2.mlstatic.com/resources/frontend/statics/loyal/ultrapasse-widget@2x.png", text: "60% OFF no Ultrapasse e outros benefícios", id: 3},
]

export const benefitsContent: IContainBenefits[] = [
    {alt: "Disney e Star Plus", link1: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disney/hub-widget-disney-star/Widget_Multicontent_Latam_768-x-566px.jpg", link2: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg", text1: "", text2: "Sem custo com o nível 6", text3: "Disney+ e Star+", id: 0, refIndex: 1},
    {alt: "HBO Max", link1: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mlb_@2x.webp", link2: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1", text1: "7 DIAS GRÁTIS", text2: "Até 50% OFF", text3: "HBO Max", id: 1},
    {alt: "Paramount Plus", link1: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_mlb_@2x.jpg", link2: "https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png", text1: "7 DIAS GRÁTIS", text2: "Até 50% OFF", text3: "Paramount+", id: 2},
    {alt: "Dreezer", link1: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/vdp/deezer/deezer-widget-mlb@2x.jpg", link2: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/deezer/deezer-logo-vdp-filled@2x.png", text1: "7 DIAS GRÁTIS", text2: "Até 50% OFF", text3: "Deezer / App de música", id: 3, refIndex: 2},
]
