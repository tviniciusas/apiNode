const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) =>{ res.status(200).send({ message: 'usando get TESTE DEPLOY TOP' }) })

router.post('/', (req, res, next) =>{ res.status(201).send({ mensagem: 'usando post TESTE DEPLOY' }) })


module.exports = router
