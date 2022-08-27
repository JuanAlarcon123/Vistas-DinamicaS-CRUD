const { loadProducts } = require('../data/productsModule')
const products = loadProducts()
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// cuando filtro,creo un nuevo array que tenga las consiciones aclaradas en el filtro
	index: (req, res) => {
		const products = loadProducts()
		const inSale = products.filter(product => product.category === "in-sale")
		const visited = products.filter(product => product.category === "visited")
		// Do the 

		return res.render('index', {
			toThousand, inSale, visited/* como en productos solo hay 2 categorias, estas dos encierran toda */
		})
	},
	search: (req, res) => {
		let keywords = req.query.keywords
		let result = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase()) )
		res.render('results', {
			products: result,
			keywords,toThousand
		})
	},
};

module.exports = controller;
