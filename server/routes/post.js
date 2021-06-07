const express = require('express')

const router = express.Router()

//import controller methods
const {create, list, read, update, remove} = require('../controllers/post')

router.post('/posts', create)
router.get('/posts', list)
router.get('/posts/:slug', read)
router.put('/posts/:slug', update)
router.delete('/posts/:slug', remove)

module.exports = router