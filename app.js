const express = require('express');
const app = express();
const productRoutes = require("./routes/productRoutes")

app.get('/', (req, res) => {
   res.send('Hello Shopper!');
})

app.use(express.json());
app.use('/products', productRoutes); // Defines the base URL for the productRoutes

module.exports = app;