const knex = require('knex');
const configuration  = require('../../knexfile');

const cfg = process.env.NODE_ENV === 'test' 
    ? configuration.test 
    : configuration.development;

const conn = knex(cfg);

module.exports = conn;