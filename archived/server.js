"use strict";

// // require("babel-core").transform("code", options);
// import * as firebase from 'firebase';
// import Express from 'express';
// import path from 'path';
// import bodyParser from 'body-parser';
// // import router from './routes/index';
const firebase = require('firebase');
const Express =  require('express');
const bodyParser = require('body-parser');
const path = require('path')
const router = Express.Router();

const port = 9000;


// // Bootstrap new application
const app = new Express();

// // Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// // Serve static assets
app.use(Express.static(path.resolve(__dirname, './public')));
// app.use(Express.static('dist'));


// app.get("/", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
// })

// // Initialize 
app.listen(port, () => {
  console.log('listening', port);
})

module.exports = app;