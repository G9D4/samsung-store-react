const types = [
    { id: 1, value: 'mobile', label: 'Mobile' },
    { id: 2, value: 'tv_audio', label: 'TV & Audio' },
    { id: 3, value: 'electr', label: 'electr' },
    { id: 4, value: 'tec_ai', label: 'Tecnología AI' }
]

const filters = [
    { id: 0, value: 'all', label: 'Todos' },
    { id: 1, value: types.at(0).value, label: 'Mobile' },
    { id: 2, value: types.at(1).value, label: 'TV & Audio' },
    { id: 3, value: types.at(2).value, label: 'Electrodomésticos' },
    { id: 4, value: types.at(3).value, label: 'Tecnología AI' }
]

const products = [
    {
        id: 1,
        title: "Galaxy A16 5G 128GB",
        imageUrls: [
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/s/m/sm-a166mz_eb-u2510xuegww.png",
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/s/m/sm-a166f_galaxy-a16_5g_set-cut-all_01_1.png"
        ],
        price: 209.00,
        description: "Telefono decente, funciona solo enchufado :c",
        features: [
            "Pantalla grande de 6,7",
            "Cámara principal de 50MP",
            "Juega en tu mejor nivel con el procesador con más potencia"
        ],
        type: "mobile",
        novelty: true,
        topChoice: false
    },
    {
        id: 2,
        title: "Galaxy Z Fold6 5G 512GB",
        imageUrls: [
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/5/7/57f06f72-57cc-4296-9f42-e07bf3203f69.jpg",
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/z/f/zfold6-4_1_1_1.jpeg"
        ],
        price: 2019.00,
        description: "Telefono semi decente, funciona con bateria",
        features: [
            "Una gran pantalla en la comodidad de tu bolsillo",
            "Productividad sin Límites con la función Multi-tarea",
            "Experiencia Gaming a otro nivel"
        ],
        type: "mobile",
        novelty: false,
        topChoice: true
    },
    {
        id: 3,
        title: "Galaxy Z Fold6 5G 512GB",
        imageUrls: [
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/s/m/sm-f956bakkl15_ef-of95pcnegww_tagmembers_1.png",
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/0/0/001-onlineexclusive_sm-f956_zfold6_frontopenback_craftedblack_2-garantia_1.png"
        ],
        price: 2019.00,
        description: "Telefono semi decente, funciona magia negra",
        features: [
            "Una gran pantalla en la comodidad de tu bolsillo",
            "Productividad sin Límites con la función Multi-tarea",
            "Version enterprise"
        ],
        type: "mobile",
        novelty: true,
        topChoice: false
    },
    {
        id: 4,
        title: "85 Neo QLED 4K QNX1D Smart TV (2024)",
        imageUrls: [
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/q/n/qn75qnx1dapxpa_hw-s801bzp700x700_1_2.png",
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/q/n/qn75qnx1dafxza_002_r-perspective1_graphite-black.png"
        ],
        price: 2299.00,
        description: "Televisor nuevecito si que si",
        features: [
            "Procesador NQ4 AI Gen2",
            "Tecnología Quantum Matrix",
            "Siente toda la potencia de la IA en 4K"
        ],
        type: "tv_audio",
        novelty: false,
        topChoice: true
    },
    {
        id: 5,
        title: "55” Crystal UHD 4K DU8000",
        imageUrls: [
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/u/a/ua65du8000wxxy_000_front1_titan-gray.png",
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/u/a/ua65du8000wxxy_007_r-perspective2_titan-gray-without-logo.png"
        ],
        price: 439.00,
        description: "Televisor semi nuevecito oh no",
        features: [
            "Sumérgete en mil millones de matices de color",
            "Mira tu contenido favorito en 4K",
            "Disfruta de un sistema operativo seguro y fácil de usar"
        ],
        type: "tv_audio",
        novelty: true,
        topChoice: false
    },
    {
        id: 6,
        title: "Lavadora Superior WA15CG5441BD con EcoBubble™, 15Kg",
        imageUrls: [
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/w/a/wa15cg5441bwzs_001_front_white.png",
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/w/a/wa15cg5441bwzs_005_detail1_white.png"
        ],
        price: 319.00,
        description: "Lavadora cumplidora",
        features: [
            "Eco Bubble™- Ahorra agua y energía con burbujas de jabón",
            "Digital Inverter- Ahorro de energía & 20 años de garantía en el motor",
            "Lavado Intenso- Ciclo para eliminar manchas difíciles"
        ],
        type: "electr",
        novelty: false,
        topChoice: true
    },
    {
        id: 7,
        title: "Combo Lavadora de carga frontal + Secadora",
        imageUrls: [
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/d/v/dv24a8870pvap_wf24a8900avap.png",
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/d/v/dv24a8870pv-ap_006_l-perspective-open_black_2.png"
        ],
        price: 2248.00,
        description: "Combo lavadora y secadora, una ganga",
        features: [
            "Una nueva forma de lavar",
            "Lavado optimizado",
            "Dispensación automática de jabón y suavizante"
        ],
        type: "electr",
        novelty: true,
        topChoice: false
    },
    {
        id: 8,
        title: "Galaxy Buds FE",
        imageUrls: [
            "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/s/m/sm-r400_000_black_white_2_1.png"
        ],
        price: 99.00,
        description: "Audífonos, semi cómodos, fijo pierdes uno en la lavadora",
        features: [
            "Comodidad para tus oídos",
            "Mantén alejadas las distracciones y sumérgete en el sonido puro",
            "Una y otra vez con batería de larga duración"
        ],
        type: "tec_ai",
        novelty: false,
        topChoice: true
    }
]

export { types, filters, products };