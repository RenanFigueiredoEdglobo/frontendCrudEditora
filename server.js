const express = require('express');
const { resolve } = require('path');
const app = express();

app.use('/',express.static(resolve(__dirname,"./build")));
app.use('/cadastrar-noticia',express.static(resolve(__dirname,"./build")));
app.use('/cadastrar-autor',express.static(resolve(__dirname,"./build")));
app.use('*',express.static(resolve(__dirname,"./build")));
app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('Tudo funcionando certinho');
  })