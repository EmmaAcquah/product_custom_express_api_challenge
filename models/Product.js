const productsJson = require('../products.json');

class Product {
    constructor(productData) {
        this.name = productData.name;
        this.brand = productData.brand;
        this.id = productData.id;
        this.price = productData.price;
        this.category = productData.category;
    }

    static find(id) {
        // Find a product in the productsJson - use .find() array method, because the productsJson is an array of objects?
        const product = productsJson.find( (p) => productsJson.id == id);

        // If product is truthy (i.e. a product has been found)
        if (product) {
            return new Product(product);
        } else {
            throw "Error: Product not found";
        }
    }

}