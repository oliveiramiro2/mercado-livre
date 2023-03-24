import * as Icons from 'react-icons/all';

import { IPropsMidSecondLevelHeader, IPhotosSwiper, IPropsPaymentMidContent, IOffer, IPropsContentTodayOffer, IPropsContainLevelSix, IContainBenefits, iCategory, IContainCategories } from "../interfaces"
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
    {alt: "Disney e Star Plus", link1: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disney/hub-widget-disney-star/Widget_Multicontent_Latam_768-x-566px.jpg", link2: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg", text1: "", text2: "Sem custo com o nível 6", text3: "Disney+ e Star+", id: 0, refIndex: 1, classAnimated: "animate1"},
    {alt: "HBO Max", link1: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/HBOMax_widgetmulti_mobdsk_mlb_@2x.webp", link2: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1", text1: "7 DIAS GRÁTIS", text2: "Até 50% OFF", text3: "HBO Max", id: 1, classAnimated: ""},
    {alt: "Paramount Plus", link1: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/widgets/paramount_widgetmulti_mobdsk_mlb_@2x.jpg", link2: "https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png", text1: "7 DIAS GRÁTIS", text2: "Até 50% OFF", text3: "Paramount+", id: 2, classAnimated: ""},
    {alt: "Dreezer", link1: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/vdp/deezer/deezer-widget-mlb@2x.jpg", link2: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/deezer/deezer-logo-vdp-filled@2x.png", text1: "7 DIAS GRÁTIS", text2: "Até 50% OFF", text3: "Deezer / App de música", id: 3, refIndex: 2, classAnimated: "animate2"},
]

export const initCatergory: iCategory = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
};

export const iconMapCategoty = {
    GiSteeringWheel: Icons.GiSteeringWheel,
    GiChefToque: Icons.GiChefToque,
    GiLipstick: Icons.GiLipstick,
    GiBearFace: Icons.GiBearFace,
    GiSofa: Icons.GiSofa,
    GiSmartphone: Icons.GiSmartphone,
    GiSoccerBall: Icons.GiSoccerBall,
    GiBalloons: Icons.GiBalloons,
    GiRetroController: Icons.GiRetroController,
    GiFactory: Icons.GiFactory,
    GiTicket: Icons.GiTicket,
    GiViolin: Icons.GiViolin,
    GiWatch: Icons.GiWatch,
    GiBookCover: Icons.GiBookCover,
    GiHeartPlus: Icons.GiHeartPlus,
    MdPets: Icons.MdPets,
    MdPalette: Icons.MdPalette,
    MdEngineering: Icons.MdEngineering,
    FaTractor: Icons.FaTractor,
    FaBaby: Icons.FaBaby,
    FaTshirt: Icons.FaTshirt,
    FaCar: Icons.FaCar,
    FaMicrophone: Icons.FaMicrophone,
    FaTools: Icons.FaTools,
    FaMusic: Icons.FaMusic,
    FaUsers: Icons.FaUsers,
    BsHourglassSplit: Icons.BsHourglassSplit,
    BsCameraFill: Icons.BsCameraFill,
    BsBuilding: Icons.BsBuilding,
    FcNext: Icons.FcNext,
    FcPrevious: Icons.FcPrevious,
    CgSmartHomeRefrigerator: Icons.CgSmartHomeRefrigerator,
    SlScreenDesktop: Icons.SlScreenDesktop,
    HiSquaresPlus: Icons.HiSquaresPlus,
};

export const allCategories: IContainCategories[] = [
    {icon1: "GiSteeringWheel", icon2: "FaTractor", index: 2, text1: "Acessórios para Veículos", text2: "Agro"},
    {icon1: "GiChefToque", icon2: "MdPets", index: 4, text1: "Alimentos e Bebidas", text2: "Animais"},
    {icon1: "BsHourglassSplit", icon2: "MdPalette", index: 6, text1: "Antiguidades e Coleções", text2: "Arte, Papelaria e Armarinho"},
    {icon1: "FaBaby", icon2: "GiLipstick", index: 8, text1: "Bebês", text2: "Beleza e Cuidado Pessoal"},
    {icon1: "GiBearFace", icon2: "FaTshirt", index: 10, text1: "Brinquedo e Hobbies", text2: "Calçados, Roupas e Bolsas"},
    {icon1: "BsCameraFill", icon2: "FaCar", index: 12, text1: "Câmera e Acessórios", text2: "Carros, Motos e Outros"},
    {icon1: "GiSofa", icon2: "GiSmartphone", index: 14, text1: "Casa, Móveis e decoração", text2: "Celulares e Telefones"},
    {icon1: "MdEngineering", icon2: "CgSmartHomeRefrigerator", index: 16, text1: "Construção", text2: "Eletrodomésticos"},
    {icon1: "FaMicrophone", icon2: "GiSoccerBall", index: 18, text1: "Eletrônicos, Áudio e Vídeo", text2: "Esportes e Fitness"},
    {icon1: "FaTools", icon2: "GiBalloons", index: 20, text1: "Ferramentas", text2: "Festas e Lembrancinhas"},
    {icon1: "GiRetroController", icon2: "BsBuilding", index: 22, text1: "Games", text2: "Imóveis"},
    {icon1: "GiFactory", icon2: "SlScreenDesktop", index: 24, text1: "Indústria e Comércio", text2: "Informática"},
    {icon1: "GiTicket", icon2: "GiViolin", index: 26, text1: "Ingressos", text2: "Instrumentos Musicais"},
    {icon1: "GiWatch", icon2: "GiBookCover", index: 28, text1: "Joias e Relógios", text2: "Livros, Revistas e Comics"},
    {icon1: "FaMusic", icon2: "GiHeartPlus", index: 30, text1: "Música, Filmes e Seriados", text2: "Saúde"},
    {icon1: "FaUsers", icon2: "HiSquaresPlus", index: 32, text1: "Serviços", text2: "Mais Categorias"},
]

