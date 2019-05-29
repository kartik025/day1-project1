const express = require('express');
const productrouter = require('./product');
const app = express();

app.use(productrouter);
app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000');
})