const knex = require('knex');
const cfg  = require('../../knexfile');

const conn = knex(cfg.development);

module.exports = conn;