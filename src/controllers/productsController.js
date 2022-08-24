const{loadProducts,storeProducts}=require('../data/productsModule')
const products = loadProducts()


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
	},

	// Detail - Detail from one product
	
	detail: (req, res) => {

		let product = products.find(product => product.id === +req.params.id)// aca filtro los productos i se hace visible el producto que sea ifual al id
	
		res.render('detail',{
			product, toThousand
		})

		// Do the magic
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {

		const product = products.find ( product => product.id === +req.params.id)
		res.render('product-edit-form', {product
		})
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {

		const {name,description,price,discount,category} = req.body
		
		const productModify = products.map(product => { 
			if(product.id === +req.params.id) {
				return {
					...product,
					name: name.trim(),
					price : +price,
					discount: +discount,
					category,
					description:description.trim()
				}}	
				return product
		})

		storeProducts(productModify) //'ejecuta la funcion y toma como parametro la funcion que quiere guardar el el Json'
res.redirect('/')
		// Do the magic
	} ,

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;