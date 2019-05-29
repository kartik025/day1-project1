const express= require('express');

const router = express.Router();

router.get('/products',(request,response)=>{
    response.send('List of products');
})

module.exports = router;