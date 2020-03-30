const conn = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index(req, res) {
        const ongs = await conn('ongs').select('*');
        return res.json(ongs);
    },
    
    async create(req, res) {
        const {name, email, whatsapp, city, uf} = req.body;
        const id = generateUniqueId();
        
        
        await conn('ongs').insert({
            id, name, email, whatsapp, city, uf
        });

        return res.json({id});
    }
}