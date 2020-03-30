const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');
const routes  = express.Router();
const conn = require('./database/connection');

const OngController  = require('./controllers/OngController');
const IncController  = require('./controllers/IncidentController');
const ProfController = require('./controllers/ProfileController');
const SesController  = require('./controllers/SessionController');

routes.post('/session', SesController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}),IncController.index);
routes.post('/incidents', IncController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}),ProfController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
}),IncController.delete);

module.exports = routes;
