// src/data/asyncMock.jsx

export const products = [
    {
        id: 1,
        category: 'Vasijas',
        img: '/images/vase1.jpg',
        alt: 'Producto 1',
        title: 'Producto 1',
        description: 'en este contenido hay un producto x, encontraras todo lo que necesitas aqui',
        price: 10,
        stock: [{ type: null, quantity: 10 }], // Single type
        types: [null],
    },
    {
        id: 2,
        category: 'Vasijas',
        img: '/images/vase2.jpg',
        alt: 'Product 2',
        title: 'Product 2',
        description: 'Desc.',
        price: 20,
        stock: [{ type: null, quantity: 20 }], // Single type
        types: [null],
    },
    {
        id: 3,
        category: 'Vasijas',
        img: '/images/vase3.jpg',
        alt: 'Product 3',
        title: 'Product 3',
        description: 'Desc.',
        price: 30,
        stock: [{ type: null, quantity: 30 }], // Single type
        types: [null],
    },
    {
        id: 4,
        category: 'Vasijas',
        img: '/images/vase4.jpg',
        alt: 'Producto 4',
        title: 'Producto 4',
        description: 'Desc.',
        price: 20,
        stock: [{ type: null, quantity: 20 }], // Single type
        types: [null],
    },
    {
        id: 5,
        category: 'Vasijas',
        img: '/images/vase5.jpg',
        alt: 'Producto 5',
        title: 'Producto 5',
        description: 'Desc.',
        price: 20,
        stock: [{ type: null, quantity: 20 }], // Single type
        types: [null],
    },
    {
        id: 6,
        category: 'Platos',
        img: '/images/plate1.jpg',
        alt: 'Product 6',
        title: 'Product 6',
        description: 'Desc.',
        price: 20,
        stock: [{ type: null, quantity: 20 }], // Single type
        types: [null],
    },
    {
        id: 7,
        category: 'Platos',
        img: '/images/plate2.jpg',
        alt: 'Product 7',
        title: 'Product 7',
        description: 'Desc.',
        price: 20,
        stock: [{ type: null, quantity: 20 }], // Single type
        types: [null],
    },
    {
        id: 8,
        category: 'Platos',
        img: '/images/plate3.jpg',
        alt: 'Product 8',
        title: 'Product 8',
        description: 'Desc.',
        price: 20,
        stock: [{ type: null, quantity: 20 }], // Single type
        types: [null],
    },
    {
        id: 9,
        category: 'Pinturas',
        img: '/images/paint1.jpg',
        alt: 'Product 9',
        title: 'Product 9',
        description: 'Desc.',
        price: 20,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 10 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 10,
        category: 'Pinturas',
        img: '/images/paint2.jpg',
        alt: 'Product 10',
        title: 'Product 10',
        description: 'Desc.',
        price: 20,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 10 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 11,
        category: 'Pinturas',
        img: '/images/paint3.jpg',
        alt: 'Product 11',
        title: 'Product 11',
        description: 'Desc.',
        price: 20,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 10 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 12,
        category: 'Pinturas',
        img: '/images/paint4.jpg',
        alt: 'Product 12',
        title: 'Product 12',
        description: 'Desc.',
        price: 20,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 10 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 13,
        category: 'Pinturas',
        img: '/images/paint5.jpg',
        alt: 'Product 13',
        title: 'Product 13',
        description: 'Desc.',
        price: 20,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 10 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 14,
        category: 'Tazas',
        img: '/images/mug1.jpg',
        alt: 'Product 14',
        title: 'Product 14',
        description: 'Desc.',
        price: 20,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 10 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 15,
        category: 'Tazas',
        img: '/images/mug2.jpg',
        alt: 'Product 15',
        title: 'Product 15',
        description: 'Desc.',
        price: 20,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 10 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 16,
        category: 'Tazas',
        img: '/images/mug3.jpg',
        alt: 'Product 16',
        title: 'Product 16',
        description: 'Desc.',
        price: 20,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 10 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 17,
        category: 'Canastas',
        img: '/images/basket1.jpg',
        alt: 'Product 17',
        title: 'Product 17',
        description: 'Desc.',
        price: 20,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 10 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 18,
        category: 'Canastas',
        img: '/images/basket2.jpg',
        alt: 'Product 18',
        title: 'Product 18',
        description: 'Desc.',
        price: 20,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 10 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 19,
        category: 'Canastas',
        img: '/images/basket3.jpg',
        alt: 'Product 19',
        title: 'Product 19',
        description: 'Desc.',
        price: 90872,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 10 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 20,
        category: 'Canastas',
        img: '/images/basket4.jpg',
        alt: 'Product 20',
        title: 'Product 20',
        description: 'Desc.',
        price: 23152,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 7 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 21,
        category: 'Canastas',
        img: '/images/basket5.jpg',
        alt: 'Product 21',
        title: 'Product 21',
        description: 'Desc.',
        price: 22340,
        stock: [
            { type: 'Vasijas', quantity: 5 },
            { type: 'Pintura', quantity: 10 },
            { type: 'Telares', quantity: 2 }
        ],
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
    {
        id: 22,
        category: 'Hmmm',
        img: '/images/avocado.jpg',
        alt: 'Product 22',
        title: 'Media Palta',
        description: 'Te a doler la guata esto, y no por la palta misma.',
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