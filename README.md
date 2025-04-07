# Build Your Own API Challenge - Product API
Practising building my own API in Javascript using Express web framework. The API will serve data about Products for an ecommerce store.


## Project Setup Steps
- Initialise the project with NPM with default settings: `npm init -y`
- Add "Nodemon" as a development dependency: `npm i -D nodemon`
- Add custom scripts for `nodemon` commands to the `package.json` file's `scripts` block, similarly to below:
    ```json
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon index.js",
        "start": "node index.js"
    },
    ```
- Add "Express" web framework as a dependency: `npm i express`

