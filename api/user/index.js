'use strict';
let router = require('express').Router();
router.post('/', (req, res) => res.status(201).json({ 'message': 'success' }));
router.post('/login', (req, res) => res.status(200).send({ 'token': 'udyashdhashdjashjkdhsjahdjashdhal' }));

module.exports = router;