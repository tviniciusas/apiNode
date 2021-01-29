const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) =>{ res.status(200).send({ message: 'usando rota de produtos' }) })

router.post('/', (req, res, next) =>{ res.status(201).send({ mensagem: 'usando post rota produtos' }) })

module.exports = router
