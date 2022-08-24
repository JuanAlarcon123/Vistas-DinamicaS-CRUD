const fs = require('fs');
const path = require('path');

const loadProducts = () => {
    const productsFilePath = path.join(__dirname, 'productsDataBase.json')
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
    return products
}


const storeProducts = (products) => fs.writeFileSync(path.join(__dirname,'productsDataBase.json'), JSON.stringify(products),'utf-8')


module.exports = {
    loadProducts,storeProducts
}