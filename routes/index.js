const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.getNames);

module.exports =  routes;