const products = [
    {
        id: '1',
        name: 'Paseo a Luján',
        price: 29000,
        category: 'paseos',
        img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FAeronave&psig=AOvVaw25em0RNWCRHoZegJRwVzwj&ust=1681865663252000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNisiv2bsv4CFQAAAAAdAAAAABAH`,
        stock: 100,
        description: 'Paseo a la Basílica de Luján'
    },

    {
        id: '2',
        name: 'Paseo a la Isla Martín García',
        price: 61000,
        category: 'paseos',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FAeronave&psig=AOvVaw25em0RNWCRHoZegJRwVzwj&ust=1681865663252000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNisiv2bsv4CFQAAAAAdAAAAABAH',
        stock: 100,
        description: 'Paseo a la Isla Martín García'
    },

    {
        id: '3',
        name: 'Paseo a Pilar, Escobar, San Fernando',
        price: 34000,
        category: 'paseos',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FAeronave&psig=AOvVaw25em0RNWCRHoZegJRwVzwj&ust=1681865663252000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNisiv2bsv4CFQAAAAAdAAAAABAH',
        stock: 100,
        description: 'Paseo a Pilar, Escobar, San Fernando'
    },

    {
        id: '4',
        name: 'Paseo al Dique Cascallares',
        price: 14000,
        category: 'paseos',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FAeronave&psig=AOvVaw25em0RNWCRHoZegJRwVzwj&ust=1681865663252000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNisiv2bsv4CFQAAAAAdAAAAABAH',
        stock: 100,
        description: 'Paseo al Dique Cascallares'
    },

    {
        id: '5',
        name: 'Piloto por un día',
        price: 38000,
        category: 'programas',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FAeronave&psig=AOvVaw25em0RNWCRHoZegJRwVzwj&ust=1681865663252000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNisiv2bsv4CFQAAAAAdAAAAABAH',
        stock: 100,
        description: 'Programa Piloto por un día'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryName))
        }, 500)
    })
}
