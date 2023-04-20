const express = require('express');
const router = express.Router()
const ProductController = require('../controllers/ProductController');

router.post('/create',ProductController.create)
router.get('/getAll',ProductController.getAll)
router.get('/getById/:_id',ProductController.getById)
router.get('/getProductsByName/:name',ProductController.getProductsByName)
router.delete('/deleteById/:_id',ProductController.delete)
router.put('/updateById/:_id',ProductController.update)

module.exports = router;