const ProductController = require('../controllers.product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.post('/api/product', ProductController.getAllProduct);
    app.get('/api/people/:id', ProductController.getProduct);
    app.put('/api/people/:id', PersonController.updateProduct);
}