const data = require('../data/products.json');

function getProducts() {
    return data.products;
}
function getProductById(id) {
    return data.products.find(p => p.id === id);
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
function searchProducts(search) {
    return data.products.filter(product => {
        return product.name.toLowerCase().includes(search.toLowerCase() => {
            return product.name.toLowerCase().includes(search.toLowerCase());
        });
    }}

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getProducts,
    getProductById
};