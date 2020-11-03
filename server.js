const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
//iniciando app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DataBase
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true});

require("./srcs/models/product");

//Rotas
app.use("/api", require("./srcs/routes.js"));

app.listen(3001);


