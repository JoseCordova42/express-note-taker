// put stuff here for the api routes
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const dataBase = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    res.json(dataBase);
});

router.post('/notes', (req, res) => {
    let newNote = req.body;
    newNote.id = uuidv4();
    dataBase.push(newNote);

    fs.writeFile('./db/db.json', JSON.stringify(dataBase, null, '\t'), (err) => {
        if (err) throw err;
        res.json(dataBase);
    });    

    // res.send(req.body);
    
});

router.delete('/notes/:id', (req, res) => {
    for (let i =0; i < dataBase.length; i++) {
        if (dataBase[i].id === req.params.id) {
            dataBase.splice(i, 1);
        }
    };

    fs.writeFile('./db/db.json', JSON.stringify(dataBase, null, '\t'), (err) => {
        if (err) throw err;
        res.json(dataBase);
    });    

    // res.send(req.body);

});

module.exports = router;