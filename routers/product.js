const express=require('express');
const router=express.Router();



const {getallproducts, getallproductsstatic}=require('../controllers/products');

router.get('/', getallproducts);

router.get('/products', getallproductsstatic);

module.exports=router;
