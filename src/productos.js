const products = [
    {
        id: '1', 
        name: 'Esmalte de Gel', 
        price: 1860, 
        category: 'Producto', 
        img: "/img/1-Esmalte-Color-Gel-UV-LED-Semipermanente-x15ml-Meline.webp", 
        stock: 15, 
        description:'Esmalte de Gel Semipermanente color X 15ml'
    },
    { 
        id: '2',
        name: 'Removedor de Esmalte', 
        price: 1790, 
        category: 'Producto', 
        img: "/img/2-Removedor-de-Esmalte-Semipermanente-x500ml-Anush.webp", 
        stock: 15, 
        description:'Removedor de Esmalte Semipermanente x500ml'
    },
    {
        id: '3', 
        name: 'Cápsulas Para Remover Esmalte', 
        price: 1000, 
        category: 'Producto', 
        img: "/img/3-Capsulas-Para-Remover-Esmalte-Semipermanente-x10u-Thuya.webp", 
        stock: 10, 
        description:'Cápsulas Para Remover Esmalte Semipermanente x10u Thuya'
},
{ 
        id: '4', 
        name: 'Maletín para Esmaltes', 
        price: 11290, 
        category: 'Producto', 
        img: "/img/4-Maletin-para-Esmaltes-Modelo-1438-T-C.webp", 
        stock: 10, 
        description:'Maletín para Esmaltes Modelo 1438 T-C'
},
{ 
        id: '5', 
        name: 'Manicuria Semipermanente', 
        price: 1900, 
        category: 'Servicio', 
        img: "/img/m7.jpeg", 
        stock: 20, 
        description:'Manicuria + esmaltado semipermanente + decoracion adiciona (Opcional)'
},
{
        id: '6', 
        name: 'Esculpidas con Semipermanente', 
        price: 2900, 
        category: 'Servicio', 
        img: "/img/m13.jpeg", 
        stock: 15, 
        description:'Manicuria Esculpidas + esmaltado semipermanente + decoracion adiciona (Opcional)'
},
{
        id: '7', 
        name: 'Depilacion Laser', 
        price: 10000, 
        category: 'Servicio', 
        img: "/img/7-depilacion-images.jfif", 
        stock: 10, 
        description:'Depilacion laser de cuerpo completo 1 secion'
},
{
        id: '8', 
        name: 'Micro-Blading', 
        price: 25000, 
        category: 'Servicio', 
        img: "/img/8-micro-descarga.jfif", 
        stock: 15, 
        description:'Diseño de sejas atrabes de la tecnica de micro-blading '  
}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
    