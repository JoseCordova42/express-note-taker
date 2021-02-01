// put stuff here for the api routes
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const dataBase = require('../db/db.json');

router.get('/notes', (req, res) => {
    res.json(dataBase);
});

router.post('/notes', (req, res) => {
    dataBase.push(req.body);

    fs.writeFile('./db/db.json', JSON.stringify(dataBase, null, '\t'), () => {
        res.json(dataBase);
    });
    
});

// router.delete('/notes', (req, res) => {

// });

module.exports = router;