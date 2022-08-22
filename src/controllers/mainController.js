const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// cuando filtro,creo un nuevo array que tenga las consiciones aclaradas en el filtro
	index: (req, res) => {
		const inSale = products.filter(product => product.category === "in-sale")
		const visited = products.filter(product => product.category === "visited")
		// Do the 
		
		return res.render('index',{
			toThousand,inSale,visited/* como en productos solo hay 2 categorias, estas dos encierran toda */
		})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
