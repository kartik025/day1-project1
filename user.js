const express = require('express');

const router = express.Router();

router.post('/products',(request,response)=>{
    response.send('User authenticated');
});

module.exports = router;
