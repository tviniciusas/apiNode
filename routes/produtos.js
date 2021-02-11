const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) =>{ res.status(200).send({ message: 'usando get teste de alteração' }) })

router.post('/', (req, res, next) =>{ res.status(201).send({ mensagem: 'usando post servidor proprio porra!!! uhulll' }) })

module.exports = router
