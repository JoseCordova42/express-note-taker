// put stuff here for the api routes
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const dataBase = require('../db/db.json');

console.log(dataBase);

router.get('/notes', (req, res) => {
    res.json(dataBase);
});

// app.post('/notes', (req, res) => {

// });

module.exports = router;