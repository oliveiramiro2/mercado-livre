import { IPropsMidSecondLevelHeader, IPhotosSwiper, IPropsPaymentMidContent } from "../interfaces"

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
