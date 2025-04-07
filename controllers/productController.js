const Product = require('./models/Product');

const index = async (req, res) => {

    try {
        const products = Product.findAll();
        res.status(200).send(products);
    } catch {
        res.status(500).send({ error: 'Server Error' });
    }
}

const show = async (req, res) => {
    // Get the product id from the request (query) parameters
    const id = req.params.id;

    try {
        // Attempt to retrieve the product from the db/json by its id
        const product = Product.find(id);

        // If successful, return a 200 status code
        res.status(200).send(product);
    } catch {
        res.status(404).send({ error: err });
    }

}