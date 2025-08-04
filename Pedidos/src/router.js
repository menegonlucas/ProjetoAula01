const express = require('express');
const routes = express.Router();

const Login = require('./controllers/login');
const Usuario = require('./controllers/usuario');
const Produto = require('./controllers/produto');
const Pedido = require('./controllers/pedido');
const MiddlewareAuth = require('./middlewares/auth');

routes.get('/', (req, res) => {
    res.json({ titulo: 'API Pedidos respondendo, documentação em /docs' });
});

routes.post('/api/login', Login.login);
routes.get('/api/validacao', Login.validaToken);

routes.get('/api/usuarios', MiddlewareAuth, Usuario.read);
routes.post('/api/usuarios', Usuario.create);
routes.patch('/api/usuarios/:id', MiddlewareAuth, Usuario.update);
routes.delete('/api/usuarios/:id', MiddlewareAuth, Usuario.del);

routes.get('/api/produtos', Produto.read);
routes.post('/api/produtos', MiddlewareAuth, Produto.create);
routes.patch('/api/produtos/:id', MiddlewareAuth, Produto.update);
routes.delete('/api/produtos/:id', MiddlewareAuth, Produto.del);

routes.get('/api/pedidos', MiddlewareAuth, Pedido.read);
routes.post('/api/pedidos', MiddlewareAuth, Pedido.create);
routes.patch('/api/pedidos/:id', MiddlewareAuth, Pedido.update);
routes.delete('/api/pedidos/:id', MiddlewareAuth, Pedido.del);

module.exports = routes;