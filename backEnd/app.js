const express = require('express');
const bodyParser = require('body-parser');
const personne = require('./user/personne');
const votant = require('./user/votan');

const app = express();

app.use((req, resp, next) => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/stuff', (req, resp, next) =>{
    const stuff = [
        {
            pers:personne
        },
        {
            vot: votant
        }
    ]
    resp.status(200).json(stuff);
});
module.exports = app;