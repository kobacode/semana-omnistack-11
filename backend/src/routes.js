const express = require('express');
const routes  = express.Router();
const conn = require('./database/connection');

const OngController  = require('./controllers/OngController');
const IncController  = require('./controllers/IncidentController');
const ProfController = require('./controllers/ProfileController');
const SesController  = require('./controllers/SessionController');

routes.post('/session', SesController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncController.index);
routes.post('/incidents', IncController.create);
routes.delete('/incidents/:id', IncController.delete);

routes.get('/profile', ProfController.index);

module.exports = routes;
