'use strict';

module.exports = function (app) {
    app.use('/api/users', require('./api/user'));
    app.use('/api/talks', require('./api/talk'));
    app.use('/api/subjects', require('./api/subject'));

    app.all('*', (req, res) => res.status(404).json("Resource Not Found"));
}