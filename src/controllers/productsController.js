const { loadProducts, storeProducts } = require('../data/productsModule')


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products = loadProducts()

		return res.render('products', { products, toThousand })
		// Do the magic
	},

	// Detail - Detail from one product

	detail: (req, res) => {
		const products = loadProducts()

		let product = products.find(product => product.id === +req.params.id)// aca filtro los productos i se hace visible el producto que sea ifual al id

		res.render('detail', {
			product, toThousand
		})

		// Do the magic
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
		// Do the magic
	},

	// Create -  Method to store
	store: (req, res) => {
		const products = loadProducts()

		const { name, description, price, discount, category } = req.body //traigo los datos que vienen en el formulario

		const newProduct = {//creo un nuevo objeto el cual voy a agregar a la base de datos
			id: (products[products.length - 1].id + 1),
			name: name.trim(),// aca modifico los valores que vienen del req.body
			description: description.trim(),
			category,
			discount: +discount,
			price: +price,
			image: 'default-image.png'
		}


		const productModify = [...products, newProduct] //agrego el objeto a la base de datos
		storeProducts(productModify) //'ejecuta la funcion y toma como parametro la funcion que quiere guardar el el Json'
		res.redirect('/products')
	},

	// Update - Form to edit
	edit: (req, res) => {
		const products = loadProducts()

		const product = products.find(product => product.id === +req.params.id)
		res.render('product-edit-form', {
			product
		})
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		const products = loadProducts()

		const { name, description, price, discount, category } = req.body

		const productModify = products.map(product => {
			if (product.id === +req.params.id) {
				return {
					...product,
					name: name.trim(),
					price: +price,
					discount: +discount,
					category,
					description: description.trim()
				}
			}
			return product
		})

		storeProducts(productModify) //'ejecuta la funcion y toma como parametro la funcion que quiere guardar el el Json'
		res.redirect('/')

	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		
		const {id} = req.params

		const products = loadProducts()

		const productModify = products.filter( product => product.id !== +id) // recorro el array y me devuelve todo cuyo id, sea diferente al que me muestra el id actual, osea que me da por resultado una lista sin el producto actual
		
		storeProducts(productModify) //'ejecuta la funcion y toma como parametro la funcion que quiere guardar el el Json'
		
		res.redirect('/products')


	}
};

module.exports = controller;