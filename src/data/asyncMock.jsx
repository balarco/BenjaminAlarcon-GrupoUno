// src/data/asyncMock.jsx

export const products = [
    {
        id: 1,
        category: 'Vasijas',
        img: '/images/vase1.jpg',
        alt: 'Vasija de Madera',
        title: 'Vasija de Madera',
        description: 'Perfecta para tus plantas, esta vasija artesanal es perfecta para tu centro de mesa.',
        price: 10000,
        stock: [
            { type: '15cm', quantity: 5 },
            { type: '30cm', quantity: 10 },
        ],
        types: ['15cm', '30cm'],
    },
    {
        id: 2,
        category: 'Vasijas',
        img: '/images/vase2.jpg',
        alt: 'Vasija Blanca',
        title: 'Vasija Blanca',
        description: 'Esta hermosa vasija esta hecha con una ceramica delicada.',
        price: 25000,
        stock: [{ type: null, quantity: 20 }],
        types: [null],
    },
    {
        id: 3,
        category: 'Vasijas',
        img: '/images/vase3.jpg',
        alt: 'Vasija Redonda',
        title: 'Vasija Redonda',
        description: 'Esta simple vasija redonda es el perfecto acompañamiento de escritorio.',
        price: 8000,
        stock: [{ type: null, quantity: 30 }],
        types: [null],
    },
    {
        id: 4,
        category: 'Vasijas',
        img: '/images/vase4.jpg',
        alt: 'Vasija Cuello de Botella',
        title: 'Vasija Cuello de Botella',
        description: 'Esta vasija con un delicado cuello de botella es perfecto para poner ramas o flores individuales.',
        price: 15000,
        stock: [{ type: null, quantity: 25 }],
        types: [null],
    },
    {
        id: 5,
        category: 'Vasijas',
        img: '/images/vase5.jpg',
        alt: 'Vasija Esmaltado Azul',
        title: 'Vasija Esmaltado Azul',
        description: 'Esta vasija es hermosa o algo asi.',
        price: 35000,
        stock: [{ type: null, quantity: 3 }],
        types: [null],
    },
    {
        id: 6,
        category: 'Platos',
        img: '/images/plate1.jpg',
        alt: 'Plato Plano',
        title: 'Plato Plano',
        description: 'Este plato es perfecto para servir tus comidas favoritas.',
        price: 10000,
        stock: [{ type: null, quantity: 50 }],
        types: [null],
    },
    {
        id: 7,
        category: 'Platos',
        img: '/images/plate2.jpg',
        alt: 'Set de Platos Esmaltados',
        title: 'Set de Platos Esmaltados',
        description: 'Este set viene con cinco platos hechos a mano y esmaltados.',
        price: 50000,
        stock: [{ type: null, quantity: 17 }],
        types: [null],
    },
    {
        id: 8,
        category: 'Platos',
        img: '/images/plate3.jpg',
        alt: 'Plato Cartesiano',
        title: 'Plato Cartesiano',
        description: 'Se me estan acabando las ideas.',
        price: 20000,
        stock: [{ type: null, quantity: 20 }],
        types: [null],
    },
    {
        id: 9,
        category: 'Pinturas',
        img: '/images/paint1.jpg',
        alt: 'Montañas',
        title: 'Montañas',
        description: 'Piensa en los alpes que nunca podras ver en tu vida con esto.',
        price: 35000,
        stock: [
            { type: '15"', quantity: 31 },
            { type: '30"', quantity: 25 },
            { type: '50"', quantity: 14 }
        ],
        types: ['15"', '30"', '50"'],
    },
    {
        id: 10,
        category: 'Pinturas',
        img: '/images/paint2.jpg',
        alt: 'Castillo',
        title: 'Castillo',
        description: 'Para que reflexiones tu pobreza.',
        price: 75000,
        stock: [{ type: null, quantity: 20 }],
        types: [null],
    },
    {
        id: 11,
        category: 'Pinturas',
        img: '/images/paint3.jpg',
        alt: 'Sendero',
        title: 'Sendero',
        description: 'Mira la libertad que nunca tendras.',
        price: 24000,
        stock: [{ type: null, quantity: 34 }],
        types: [null],
    },
    {
        id: 12,
        category: 'Pinturas',
        img: '/images/paint4.jpg',
        alt: 'Sendero 2',
        title: 'Sendero 2',
        description: 'No vayas por ahi sin botas.',
        price: 20,
        stock: [
            { type: '8"', quantity: 23 },
            { type: '12"', quantity: 54 },
            { type: '34"', quantity: 13 }
        ],
        types: ['8"', '12"', '34"'],
    },
    {
        id: 13,
        category: 'Pinturas',
        img: '/images/paint5.jpg',
        alt: 'Inocencia',
        title: 'Inocencia',
        description: 'Lo que todo perdimos.',
        price: 22000,
        stock: [
            { type: 'Imaginacion Infantil', quantity: 5 },
            { type: 'Pureza Mental', quantity: 10 },
            { type: '30"', quantity: 2 }
        ],
        types: ['Imaginacion Infantil', 'Pureza Mental', '30"'],
    },
    {
        id: 14,
        category: 'Tazas',
        img: '/images/mug1.jpg',
        alt: 'Simple is Beautiful',
        title: 'Simple is Beautiful',
        description: 'Simple is Beautiful',
        price: 27000,
        stock: [{ type: null, quantity: 28 }],
        types: [null],
    },
    {
        id: 15,
        category: 'Tazas',
        img: '/images/mug2.jpg',
        alt: 'Taza Tres Anillos',
        title: 'Taza Tres Anillos',
        description: 'Coloridas.',
        price: 35000,
        stock: [
            { type: 'Rojo', quantity: 43 },
            { type: 'Azul', quantity: 53 },
            { type: 'Verde', quantity: 32 },
            { type: 'Amarillo', quantity: 65 }
        ],
        types: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
    },
    {
        id: 16,
        category: 'Tazas',
        img: '/images/mug3.jpg',
        alt: 'Taza Simple',
        title: 'Taza Simple',
        description: 'Solo una taza.',
        price: 60000,
        stock: [{ type: null, quantity: 1 }],
        types: [null],
    },
    {
        id: 17,
        category: 'Canastas',
        img: '/images/basket1.jpg',
        alt: 'Canasta Ovalo',
        title: 'Canasta Ovalo',
        description: 'Ovillos de lana no incluidos.',
        price: 34000,
        stock: [{ type: null, quantity: 13 }],
        types: [null],
    },
    {
        id: 18,
        category: 'Canastas',
        img: '/images/basket2.jpg',
        alt: 'Cartera Canasta',
        title: 'Cartera Canasta',
        description: 'Un hibrido muy extraño.',
        price: 15000,
        stock: [
            { type: 'S', quantity: 23 },
            { type: 'M', quantity: 32 },
            { type: 'L', quantity: 12 }
        ],
        types: ['S', 'M', 'L'],
    },
    {
        id: 19,
        category: 'Canastas',
        img: '/images/basket3.jpg',
        alt: 'Set de Canastas',
        title: 'Set de Canastas',
        description: 'Un surtido de canastas artesanales.',
        price: 90000,
        stock: [{ type: null, quantity: 13 }],
        types: [null],
    },
    {
        id: 20,
        category: 'Canastas',
        img: '/images/basket4.jpg',
        alt: 'Canastas Para Gallos',
        title: 'Canastas Para Gallos',
        description: 'Canastas para gallos...?',
        price: 23152,
        stock: [
            { type: 'S', quantity: 5 },
            { type: 'M', quantity: 7 },
            { type: 'L', quantity: 4 },
            { type: 'XL', quantity: 2 }
        ],
        types: ['S', 'M', 'L', 'XL'],
    },
    {
        id: 21,
        category: 'Canastas',
        img: '/images/basket5.jpg',
        alt: 'Canasta Bowl',
        title: 'Canasta Bowl',
        description: 'Bowl de canasta, canasta de bowl.',
        price: 25000,
        stock: [
            { type: 'Pequeño', quantity: 5 },
            { type: 'Mediano', quantity: 10 },
            { type: 'Grande', quantity: 2 }
        ],
        types: ['Pequeño', 'Mediano', 'Grande'],
    },
    {
        id: 22,
        category: 'Hmmm',
        img: '/images/avocado.jpg',
        alt: 'Media Palta',
        title: 'Media Palta',
        description: 'El estado de la economia chilena.',
        price: 500000,
        stock: [
            { type: 'Hass', quantity: 5 },
            { type: 'Peruana', quantity: 10 },
            { type: 'Un Tercer Tipo Misterio', quantity: 2 }
        ],
        types: ['Hass', 'Peruana', 'Un Tercer Tipo Misterio'],
    },
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 0);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 0);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 0);
    });
};