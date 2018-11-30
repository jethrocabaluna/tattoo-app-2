const keystone = require('keystone');

const importRoutes = keystone.importer(__dirname);

const routes = {
    views: importRoutes('./views'),
    api: importRoutes('./api')
}

exports = module.exports = app => {
    app.get('/', routes.views.index);

    app.get('/api/tattoos/list', keystone.middleware.api, routes.api.tattoos.list);
}