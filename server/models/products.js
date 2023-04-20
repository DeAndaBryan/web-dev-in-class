const data = require('../data/products.json');
const {connect, ObjectId} = require('./mongo');

const COLLECTION_NAME = 'products';

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getProducts() {
    const col = await collection();
    const items = await col.find().toArray();
    return items;
}

function getProductById(id) {
    return data.products.find(product => product.id === id);
}

function addProduct(product) {
    product.id = data.products.length + 1;
    data.products.push(product);
}

function updateProduct(product) {
    const index = data.products.findIndex(p => p.id === product.id);
    data.products[index] = product;
}

function deleteProduct(id) {
    const index = data.products.findIndex(p => p.id === id);
    data.products.splice(index, 1);
}

function searchProducts(searchTerm) {
    return data.products.filter(product => {
        return  product.title.toLowerCase().includes(searchTerm.toLowerCase())  ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())  ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    searchProducts
};