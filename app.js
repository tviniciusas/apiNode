const express = require('express')
const app = express()
const rotaProdutos = require('./routes/produto')

app.use('/produto',rotaProdutos)

module.exports = app


