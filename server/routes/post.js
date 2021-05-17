const express = require('express')

const router = express.Router()

//import controller methods
const {create, list, read} = require('../controllers/post')

router.post('/posts', create)
router.get('/posts', list)
router.get('/posts/:slug', read)

module.exports = router