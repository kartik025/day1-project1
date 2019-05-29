const express = require('express');
const productrouter = require('./product');
const app = express();

const v = express('express');
app.use(productrouter);
app.unsubscribe(productrouter);
app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000');
})