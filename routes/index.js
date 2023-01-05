const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send("Ammon Nii Atiapa Quarshie")
});

module.exports = routes;