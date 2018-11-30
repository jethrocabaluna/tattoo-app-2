const keystone = require('keystone');

const Tattoo = keystone.list('Tattoo');

exports.list = (req, res) => {
    Tattoo.model.find((err, tattoos) => {
        if (err) return res.apiError('database error', err);

        res.apiResponse(tattoos);
    });
}