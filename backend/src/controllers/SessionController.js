const conn = require('../database/connection');

module.exports = {
    async create(req, res) {
        const {id} = req.body;
        
        const ong = await conn('ongs')
        .where('id', id)
        .select('name')
        .first();

        if (!ong) {
            return res.status(404).json({
                error: 'No ONG found'
            });
        }

        return res.json(ong);
    },
}