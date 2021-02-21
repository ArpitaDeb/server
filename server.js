const express = require('express');
const data = require('./data'); 
const app = express();

app.get('/',(req,res)=>{
  res.send(data)
})

const port = 5000;
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));